const waitASecond = () =>
  new Promise(resolve => {
    setTimeout(() => resolve('Finished!'), 1000);
  });

const waitAnotherSecond = () =>
  new Promise(resolve => {
    setTimeout(() => resolve('Finished Again!'), 1000);
  });

waitASecond()
  .then(res => {
    console.log(res);
    return waitAnotherSecond();
  })
  .then(res => console.log(res));
