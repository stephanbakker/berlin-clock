export class BerlinClockService {
  tick(date) {
    var time = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };

    return {
        hours1: Math.floor(time.hours/5),
        hours2: time.hours % 5,
        minutes1: Math.floor(time.minutes/5),
        minutes2: time.minutes % 5,
        seconds: time.seconds % 2
    };
  }
}
