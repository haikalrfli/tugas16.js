function minAndMax() {
  var angka = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10];
  return 'Nilai Minimal : ' + Math.min(...angka) + '\nNilai Maksimal :' + Math.max(...angka);
}
console.log(minAndMax());
