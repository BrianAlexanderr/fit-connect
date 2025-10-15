import { useEffect, useState } from "react";
import { getAllEvents } from "../api/eventAPI";

export const useUpcomingEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        const today = new Date();

        const upcoming = data
          .filter((event: { startDate: string }) => new Date(event.startDate) >= today)
          .sort(
            (a: { startDate: string }, b: { startDate: string }) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          )
          .slice(0, 2);

        setEvents(upcoming);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading };
};
