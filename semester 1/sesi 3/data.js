const nama = "gusanta";
let usia = 18
const biodataId = document.getElementById('biodata');
const biodataParagraft = document.createElement('p');

function generateBiodata() {
    let legalitas;
    if (usia <= 30 && usia >= 17) {
        legalitas = "sudah legal"
    } else if (usia >= 6 && usia <= 17) {
        legalitas = "belum legal"
    } else if (usia < 6) {
        legalitas = "dibawah 5 tahun"
    } else {
        legalitas = "sudah tua"
    }
    var p = `nama kamu adalah ${nama} dan saat ini usia kamu ${usia} tahun dan status legalitas kamu saat ini adalah ${legalitas}`;

    var pContent = biodataParagraft.innerHTML = p;

    biodataId.append(pContent)

    console.log(`nama kamu adalah ${nama} dan saat ini usia kamu ${usia} tahun dan status legalitas kamu saat ini adalah ${legalitas}`);
}

generateBiodata();