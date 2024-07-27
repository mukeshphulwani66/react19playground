'use client';

import React, { useState, useEffect, use } from 'react'

function UseHookExample2() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setUserData(result[0]);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Name - {userData.name}</h1>
            <h2>Email - {userData.email}</h2>
            <h2>City - {userData.address.city}</h2>

        </div>
    )
}




export default UseHookExample2