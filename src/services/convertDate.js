const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};



const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const diffTime = endDate - startDate;
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    days,
    nights: days - 1,
  };
};

export { formattedDate, calculateDuration };
