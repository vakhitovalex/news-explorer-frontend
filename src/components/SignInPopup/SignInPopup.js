import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function SignInPopup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitButtonActive, setSubmitButtonActive] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(e.target.validationMessage);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError(e.target.validationMessage);
  }

  useEffect(() => {
    validateFormInputs();
  });

  function validateFormInputs() {
    if (email && password && emailError === '' && passwordError === '') {
      setSubmitButtonActive(true);
    } else {
      setSubmitButtonActive(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      name='signin'
      title='Sign In'
      link='Sign Up'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onLinkClick={props.onLinkClick}
      buttonState={submitButtonActive}
      onSubmit={handleSubmit}
    >
      <div className='form__input-group'>
        <label htmlFor='email' className='form__label'>
          Email
        </label>
        <input
          id='loginEmail'
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
        <span id='email-error' className='form__error'>
          {emailError}
        </span>
      </div>
      <div className='form__input-group'>
        <label htmlFor='password' className='form__label'>
          Password
        </label>
        <input
          id='loginPassword'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          className='form__input form__input_type_password'
          placeholder='Enter password'
          required
          minLength='2'
          maxLength='200'
          name='profileAbout'
        />
        <span id='password-error' className='form__error'>
          {passwordError}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default SignInPopup;
