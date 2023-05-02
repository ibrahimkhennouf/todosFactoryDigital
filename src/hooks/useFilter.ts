import { useState } from "react";

export default function useFilter() {
  const [filter, setFilter] = useState<string>("all");

  const setFilterAll = () => {
    setFilter("all");
  };

  const setFilterCompleted = () => {
    setFilter("completed");
  };

  const setFilterActive = () => {
    setFilter("active");
  };

  return { filter, setFilterAll, setFilterCompleted, setFilterActive };
}
