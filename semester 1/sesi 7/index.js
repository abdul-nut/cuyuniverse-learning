const http = require('http');
const rupiah = require('rupiah-format')
const host = '127.0.0.1'
const port = 3001

const server = http.createServer(function (request, respone) {
    const nama = "abdul dudul"
    const uang = 500000
    const jajan = 50000
    const sisa = uang-jajan

    const uangRupiah = rupiah.convert(uang)
    const jajanRupiah = rupiah.convert(jajan)
    const sisaRupiah = rupiah.convert(sisa)
    const hasil = `halo nama saya ${nama}saya jajan sebanyak ${jajanRupiah}, uang saya yang tadinya ${uangRupiah} sekarang menjadi ${sisaRupiah}`
    respone.end(hasil);
})

server.listen(port, host, function () {
    console.log(`server menyala di port ${host}:${port}`);
})