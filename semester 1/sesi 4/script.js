let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
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
        1: { ruang: 1, ruangKey: "keluarga" }
    }

    let ruangData = ruangMap[ruangId]

    if (ruangData) {
        saklar(1)
        saklar(2)
        saklar(3)
    }
}

function saklar(lampuId) {
    let lampuMap = {
        1: { lampu: lampu1, lampuKey: "lampu1" },
        2: { lampu: lampu2, lampuKey: "lampu2" },
        3: { lampu: lampu3, lampuKey: "lampu3" }
    }

    let checked = toggle.checked
    let lampuData = lampuMap[lampuId]

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
