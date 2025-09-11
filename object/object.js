let student = {
  nama: "Yayan",
  umur: 17,
  hobby: "mancing",
  sayHello: function () {
    return "Halo, nama saya " + this.nama;
  },
};

console.log(student.sayHello()); // Halo, nama saya Yayan
console.log("Umur saya adalah " + student.umur + " tahun."); // Umur saya adalah 17 tahun.
console.log("Hobby saya adalah " + student.hobby + "."); // Hobby saya adalah mancing.
