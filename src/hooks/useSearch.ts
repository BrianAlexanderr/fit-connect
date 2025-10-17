import { useState, useMemo } from "react";

export const useCommunitySearch = (data: any[]) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return { query, setQuery, filtered };
};

export const useEventSearch = (data: any[]) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return { query, setQuery, filtered };
};

