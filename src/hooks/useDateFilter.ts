import { useState, useMemo } from "react";
import moment from "moment";

export function useDateFilter(events: any[]) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const filteredByDate = useMemo(() => {
    if (!selectedDate) return events;
    return events.filter((event) =>
      moment(event.startDate).isSame(selectedDate, "day")
    );
  }, [selectedDate, events]);

  return { selectedDate, handleDateChange, filteredByDate };
}


