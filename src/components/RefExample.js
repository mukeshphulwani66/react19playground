'use client'
import React, { forwardRef, useRef } from 'react';

const Input = forwardRef((props, ref) => {
    return <input
        ref={ref}
        {...props}
        className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />;
});



function RefExample() {
    const inputRef = useRef(null);

    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <Input ref={inputRef} placeholder="Type here..." />
            <button
                className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={clearInput}
            >
                Clear Input
            </button>
        </div>
    );
}

export default RefExample;