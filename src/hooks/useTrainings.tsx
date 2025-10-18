import { useEffect, useState } from "react";
import { getAllTrainings } from "../api/sessionAPI";

export const useTrainings = () => {
  const [trainings, setTrainings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const data = await getAllTrainings();
        const today = new Date();

        // Filter: upcoming AND slots > 0
        const availableUpcoming = data
          .filter(
            (training: { date: string; slots: number }) =>
              new Date(training.date) >= today && training.slots > 0
          )
          .sort(
            (a: { date: string }, b: { date: string }) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .slice(0, 2); // take only 2 nearest

        setTrainings(availableUpcoming);
      } catch (err) {
        console.error("Error fetching trainings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainings();
  }, []);

  return { trainings, loading };
};

export const useDisplayAllTrainings = () => {
  const [trainings, setTrainings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const data = await getAllTrainings();
        setTrainings(data);
      } catch (err) {
        console.error("Error fetching trainings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainings();
  }, []);

  return { trainings, loading };
};

