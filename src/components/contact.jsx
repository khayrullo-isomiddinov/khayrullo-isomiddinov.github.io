import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = styled.section`
  scroll-margin-top: 80px; /* Offset for fixed header */
  min-height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin-bottom: 2rem; /* Space below heading */
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  width: 250px;
  margin: 1rem auto; /* Center the divider */
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.shadows.card};
    transition: ${({ theme }) => theme.transitions.default};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
    }
  }

  textarea {
    resize: none;
    height: 150px; /* Set a fixed height for the textarea */
  }

  button {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.card};
    font-size: 1rem;
    font-weight: bold;
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.hover};
      box-shadow: ${({ theme }) => theme.shadows.hover};
    }
  }
`;

const ThankYouMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh; /* Center the message vertically */
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`;

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkaewvz");

  if (state.succeeded) {
    return (
      <ThankYouMessage>
        Thanks you for the message!!!
      </ThankYouMessage>
    );
  }

  return (
    <ContactSection id="contact">
      <h2>Get In Touch</h2>
      <Divider />
      <p>
        Whether you want to discuss a project, collaborate, or just say hello,
        feel free to drop a message. I'll get back to you as soon as I can!
      </p>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message..."
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
