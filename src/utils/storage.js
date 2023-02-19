/**
* storageSave saves data to session storage using the provided key.
* @param {string} key - The key under which the data should be stored.
* @param {Object} value - The data to be stored.
*/
export const storageSave = (key, value) => {
    if(!key){
        throw new Error("no storage key provided");
    }
    if(!value){
        throw new Error("no value provided ")
    }
    
    sessionStorage.setItem(key, JSON.stringify(value));
}

/**
* storageRead reads data from session storage using the provided key.
* @param {string} key - The key under which the data is stored.
*/


export const storageRead = key => {
    const data = sessionStorage.getItem(key);
    if(data) {
        return JSON.parse(data);
    }
    return null;
}

/**
* storageDelete removes data from session storage using the provided key.
* @param {string} key - The key under which the data is stored.
*/

export const storageDelete =  key => {
    sessionStorage.removeItem(key)

}