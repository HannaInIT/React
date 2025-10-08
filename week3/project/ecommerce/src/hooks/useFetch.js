import { useState, useEffect, useCallback } from "react";

export default function useFetch(initialUrl = null) {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(initialUrl));
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (u) => {
    if (!u) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(u);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (url) fetchData(url);
  }, [url, fetchData]);

  return { data, loading, error, setUrl, refetch: () => fetchData(url) };
}
