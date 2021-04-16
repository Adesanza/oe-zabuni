export const getTimeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} year(s) ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} month(s) ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} day(s) ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1 && interval < 60) {
      return `${interval} minute(s) ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hour(s) ago`;
    }
    return `${Math.floor(seconds)} second(s) ago`;
  }
