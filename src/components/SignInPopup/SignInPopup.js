import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function SignInPopup(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();
    // Pass the values of the managed components to the external handler
    // props.onUpdateUser({
    //   name,
    //   about: description,
    // });
  }

  // useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);

  return (
    <PopupWithForm
      name='signin'
      title='Sign In'
      link='Sign Up'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label for='email' className='form__label'>
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

      {/* <span id='profile-info-error' className='form__error'></span> */}
      <label for='password' className='form__label'>
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
        name='profileAbout'
      />
      {/* <button className='form__submit' type='submit'>
        Sign in
      </button> */}
      {/* <span id='profile-info-error' className='form__error'></span> */}
    </PopupWithForm>
  );
}

export default SignInPopup;
