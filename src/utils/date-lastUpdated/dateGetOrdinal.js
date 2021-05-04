const getOrdinal = (date) => {
  let suffix = ['th', 'st', 'nd', 'rd'];
  let v = date % 100;
  return date + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};

export default getOrdinal;
