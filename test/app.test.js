const tambah = require('../app');

if (tambah(2, 3) === 5) {
    console.log("TEST BERHASIL");
} else {
    console.log("TEST GAGAL");
    process.exit(1);
}
