import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;
/**
 * Arrow function component  to check if the user exist in the API
 * @param {String} username username in string value
 * @returns the data in json 
 */
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`);
        if(!response.ok){
            throw new Error("could not complete request");
        }
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [ error.message, []]

    }

} 

/**
 * Arrow function component to createh a new user in the API uses the Post method 
 * @param {String} username username to add to the body in the json object
 * @returns the data or null
 */
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        } );
        if(!response.ok){
            throw new Error("could not create user  with name: " + username);
        }
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [ error.message, []]

    }

}

/**
 * React arrow component check if the user exist in the system
 * if not exist it will create the user in the API
 * @param {String} username string name for user 
 * @returns The user object
 */

export const loginUser = async (username) => {
    const [ checkError, user] = await checkForUser(username);

    if(checkError !== null){
        return [checkError, null]
    }
    if(user.length > 0){
        return [null, user.pop()]

    }

    return await createUser(username);
}

/**
 * React arrow component to find the user bi id and return the user object
 * @param {Number} userId number to find the user object 
 * @returns user object
 */
export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`);
        if(!response.ok){
            throw new Error("could not fetch user");
        }

        const user = await response.json();
        return [null, user];
    } catch (error) {
        return [error.message, null]
        
    }
}


