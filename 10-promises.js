const waitASecond = new Promise(resolve => {
  setTimeout(() => resolve('Finished!'), 1000);
});

waitASecond.then(res => console.log(res));
