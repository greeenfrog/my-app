import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TypedText from './TypedText';
import './ContactForm.css';

function ContactForm({ isDark }) {
  const [nameValidated, setNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [messageValidated, setMessageValidated] = useState(false);
  const [nameLength, setNameLength] = useState(0);
  const [isValidEmail, setValidEmail] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      sendData(formData);
    } else {
      e.preventDefault();
      e.stopPropagation();
      setNameValidated(true);
      setEmailValidated(true);
      setMessageValidated(true);
    }
  }

  async function sendData(formData) {
    console.log(...formData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      console.log(await response.json());
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className="form"
    >
      <h2><TypedText strings={["Contact"]} /></h2>
      <Form.Group className="form-group">
        <Form.Control
          name="name"
          required
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setNameValidated(true);
            setNameLength(e.currentTarget.value.length);
          }}
          isValid={nameValidated && 0 < nameLength < 101}
          isInvalid={nameValidated && (nameLength <= 0 || nameLength >= 101)}
          className="form-control"
        />
        <Form.Control.Feedback type="invalid" className='left-align'>
          {
            nameLength <= 0 ?
            "Please enter your name." :
            "Name cannot exceed 100 characters."
          }
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          name="email"
          required
          type="email"
          placeholder="Email address"
          onChange={(e) => {
            setEmailValidated(true);
            setValidEmail(e.currentTarget.checkValidity());
          }}
          isValid={emailValidated && isValidEmail}
          isInvalid={emailValidated && !isValidEmail}
          className="form-control"
        />
        <Form.Control.Feedback type="invalid" className='left-align'>
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          name="message"
          required
          as="textarea"
          placeholder="Message"
          rows={8}
          onChange={(e) => {
            setMessageValidated(true);
            setMessageLength(e.currentTarget.value.length);
          }}
          isValid={messageValidated && 0 < messageLength < 1001}
          isInvalid={messageValidated && (messageLength <= 0 || messageLength >= 1001)}
          className="form-control"
        />
        <Form.Control.Feedback type="invalid" className='left-align'>
          {
            messageLength <= 0 ?
            "Please enter your message.":
            "Message cannot exceed 1000 characters."
          }
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant={
          isDark ?
          "outline-light" :
          "outline-dark"
        }
        type="submit"
      >
        Send message
      </Button>
    </Form>
  );
}

export default ContactForm;
