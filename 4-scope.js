const foo = 'Hello, ';

const doAThing = bar => {
  const baz = '!';
  const doAnotherThing = () => {
    console.log(foo + bar + baz);
  };
  doAnotherThing();
};

doAThing('World');
