class hewan {
    nama
    jenis
    suara
    constructor(umur) {
        this.umur = umur
    }

    set setNamaHewan(nama) {
        this.nama = nama
    }

    set setJenisHewan(jenis) {
        this.jenis = jenis
    }

    set setSuaraHewan(suara) {
        this.suara = suara
    }

    get getDetailHewan() {
        return `nama hewan ${this.nama}, jenis hewan ${this.jenis} suara hewan ${this.suara}`
    }
}

const kambing = new hewan(34)

kambing.setNamaHewan = 'kambing'
kambing.setJenisHewan = 'ternak'
kambing.setSuaraHewan = 'mbek'

console.log(kambing.getDetailHewan);