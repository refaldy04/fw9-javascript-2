// 1
// JavaScript String - toLowerCase() Method

// Penjelasan
// method ini mengembalikan nilai string yang dipanggil menjadi huruf kecil semua

// Contoh
let str = 'APPLES ARE ROUND, AND APPLES ARE JUICY.';
let text = str.toLocaleLowerCase();
console.log(text);

// *************************************************************

// 2
// JavaScript String - toUpperCase() Method

//  Penjelasan
//  This method returns the calling string value converted to uppercase.
// method ini mengembalikan nilai string yang dipanggil menjadi huruf besar semua

// Contoh
var str1 = 'Apples are round, and Apples are Juicy.';
let text1 = str1.toUpperCase();
console.log(text1);

// *************************************************************

// 3
// Array.prototype.join()

// Penjalasan
// method join() membuat dan mengembalikan sebuah string baru dengan menggabungkan semua elemen di dalam array, akan dipisahkan dengan koma atau sebuah pemisah string yang telah ditentukan. Jika array hanya memiliki satu item, item tersebut akan dikembalikan tanpa pemisah

// Contoh
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// ****************************************************************

// 4
// Array.prototype.reverse()

// Penjelasan
// Method reverse() akan membalikan sebuah array. elemen pertama array menjadi elemen array terakhir, dan elemen terakhir menjadi elemen yang pertama.

// Contoh
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

// *****************************************************************

// 5
// Array.prototype.pop()

// Penjelasan
// Method pop() akan menghapus elemen terakhir dari sebuah array dan mengembalikan elemen tersebut. method ini mengubah panjang dari array

// Contoh
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

// *******************************************************************

// 6
// Math.floor()

// Penjelasan
// function Math.floor() digunakan membulatkan bilangan demsimal ke bawah. fungsi ini juga membutuhkan 1 argumen yaitu bilangan desimal yang dibulatkan ke-bawah.

// Contoh
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6

// *****************************************************************

// 7
// Math.random()

// Penjelasan
// Math.random () digunaka untuk mengembalikan angka acak antara 0 (inklusif), dan 1 (eksklusif). Math.random () selalu mengembalikan angka yang lebih rendah dari 1

// Contoh
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1

// *****************************************************************

// 8
// Math.round()

// Penjelasan
// Fungsi Math.round() digunakan untuk membulatkan bilangan desimal ke bilangan terdekat, fungsi tersebut membutuhkan 1 argumen yang ingin dibulatkan.

// Contoh
console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6

// *********************************************************************

// 9
// Array.prototype.forEach()

// Penjelasan
// Method forEach() mengeksekusi function yang ada sekali untuk setiap elemen array

// Contoh
const array2 = ['a', 'b', 'c'];

array2.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// ***********************************************************************

// 10
// Array.prototype.shift()

// Penjelasan
// Method shift() akan menghapus elemen pertama pada sebuah araay dan mengembalikan elemen yang dihapus tersebut. method ini mengubah panjang dari array

// Contoh
const array3 = [1, 2, 3];

const firstElement = array3.shift();

console.log(array3);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
