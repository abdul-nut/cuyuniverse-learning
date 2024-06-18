let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
let lampu4 = document.getElementById("lampu4");
let lampu5 = document.getElementById("lampu5");
let lampu6 = document.getElementById("lampu6");
let lampu7 = document.getElementById("lampu7");
let lampu8 = document.getElementById("lampu8");
let lampu9 = document.getElementById("lampu9");
let lampu10 = document.getElementById("lampu10");

let toggle = document.getElementById("default-toggle");

let lampuMenyala = {
    lampu1: false,
    lampu2: false,
    lampu3: false
};

let ruangLampuMenyala = {
    ruang1: false,
    ruang2: false
}

function saklarRuang(ruangId) {
    let ruangMap = {
        1: { ruang: 1, ruangKey: "keluarga" },
        2: { ruang: 2, ruangKey: "ruangmakan" },
        3: { ruang: 3, ruangKey: "ruangtidur" }
    }

    let ruangData = ruangMap[ruangId]

    console.log(ruangData.ruang);

    if (ruangData.ruang == 1) {
        saklar(2)
        saklar(3)
        saklar(4)
    } else if (ruangData.ruang == 2) {
        saklar(5)
        saklar(6)
        saklar(7)
        saklar(8)
    }else if(ruangData.ruang == 3){
        saklar(9)
        saklar(10)
    }
}

function saklar(lampuId) {
    let lampuMap = {
        1: { lampu: lampu1, lampuKey: "lampu1" },
        2: { lampu: lampu2, lampuKey: "lampu2" },
        3: { lampu: lampu3, lampuKey: "lampu3" },
        4: { lampu: lampu4, lampuKey: "lampu4" },
        5: { lampu: lampu5, lampuKey: "lampu5" },
        6: { lampu: lampu6, lampuKey: "lampu6" },
        7: { lampu: lampu7, lampuKey: "lampu7" },
        8: { lampu: lampu8, lampuKey: "lampu8" },
        9: { lampu: lampu9, lampuKey: "lampu9" },
        10: { lampu: lampu10, lampuKey: "lampu10" }
    }

    let checked = toggle.checked
    let lampuData = lampuMap[lampuId]
    console.log(lampuData);

    if (lampuData) {
        saklarLogic(lampuData.lampu, lampuData.lampuKey, checked);
    }


}

function saklarLogic(lampu, lampuKey, checked) {
    checked = true
    if (lampu.src.includes("off.gif") && !lampuMenyala[lampuKey] && checked == true) {
        lampu.src = "assets/images/on.gif";
    } else {
        lampu.src = "assets/images/off.gif";
    }
    lampu.replaceWith(lampu);
}
