// Form.js

import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for custom styles
const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledForm = styled(Form)`
  background: linear-gradient(to right, #333, #555); /* Gradient background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  min-height: 400px;
`;

const SubmitButton = styled(motion.button)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;
  min-height: 60px;
  font-size: 1.2rem;
`;

const FormError = styled.div`
  color: red;
  margin-top: 5px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    setFormErrors(errors);

    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      // Your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='bg-dark py-5'>
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className='text-white fw-bold fs-3'>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!formErrors.name} className='fw-bold fs-4'
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Label className='text-white fw-bold fs-3'>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!formErrors.email} className='fw-bold fs-4'
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <br />  <br />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </SubmitButton>
      </StyledForm>
    </FormContainer>
    </div>
  );
};

export default Contact;
