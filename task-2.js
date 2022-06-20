const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
let vasel = [];

function searchName(initial, limit, callback) {
  let smallInitial = initial.toLowerCase();
  let smallElement = names.map((e) => e.toLowerCase());

  console.log(smallElement);
  let result = smallElement.filter((element) => element.match(smallInitial));
  hasil = result;
  callback(limit);
}

function line(e) {
  let finalResult = vasel.map((el) => el[0].toUpperCase() + el.slice(1));
  console.log(finalResult.slice(0, e));
}

searchName('AN', 3, line);
