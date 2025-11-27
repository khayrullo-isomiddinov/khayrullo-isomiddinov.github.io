import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiMail, FiSend } from 'react-icons/fi';

const ContactSection = styled.section`
  scroll-margin-top: 80px;
  padding: 3rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.text}, ${({ theme }) => theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
`;

const Divider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.accent}, transparent);
  width: 100px;
  margin: 0 auto 1.5rem;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  position: relative;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent}15,
                0 4px 12px ${({ theme }) => theme.colors.accent}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: all 0.3s ease;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent}15,
                0 4px 12px ${({ theme }) => theme.colors.accent}20;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
  color: ${({ theme }) => theme.colors.background};
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ThankYouMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const ThankYouIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 0.5rem;
`;

const ThankYouTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.25rem;
`;

const ThankYouText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 450px;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkaewvz");

  if (state.succeeded) {
    return (
      <ContactSection id="contact">
        <Container>
          <ThankYouMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ThankYouIcon>✓</ThankYouIcon>
            <ThankYouTitle>Message Sent!</ThankYouTitle>
            <ThankYouText>
              I've received your message and will get back to you as soon as possible. 
              Looking forward to connecting with you!
            </ThankYouText>
          </ThankYouMessage>
        </Container>
      </ContactSection>
    );
  }

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether you want to discuss a project, collaborate, or just say hello,
          feel free to drop a message. I'll get back to you as soon as I can!
        </SectionSubtitle>
        <Divider />
        
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FormGroup>
            <Label htmlFor="email">
              <FiMail size={16} />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">
              <FiSend size={16} />
              Message
            </Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Tell me about your project, idea, or just say hello..."
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiSend size={18} />
            {state.submitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;
