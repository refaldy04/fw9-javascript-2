const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
let hasil = [];

function searchName(initial, batas, callback) {
  let result = nama.filter((element) => element.match(initial));
  hasil = result;
  callback(batas);
}

function line(e) {
  console.log(hasil.slice(0, e));
}

searchName('a', 3, line);
