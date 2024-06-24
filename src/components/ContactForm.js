import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TypedText from './TypedText';
import './ContactForm.css';

function ContactForm({ isDark }) {
  const [validated, setValidated] = useState(false);

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      
    } else {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    }
  }

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="form"
    >
      <h2><TypedText strings={["Contact"]} /></h2>
      <Form.Group className="form-group">
        <Form.Control
          required
          type="text"
          placeholder="Name"
          className="form-control"
        />
        <Form.Control.Feedback type="invalid">
          <p>Please enter your name.</p>
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          required
          type="email"
          placeholder="Email address"
          className="form-control"
        />
        <Form.Control.Feedback type="invalid">
          <p>Please enter a valid email address.</p>
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          required
          as="textarea"
          placeholder="Message"
          rows={8}
          className="form-control"
        />
        <Form.Control.Feedback type="invalid">
          <p>Please enter your message.</p>
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
