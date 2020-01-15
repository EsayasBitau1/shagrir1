import React, { useState } from 'react';
import Input from '../Input/Input';
import './Form.css'
import {Link} from 'react-router-dom'



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
      <Input onChange={handleChange} name="id" pattern="[0-9]{14}" placeholder="מספר כ. אשראי" />
      <div className="flex-container">
        <Input onChange={handleChange} name="id" pattern="[0-9]{6}" placeholder="תאריך" />
        <Input placeholder="CVV" />
      </div>
      <section className="buttons" >
            <Link to='/done' className='btn btn-light'>
              שלח >>
            </Link>
            </section>
    </form>
  );
}

export default Form;
