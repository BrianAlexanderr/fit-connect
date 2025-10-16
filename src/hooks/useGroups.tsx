import { useEffect, useState } from "react";
import { getAllComunity } from "../api/communityAPI";

export const useDisplayCommunity = () => {
  const [community, setCommunity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const data = await getAllComunity();
        const upcoming = data
        .sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
        )

        setCommunity(upcoming);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunity();
  }, []);

  return { community, loading };
};