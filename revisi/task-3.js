let cekNilai = function (nilaiAwal, nilaiAkhir, dataArray) {
  if (dataArray.length < 5) {
    console.log('Jumlah angaka dalam data Array harus lebih dari 5');
  } else if (nilaiAwal > nilaiAkhir) {
    console.log('Nilai akhir harus lebih besar dari nilai awal');
  } else if (nilaiAwal < nilaiAkhir) {
    let result = dataArray.filter((n) => n > nilaiAwal && n < nilaiAkhir);
    let finalResult = result.sort();
    console.log(finalResult);
  }
};

cekNilai(5, 10, [, 8, 9, 2, 5, 7, 8]);
