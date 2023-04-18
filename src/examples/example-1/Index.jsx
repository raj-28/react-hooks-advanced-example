import React, { useState, useEffect } from 'react';

const Form = () => {
  // Set up state for form input values and validation flags
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [formData,setFormData]=useState('');

  // Use effect hook to validate name input whenever it changes
  useEffect(() => {
    setIsValidName(validateName(name));
  }, [name]);

  // Use effect hook to validate email input whenever it changes
  useEffect(() => {
    setIsValidEmail(validateEmail(email));
  }, [email]);

  // Use effect hook to validate password input whenever it changes
  useEffect(() => {
    setIsValidPassword(validatePassword(password));
  }, [password]);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidName && isValidEmail && isValidPassword) {
      const data = {
        name: name,
        email: email,
        password: password
      };
      setFormData(data);
      setName('');
      setEmail('');
      setPassword('');
    }
  };



  // Display in table form
  let table = null;
  if (formData) {
    const { name, email, password } = formData;
    table = (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    );
  }


  // 
  // Render the form with input fields and error messages
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!isValidName && <span>Invalid name</span>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isValidEmail && <span>Invalid email</span>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isValidPassword && <span>Invalid password</span>}

      <button type="submit">Submit</button>
    </form>
    {table}
    </div>
  );
};

// Helper function to validate name input
const validateName = (name) => {
  return name.trim().length > 0;
};

// Helper function to validate email input
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate password input
const validatePassword = (password) => {
  return password.trim().length > 0;
};

export default Form;