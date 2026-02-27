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

function formattedDateWithDay(date) {
  const d = new Date(date);

  const weekday = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
  }).format(d);

  const day = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
  }).format(d);

  const month = new Intl.DateTimeFormat("fa-IR", {
    month: "long",
  }).format(d);
  const year = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
  }).format(d);

  return `${weekday} ${day} ${month} ${year}`;
}

function getTourStatus(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now >= start && now <= end) {
    return "در حال برگزاری";
  }

  if (now > end) {
    return "به اتمام رسیده";
  }

  return "در انتظار برگزاری";
}

function formatPersianDateTime(dateString) {
  const date = new Date(dateString);

  const persianDate = date.toLocaleDateString("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const time = date.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${persianDate}-${time}`;
}

export {
  formattedDate,
  calculateDuration,
  formattedDateWithDay,
  getTourStatus,
  formatPersianDateTime
};
