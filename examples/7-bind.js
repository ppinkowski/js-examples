const person = {
  firstName: 'bob',
  lastName: 'bobson',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const person2 = {
  firstName: 'steve',
  lastName: 'steveson',
  fullName: person.fullName.bind(person)
};

const name = person2.fullName();

console.log(`person2 name: ${name}`);

const fullName = person2.fullName;

const name2 = fullName();

console.log(name2);
