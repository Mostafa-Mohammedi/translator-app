import { createHeaders } from '.';


const apiUrl = process.env.REACT_APP_API_URL;
/**
 * react arrow function for patching the translation array 
 * @param {Object} user object data   
 * @param {Array} transaction translation array
 * @returns null or update user object
 */
export const TranslationAdd = async (user, transaction) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: 'PATCH',
      headers: createHeaders(),
      body: JSON.stringify({
        username: user.username,
        translations: [...user.translations, transaction],
      }),
    });

    if (!response.ok) {
      throw new Error('Could not update transaction history');
    }

    const result = await response.json();

    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

/**
 * React arrow function for clearing the translation array 
 * @param {Number} userId user id number  
 * @returns null or the user object in json
 */

export const TranslationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: 'PATCH',
      headers: createHeaders(),
      body: JSON.stringify({
        translations: []
      }),
    });    

    if (!response.ok) {
      throw new Error('Could not update transaction history');
    }

    const result = await response.json();

    return [null, result];
  } catch (error) {
    return [error.message, null];

    
  }

}

