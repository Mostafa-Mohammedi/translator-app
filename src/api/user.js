import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

const checkForUser = async (name) => {
    try {
        const response = await fetch(`${apiUrl}?username=${name}`);
        console.log(response);
        if(!response.ok){
            throw new Error("could not complete request");
        }
        const data = await response.json();
        return [null, data]

    }catch(error){
        return [ error.message, []]

    }

} 
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

export const loginUser = async (name) => {
    const [ checkError, user] = await checkForUser(name);

    if(checkError !== null){
        return [checkError, null]
    }
    if(user.length > 0){
        return [null, user.pop()]

    }

    return await createUser(name);
}
