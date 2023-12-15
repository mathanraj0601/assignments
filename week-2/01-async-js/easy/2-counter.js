function counterTimeOut(time) {
  for (let i = 0; i < time; i++) {
    setTimeout(function () {
      console.log(i + 1);
    }, 2000);
  }
}

// counterTimeOut(3);

// let i = 0;
// while (i < 3) {
//   setTimeout(function () {
//     console.log(i + 1);
//   }, 1000);
//   i++;
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i + 1);
//   }, 2000);
// }
