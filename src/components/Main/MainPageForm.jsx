import React from 'react';
import { useForm } from 'react-hook-form';

const MainPageForm = ({ onFormSubmit, onSubmitData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ transaction }) => {
    console.log(transaction);

    // Split the transaction string and map each character to an image filename
    const images = transaction
      .split('')
      .map(char => `${char.toLowerCase()}.png`);

    // Call the onFormSubmit function to update the imageList state in the MainPage component
    onFormSubmit(images);

    // Call the onSubmitData function to send the transaction data to the API
    onSubmitData(transaction);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-floating mb-3'>
        <input
          {...register('transaction')}
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='Enter text...'
        />
        <label htmlFor='floatingInput'>Enter text:</label>
      </div>
      <button type='submit' className='btn btn-danger'>
        Continue
      </button>
    </form>
  );
};

export default MainPageForm;