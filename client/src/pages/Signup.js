import React, { useState } from 'react';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <main className=''>

      <div className='signup-container'>

        <div className='signup-card'>

          <h2 className='signup-text'>Sign Up!</h2>

          <div className='signup-form'>

            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your Restaurant Name'
                name='restaurantName'
                type='restaurantName'
                id='restaurantName'
                value={formState.restaurantName}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />

              <button className='signup-btn' type='submit'>
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;