import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function SignUpPopup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  return (
    <PopupWithForm
      name='signup'
      title='Sign Up'
      link='Sign In'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onLinkClick={props.onLinkClick}
    >
      <label htmlFor='email' className='form__label'>
        Email
      </label>
      <input
        id='email'
        type='email'
        value={email}
        onChange={handleEmailChange}
        className='form__input form__input_type_email'
        placeholder='Enter email'
        required
        minLength='2'
        maxLength='40'
        name='email'
      />

      <label htmlFor='password' className='form__label'>
        Password
      </label>
      <input
        id='password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
        className='form__input form__input_type_password'
        placeholder='Enter password'
        required
        minLength='2'
        maxLength='200'
        name='password'
      />
      <label htmlFor='username' className='form__label'>
        Username
      </label>
      <input
        id='username'
        type='username'
        value={username}
        onChange={handleUsernameChange}
        className='form__input form__input_type_username'
        placeholder='Enter your username'
        required
        minLength='2'
        maxLength='200'
        name='username'
      />
    </PopupWithForm>
  );
}

export default SignUpPopup;
