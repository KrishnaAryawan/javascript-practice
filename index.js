var a = 5;
let b = 'kampus merdeka';
const nama = 'Budi';
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = 'indonesia';

  return console.log(
      "perkenalkan nama saya " + 
      nama + 
      " nomor urut " + 
      a + 
      " sekarang sedang mengikuti " + 
      b + 
      " berasal dari " 
      + asal
    );
}

terdaftar = true;
if (terdaftar === true) {
  console.log(nama + ' terdaftar sebagai kegiatan kampus merdeka');
}

a = b;
const budi = lengkap_arr.filter((budi2) => budi2 === 'budi');
console.log('array = ' + nama);
console.log('a adalah = ' + a);
console.log('b adalah = ' + b);
perkenalan();

// Jawaban no 2
// a. karena pada baris 21, 22, 23  terdaftar masih bernilai false, belum terdapat perubahan dalam code yang membuat nilai terdaftar  berubah menjadi true
// b. pada line 26 terdapat error dikarenakan nama merupakan nilai yang constant, jadi nilainya tetap, akan tetapi jika ingin membuat line 26 running kita harus mengubah tipe dari variable dari nama menjadi let atau var
// c. tidak, dikarenakan pada line 28 terdapat variable yang di assign pada function perkenalan, jadi variable tersebut hanya bisa digunakan disana, dan hal tersebut membuat code line no 29 menjadi tidak berjalan

// Jawaban no 3 
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;

console.log(a);
console.log(b);
console.log(c);

// Jawaban no 4
let bdays = [`10-17`, `05-19`, `20-19`];
let hasil = bdays.map((item) => item.replace(`-`, `/`));
console.log(hasil);

// Jawaban no 5
let value = [1, 2, 3, 4, 5, 6];
let hasil1 = value.map((item) => item * 2);
console.log(hasil1);

// Jawaban no 6
let arr = [1.5, 2.56, 5.1, 12.33];
let pembulatan = arr.map((angka) => Math.round(angka));
console.log(pembulatan);
