function invite(greeting1, greeting2) {
  console.log(greeting1 + this.firstName + this.lastName + '!' + greeting2)
}

var person = { firstName: 'Grace ', lastName: 'Han' }

const greeting1 = 'Hi, ';
const greeting2 = ' Good evening!';

invite.call(person, greeting1, greeting2)
invite.apply(person, [greeting1, greeting2])

const bindedInvite = invite.bind(person)
bindedInvite(greeting1, greeting2)