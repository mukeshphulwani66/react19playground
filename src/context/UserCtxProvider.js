"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';


export const UserContext = createContext(null);

const UserData = {
    name:"Ramesh Verma",
    age:20,
    status:"Single"
}

// Provider component
export function UserCtxProvider({ children }) {  
    return (
        <UserContext.Provider value={UserData}>
            {children}
        </UserContext.Provider>
    );
}
