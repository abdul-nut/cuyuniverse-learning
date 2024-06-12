var lampu1 = document.getElementById("lampu1");
var lampu2 = document.getElementById("lampu2");
var lampu3 = document.getElementById("lampu3");

var lampuMenyala = {
    lampu1: false,
    lampu2: false,
    lampu3: false
};

function saklar(lampuId) {
    var lampuMap = {
        1: { lampu: lampu1, lampuKey: "lampu1" },
        2: { lampu: lampu2, lampuKey: "lampu2" },
        3: { lampu: lampu3, lampuKey: "lampu3" }
    }

    var lampuData = lampuMap[lampuId]

    if (lampuData) {
        saklarLogic(lampuData.lampu, lampuData.lampuKey);
    }


}

function saklarLogic(lampu, lampuKey) {
    if (lampu.src.includes("off.gif") && !lampuMenyala[lampuKey]) {
        lampuMenyala[lampuKey] = true;
        lampu.src = "assets/images/on.gif";
    } else if (lampuMenyala[lampuKey] === true) {
        lampuMenyala[lampuKey] = false;
        lampu.src = "assets/images/off.gif";
    }
    lampu.replaceWith(lampu);
}
