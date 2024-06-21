import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TypedText from './TypedText';
import './ContactForm.css';

function ContactForm({ isDark }) {
  return (
    <Form className="form">
      <h2><TypedText strings={["Contact"]} /></h2>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          placeholder="Name"
          className="form-control"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="email"
          placeholder="Email address"
          className="form-control"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          as="textarea"
          placeholder="Message"
          rows={8}
          className="form-control"
        />
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
