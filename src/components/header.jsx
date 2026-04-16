import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

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
      
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
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

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    display: block;
  }
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

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
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

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
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

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' }
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
          KI
        </Logo>
        <NavLinks>
          <a onClick={() => handleScroll('hero')}>Home</a>
          <a onClick={() => handleScroll('about')}>About</a>
          <a onClick={() => handleScroll('experience')}>Experience</a>
          <a onClick={() => handleScroll('projects')}>Projects</a>
          <a onClick={() => handleScroll('contact')}>Contact</a>
        </NavLinks>
        <HamburgerMenu onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </HamburgerMenu>
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
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <CloseButton onClick={() => setMenuOpen(false)}>
                <FiX />
              </CloseButton>
              <MobileNavLink onClick={() => handleScroll('hero')}>Home</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('about')}>About</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('experience')}>Experience</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('projects')}>Projects</MobileNavLink>
              <MobileNavLink onClick={() => handleScroll('contact')}>Contact</MobileNavLink>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
