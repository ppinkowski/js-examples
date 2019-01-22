const person = {
  firstName: 'bob',
  lastName: 'bobson',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const a = person.fullName();

console.log(`person fullName: ${a}`);

const person2 = {
  firstName: 'steve',
  lastName: 'steveson',
  fullName: person.fullName
};

const b = person2.fullName();

console.log(`person2 fullName: ${b}`);

const fullName = person.fullName;

const c = fullName();

console.log(`?: ${c}`);
