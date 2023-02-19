import React from 'react';
import { useForm } from 'react-hook-form';
import './MainPageForm.css'
/**
 * Form component for entering text to be translated
 * Takes the input data and check for checks for spaces.
 * Filters the space between the sentence and converts to an image name
 * Sends the image name to the mainpage that displays the images 
 * Takes the input sentence and send the data to the mainpage.jsx
 * 
 * @param {object} props - The component props
 * @param {function} props.onFormSubmit - A function to update the imageList state in the MainPage component
 * @param {function} props.onSubmitData - A function to send the translation data to the API
 */
const MainPageForm = ({ onFormSubmit, onSubmitData }) => {
  const { register, handleSubmit } = useForm();

  /**
   * Takes the data from input field and convert it to image name string and sendt the data back to mainpage.jsx
   * Takes aswell tha data from the input fields and send it back to the mainpage.jsx
   * @param {Object} data from the translation in the input field 
   * @param {String} takes the data and convert to string
   */
  const onSubmit = ({ translation }) => {

    const images = translation
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "") 
    .split("")
    .map(char => `${char}.png`)
    .filter(fileName => fileName !== ".png"); 

    onFormSubmit(images);
    onSubmitData(translation);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mainpage-form-container">
      <div className='form-floating mb-3'>
        <input
          {...register('translation')}
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='Enter text...'
          maxLength={40}
        />
        <label htmlFor='floatingInput'>Enter sentence to translate </label>
      </div>
      <button type='submit' className='btn btn-danger'>
        Translation
      </button>
    </form>
  );
};

export default MainPageForm;