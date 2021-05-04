export const getTimeSince = (date) => {
  let msInSecond = 1000;
  let msInMinute = 1000 * 60;
  let msInHour = 1000 * 3600;
  let msInDay = msInHour * 24;
  let msInMonth = msInDay * 30.41;
  let msInYear = msInMonth * 12;
  let timeDiff = Date.now() - date;

  if (timeDiff >= msInYear) {
    return `${Math.floor(timeDiff / msInYear)} year(s) ago`;
  } else if (timeDiff >= msInMonth) {
    return `${Math.floor(timeDiff / msInMonth)} month(s) ago`;
  } else if (timeDiff >= msInDay) {
    return `${Math.floor(timeDiff / msInDay)} day(s) ago`;
  } else if (timeDiff >= msInHour) {
    return `${Math.floor(timeDiff / msInHour)} hour(s) ago`;
  } else if (timeDiff >= msInMinute) {
    return `${Math.floor(timeDiff / msInMinute)} minute(s) ago`;
  }
  return `${Math.floor(timeDiff / msInSecond)} second(s) ago`;
};
