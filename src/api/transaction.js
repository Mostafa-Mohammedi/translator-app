import { createHeaders } from '.';

const apiUrl = process.env.REACT_APP_API_URL;
export const TransactionAdd = async (user, transaction) => {
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

