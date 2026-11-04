import { useEffect, useState } from "react";

// Reusable data-fetching hook.
// - aborts the in-flight request when the url changes or the component unmounts
//   (prevents race conditions and state updates after unmount)
// - checks res.ok because fetch does not reject on 404 / 500
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Request failed with status " + res.status);
        setData(await res.json());
        setLoading(false);
      } catch (err) {
        // an abort is intentional, not an error
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
