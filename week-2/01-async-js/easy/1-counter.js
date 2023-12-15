function counter(time) {
  let i = 0;
  const interval = setInterval(function () {
    console.log(++i);
    if (i === time) {
      clearInterval(interval);
    }
  }, 1000);
}

counter(4);
