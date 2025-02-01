// header.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Header container with a backdrop filter and shadow
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.header};
  backdrop-filter: blur(5px);
  z-index: 999;
`;

// Logo styled as a clickable element
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`;

// Desktop navigation links
const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.hover};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

// Hamburger icon for mobile view
const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

// Mobile menu container using framer-motion for animations
const MobileMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mobileMenuBg};
  box-shadow: ${({ theme }) => theme.shadows.hover};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`;

// Close button for the mobile menu
const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

// Mobile navigation links styling
const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.hover};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Scroll handler to smoothly navigate to page sections
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false); // Close mobile menu after navigation
  };

  // Framer Motion variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
  };

  return (
    <>
      <HeaderContainer>
        <Logo onClick={() => handleScroll('hero')}>Khayrullo</Logo>
        <NavLinks>
          <a onClick={() => handleScroll('hero')}>Home</a>
          <a onClick={() => handleScroll('about')}>About</a>
          <a onClick={() => handleScroll('projects')}>Projects</a>
          <a onClick={() => handleScroll('contact')}>Contact</a>
        </NavLinks>
        <HamburgerMenu onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </HamburgerMenu>
      </HeaderContainer>

      <MobileMenu
        initial="hidden"
        animate={isMenuOpen ? 'visible' : 'hidden'}
        variants={mobileMenuVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <CloseButton onClick={() => setMenuOpen(false)}>
          <FiX />
        </CloseButton>
        <MobileNavLink onClick={() => handleScroll('hero')}>Home</MobileNavLink>
        <MobileNavLink onClick={() => handleScroll('about')}>About</MobileNavLink>
        <MobileNavLink onClick={() => handleScroll('projects')}>Projects</MobileNavLink>
        <MobileNavLink onClick={() => handleScroll('contact')}>Contact</MobileNavLink>
      </MobileMenu>
    </>
  );
}

export default Header;
