import React, { useState } from 'react';
import Input from '../Input/Input';
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  
  console.log(formData);
  return (
    <form className="form">
      <Input onChange={handleChange} name="name" placeholder="שם פרטי" />
      <Input placeholder="שם משפחה" />
      <Input onChange={handleChange} name="id" pattern="[0-9]{3}" placeholder="מספר ת.ז" />
      <Input onChange={handleChange} name="email" placeholder="מייל" />
      <Input placeholder="טלפון" />
      <Input placeholder="מספר כ. אשראי" />
      <div className="flex-container">
        <Input placeholder="תאריך" />
        <Input placeholder="CVV" />
      </div>
      <button type="submit">שלח</button>
    </form>
  );
}

export default Form;
