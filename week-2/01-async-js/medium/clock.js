function railwayTime() {
  let start = 90000;
  setInterval(() => {
    start++;
    console.log(
      `${Math.floor(start / (60 * 60)) % 24}:${Math.floor(start / 60) % 60}:${
        start % 60
      }`
    );
  }, 1000);
}

railwayTime();

function normalTime() {
  let start = 90000;
  setInterval(() => {
    start++;
    console.log(
      `${Math.floor(start / (60 * 60)) % 12}:${Math.floor(start / 60) % 60}:${
        start % 60
      } ${Math.floor(start / (60 * 60)) % 24 < 12 ? "AM" : "PM"}`
    );
  }, 1000);
}

normalTime();
