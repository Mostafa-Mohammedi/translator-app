import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

// Context -> expsoing
const UserContext = createContext();


export const useUser = () => {
    const { user, setUser } = useContext(UserContext);
  
    if (typeof user === 'undefined') {
      throw new Error('useUser must be used within a UserProvider');
    }
  
    return [user, setUser];
  };
// Provider -> Managing state

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

    const state = {user, setUser}

    return (
        <UserContext.Provider value={ state}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;

