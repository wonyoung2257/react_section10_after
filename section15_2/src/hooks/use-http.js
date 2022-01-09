import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requsetConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requsetConfig.url, {
        method: requsetConfig.method ? requsetConfig.method : "GET",
        headers: requsetConfig.headers ? requsetConfig.headers : {},
        body: requsetConfig.body ? JSON.stringify(requsetConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
