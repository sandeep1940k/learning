import { useState } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  if (error) {
    return <h1>Something went wrong: {error.message}</h1>;
  }

  return children;
}

export default ErrorBoundary;