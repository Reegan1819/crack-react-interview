import React, { useState, useEffect, useDebugValue } from 'react';
const useCustomHook = () => {
    // Some custom logic here
    const [value, setValue] = useState('');

    useEffect(() => {
        // Some logic that updates the value
        setValue('Hello World');
    }, []);

    useDebugValue(value, (value) => `Custom Value: ${value}`);

    return value;
};

const UseDebugValueExample = () => {
    const count = useCustomHook();

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
};

export default UseDebugValueExample;