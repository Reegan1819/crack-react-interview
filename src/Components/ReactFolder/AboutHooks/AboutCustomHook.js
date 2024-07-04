import React from 'react'

const AboutCustomHook = () => {
  return (
    <div>
        <h1>Custom Hooks</h1>
        <p>
            Custom hooks are a powerful feature in React that allow you to reuse
            stateful logic across multiple components. They are a way to extract
            component logic into reusable functions.
        </p>
        <p>
            Custom hooks are functions that start with the word "use" and can call
            other hooks if needed. They can be used to share logic between
            components, and can help to keep your code clean and organized.
        </p>
        <p>
            Custom hooks can be used to encapsulate logic that is specific to your
            application, and can help to make your code more readable and maintainable.
        </p>
        <p>
            Here's an example of a custom hook that fetches data from an API:
        </p>
        <pre>
            {`
        import { useState, useEffect } from 'react';
    
        function useFetch(url) {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
    
            useEffect(() => {
            async function fetchData() {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
    
            fetchData();
            }, [url]);
    
            return { data, loading };
        }
        `}
        </pre>
        <p>
            In this example, the useFetch custom hook fetches data from an API and
            returns the data and a loading state. This custom hook can be used in
            multiple components to fetch data from different URLs.
        </p>
    </div>
  )
}

export default AboutCustomHook