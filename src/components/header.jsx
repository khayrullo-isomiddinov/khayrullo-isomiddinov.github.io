import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useLang } from '../context/AppContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1.5rem, 6vw, 5rem);
  position: fixed;
  width: 100%;
  height: 72px;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.colors.background}e8` : theme.colors.background};
  backdrop-filter: blur(14px);
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.header : 'none'};
  z-index: 999;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const Logo = styled(motion.div)`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.text} 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    font-weight: 500;
    font-size: 0.88rem;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      &::after { width: 100%; }
    }
  }

  @media (max-width: 768px) { display: none; }
`;

const IconBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

const LangToggle = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.28rem 0.65rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  transition: color 0.3s ease;
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
  @media (max-width: 768px) { display: block; }
`;

const MobileMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mobileMenuBg};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.modal};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  transition: color 0.3s ease;
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem 0;
  transition: color 0.3s ease;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accentHover}
  );
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent}70;
  transform-origin: left;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 999;
  backdrop-filter: blur(2px);
`;

const navEn = ['Home', 'About', 'Experience', 'Projects', 'Contact'];
const navUz = ['Bosh sahifa', 'Haqida', 'Tajriba', 'Loyihalar', 'Aloqa'];
const navIds = ['hero', 'about', 'experience', 'projects', 'contact'];

function Header({ isDark, setIsDark }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const { lang, setLang } = useLang();

  const navLabels = lang === 'uz' ? navUz : navEn;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <ProgressBar style={{ scaleX: scrollYProgress }} />
        <Logo
          onClick={() => handleScroll('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HARRY
        </Logo>

        <NavLinks>
          {navLabels.map((label, i) => (
            <a key={navIds[i]} onClick={() => handleScroll(navIds[i])}>{label}</a>
          ))}
        </NavLinks>

        <RightGroup>
          <LangToggle
            onClick={() => setLang(lang === 'en' ? 'uz' : 'en')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            title="Toggle language"
          >
            {lang === 'en' ? 'UZ' : 'EN'}
          </LangToggle>

          <IconBtn
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </IconBtn>

          <HamburgerMenu onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </HamburgerMenu>
        </RightGroup>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <CloseButton onClick={() => setMenuOpen(false)}><FiX /></CloseButton>
              {navLabels.map((label, i) => (
                <MobileNavLink key={navIds[i]} onClick={() => handleScroll(navIds[i])}>
                  {label}
                </MobileNavLink>
              ))}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
