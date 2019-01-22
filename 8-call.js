const person = {
  firstName: 'bob',
  lastName: 'bobson',
  fullName: function(title) {
    return title + ' ' + this.firstName + ' ' + this.lastName;
  }
};

const person2 = {
  firstName: 'steve',
  lastName: 'steveson'
};

const name = person.fullName.call(person2, 'Mr');

console.log(`name: ${name}`);
