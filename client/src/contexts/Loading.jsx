import React, { useState, useContext, createContext } from 'react';

const LoadingContext = createContext({
    loading: true,
    updateLoading: function (boolean) {},
});

export const useLoading = () => useContext(LoadingContext);

function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(true);

    function updateLoading(boolean) {
        setLoading(boolean);
    }

    return (
        <LoadingContext.Provider value={{ loading, updateLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export default LoadingProvider;
