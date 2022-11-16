import React, { createContext, useState } from "react";
import { DefaultUser } from "./DefaultUser";
type UserProviderProps = {
    children: React.ReactNode
}
export type UserType = {
    username: string,
    firstName: string,
    lastName: string,
    userType: string,
    id: string,
    birthDay: string
}
type UserContextType = {
    userActive: UserType | null,
    setUserActive: React.Dispatch<React.SetStateAction<UserType | null>>
}
export const UserContext = createContext<UserContextType | null>(null)
export const UserProvider  = (({children}: UserProviderProps)=>{
    const [userActive, setUserActive] = useState<UserType | null>(null)
    if(userActive == null) {
        //check if user is stored in localStorage
        if(localStorage.getItem('user')) {
            setUserActive(JSON.parse(localStorage.getItem('user')!))
        } 
    }
    return (
        <UserContext.Provider value={{ userActive, setUserActive }}>
            {children}
        </UserContext.Provider>
    )
}) 