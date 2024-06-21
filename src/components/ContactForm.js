import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TypedText from './TypedText';
import './ContactForm.css';

function ContactForm() {
  return (
    <Form className="form">
      <h2><TypedText strings={["Contact"]} /></h2>
      <Form.Group className="form-group">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control as="textarea" placeholder="Message" rows={8} />
      </Form.Group>
      <Button variant="outline-dark" type="submit">
        Send message
      </Button>
    </Form>
  );
}

export default ContactForm;
