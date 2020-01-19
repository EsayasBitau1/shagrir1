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
    <section className="background-form">
      <div className="form-container">
        <div className="formsec">
          <form className="form">
            <Input onChange={handleChange} name="name" placeholder="שם פרטי" />
            <Input placeholder="שם משפחה" />
            <Input onChange={handleChange} name="id" pattern="[0-9]{3}" placeholder="מספר ת.ז" />
            <Input onChange={handleChange} name="email" placeholder="מייל" />
            <Input placeholder="טלפון" />
            <Input onChange={handleChange} name="id" pattern="[0-9]{14}" placeholder="מספר כ. אשראי" />
            <div className="flex-container">
              <Input onChange={handleChange} name="id" pattern="[0-9]{6}" placeholder="תאריך" />
              <Input placeholder="CVV" />
            </div>
               <button className="input-btn" link='/done'> שלח >></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
