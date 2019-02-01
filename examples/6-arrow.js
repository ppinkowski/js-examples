function Person() {
  this.firstName = 'steve';
  this.lastName = 'steveson';
  this.fullName = () => {
    return this.firstName + ' ' + this.lastName;
  };
}

const person = new Person();

const person2 = {
  firstName: 'bob',
  lastName: 'bobson',
  fullName: person.fullName
};

const name = person2.fullName();

console.log(`person2 name: ${name}`);

const fullName = person.fullName;

const who = fullName();

console.log(`who: ${who}`);
