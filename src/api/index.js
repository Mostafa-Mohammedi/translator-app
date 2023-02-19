
const apiKey = process.env.REACT_APP_API_KEY;

/**
 * react arrow function component fot getting the REACT_APP_API_KEY and creating the header for HTTP request
 * @returns {Object} A objekt that cotnaint the  header field containt 'Content-type' and 'x-api-key'.
 */
export const createHeaders = () => {
    return {
        'Content-type' : 'application/json',
        'x-api-key': apiKey
    }


}


