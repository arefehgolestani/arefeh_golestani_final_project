"use client";

import { useState, useCallback } from "react";
import Search from "@/modules/Search";
import Tours from "@/modules/Tours";

export default function HomeClient({ initialTours }) {
  const [tours, setTours] = useState(initialTours);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((filters) => {
    setLoading(true);

    const run = async () => {
      try {
        const params = new URLSearchParams();

        if (filters.originId)
          params.append("originId", String(filters.originId));
        if (filters.destinationId)
          params.append("destinationId", String(filters.destinationId));
        if (filters.startDate)
          params.append("startDate", String(filters.startDate));
        if (filters.endDate) params.append("endDate", String(filters.endDate));

        const res = await fetch(
          `http://localhost:6500/tour?${params.toString()}`,
          { cache: "no-store" },
        );

        const data = await res.json();
        setTours(data);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return (
    <>
      <Search tours={tours} onSearch={handleSearch} loading={loading} />
      <Tours tours={tours} />
    </>
  );
}
