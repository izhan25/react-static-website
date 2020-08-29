import { useState, useEffect } from "react";

function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading;
}

export default useLoading;
