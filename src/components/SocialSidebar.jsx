import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// ── Styled Components ─────────────────────────────────────────────────────────

const Sidebar = styled(motion.div)`
  position: fixed;
  right: 1.8rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  z-index: 100;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Connector = styled.div`
  width: 1px;
  height: 36px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.border},
    ${({ theme }) => theme.colors.borderAccent},
    ${({ theme }) => theme.colors.border}
  );
  flex-shrink: 0;
`;

const Circle = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  text-decoration: none;
  flex-shrink: 0;
  transition: color 0.2s ease, border-color 0.2s ease,
              background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background: ${({ theme }) => theme.colors.accentDim};
    box-shadow: 0 0 14px ${({ theme }) => theme.colors.accentGlow};
  }
`;

// ── Data ──────────────────────────────────────────────────────────────────────

const socials = [
  {
    href:  'https://github.com/khayrullo-isomiddinov',
    icon:  <FaGithub />,
    label: 'GitHub',
  },
  {
    href:  'https://www.linkedin.com/in/khayrullo-isomiddinov/',
    icon:  <FaLinkedinIn />,
    label: 'LinkedIn',
  },
  {
    href:  'https://instagram.com/khayrulloismdnv',
    icon:  <FaInstagram />,
    label: 'Instagram',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const SocialSidebar = () => (
  <Sidebar
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <Connector />
    {socials.map(({ href, icon, label }, i) => (
      <React.Fragment key={label}>
        <Circle
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
        >
          {icon}
        </Circle>
        {i < socials.length - 1 && <Connector />}
      </React.Fragment>
    ))}
    <Connector />
  </Sidebar>
);

export default SocialSidebar;
