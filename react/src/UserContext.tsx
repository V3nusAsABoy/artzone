import {createContext, useState} from "react";
import type user from './types/user';

export const UserContext = createContext({});

export function UserContextProvider({children}: {children: React.ReactNode}) {
    const [userInfo, setUserInfo] = useState<user>({} as user);
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}