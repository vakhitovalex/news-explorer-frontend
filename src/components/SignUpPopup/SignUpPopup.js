import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function SignUpPopup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [submitButtonActive, setSubmitButtonActive] = useState(false);

  useEffect(() => {
    validateFormInputs();
  });

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(e.target.validationMessage);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError(e.target.validationMessage);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
    setUsernameError(e.target.validationMessage);
  }

  function validateFormInputs() {
    if (
      email &&
      password &&
      username &&
      emailError === '' &&
      passwordError === '' &&
      usernameError === ''
    ) {
      setSubmitButtonActive(true);
    } else {
      setSubmitButtonActive(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(email, password, username);
  }

  return (
    <PopupWithForm
      name='signup'
      title='Sign Up'
      link='Sign In'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onLinkClick={props.onLinkClick}
      onSubmit={handleSubmit}
      buttonState={submitButtonActive}
    >
      <div className='form__input-group'>
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
          noValidate
        />
        <span id='email-error' className='form__error'>
          {emailError}
        </span>
      </div>
      <div className='form__input-group'>
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
          noValidate
        />
        <span id='password-error' className='form__error'>
          {passwordError}
        </span>
      </div>
      <div className='form__input-group'>
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
          noValidate
        />
        <span id='username-error' className='form__error'>
          {usernameError}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default SignUpPopup;
