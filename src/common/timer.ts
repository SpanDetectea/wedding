export const timer = () => {
    let time = {
        days:0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    const date = new Date(2024, 5, 22, 16).getTime();
  const dateNow = new Date().getTime();
  let i = date - dateNow;
  time.days = Math.floor(i / (1000 * 60 * 60 * 24));
  time.hours = Math.floor((i - 1000 * 60 * 60 * 24 * time.days) / (1000 * 60 * 60));
  time.minutes = Math.floor(
    (i - 1000 * 60 * 60 * 24 * time.days - 1000 * 60 * 60 * time.hours) / (1000 * 60)
  );
  time.seconds = Math.floor(
    (i -
      1000 * 60 * 60 * 24 * time.days -
      1000 * 60 * 60 * time.hours -
      1000 * 60 * time.minutes) /
      1000
  );

  return time;
};
