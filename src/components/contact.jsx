import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FiMail, FiSend } from 'react-icons/fi';

// ── Layout ───────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem) clamp(5rem, 10vw, 8rem);
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.75rem;
  text-align: center;
`;

const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.8rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 0.85rem;
`;

const SectionSub = styled(motion.p)`
  font-size: 0.95rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// ── Form ─────────────────────────────────────────────────────────────────────

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accentHover}
    );
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const inputBase = `
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1.5px solid transparent;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.92rem;
  color: inherit;
  transition: all 0.2s ease;
  outline: none;

  &::placeholder { color: rgba(112, 112, 160, 0.6); }

  &:focus {
    border-color: rgba(139, 92, 246, 0.5);
    background: rgba(139, 92, 246, 0.04);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.08);
  }
`;

const Input = styled.input`
  ${inputBase}
  border: 1.5px solid ${({ theme }) => theme.colors.border};
`;

const TextArea = styled.textarea`
  ${inputBase}
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  resize: vertical;
  min-height: 120px;
  line-height: 1.65;
`;

const ErrorMsg = styled.p`
  font-size: 0.8rem;
  color: #f87171;
  margin-top: 0.15rem;
`;

const SubmitBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.93rem;
  font-weight: 600;
  margin-top: 0.25rem;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);

    &::after { transform: translateX(100%); }
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;

// ── Thank You ─────────────────────────────────────────────────────────────────

const ThankYou = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3.5rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
`;

const CheckCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #fff;
`;

const ThankTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const ThankText = styled.p`
  font-size: 0.93rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 400px;
`;

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Contact = () => {
  const [state, handleSubmit] = useForm('mdkaewvz');

  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            Let's Talk
          </SectionTitle>
          <SectionSub
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
          >
            Have a project in mind, want to collaborate, or just want to say hello?
            Drop me a message and I'll get back to you.
          </SectionSub>
        </SectionHeader>

        {state.succeeded ? (
          <ThankYou
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle>✓</CheckCircle>
            <ThankTitle>Message received.</ThankTitle>
            <ThankText>
              Thanks for reaching out — I'll get back to you as soon as I can.
            </ThankText>
          </ThankYou>
        ) : (
          <Form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15 }}
          >
            <Field>
              <Label htmlFor="email">
                <FiMail size={14} /> Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} component={ErrorMsg} />
            </Field>

            <Field>
              <Label htmlFor="message">
                <FiSend size={14} /> Message
              </Label>
              <TextArea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} component={ErrorMsg} />
            </Field>

            <SubmitBtn
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend size={16} />
              {state.submitting ? 'Sending…' : 'Send Message'}
            </SubmitBtn>
          </Form>
        )}
      </Container>
    </Section>
  );
};

export default Contact;
