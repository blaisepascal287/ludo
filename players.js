let redPlayer1 = {
    player: `<div class="coin redcoin" id="redc1"</div>`,
    path: [19,20,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,25,26,27,28,29,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#red",

    controller: "#redc1"
}
let redPlayer2 = {
    player: `<div class="coin redcoin" id="redc2"</div>`,
    path: [19,20,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,25,26,27,28,29,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#red",

    controller: "#redc2"
}
let redPlayer3 = {
    player: `<div class="coin redcoin" id="redc1"</div>`,
    path: [19,20,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,25,26,27,28,29,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#red",

    controller: "#redc3"
}
let redPlayer4 = {
    player: `<div class="coin redcoin" id="redc4"</div>`,
    path: [19,20,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,25,26,27,28,29,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#red",

    controller: "#redc4"
}
let bluePlayer1 = {
    player: `<div class="coin bluecoin" id="bluec1"</div>`,
    path: [69,66,63,60,57,54,35,34,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,67,64,61,58,55,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#blue",

    controller: "#bluec1"
}
let bluePlayer2 = {
    player: `<div class="coin bluecoin" id="bluec2"</div>`,
    path: [69,66,63,60,57,54,35,34,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,67,64,61,58,55,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#blue",

    controller: "#bluec2"
}
let bluePlayer3 = {
    player: `<div class="coin bluecoin" id="bluec3"</div>`,
    path: [69,66,63,60,57,54,35,34,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,67,64,61,58,55,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#blue",

    controller: "#bluec3"
}
let bluePlayer4 = {
    player: `<div class="coin bluecoin" id="bluec4"</div>`,
    path: [69,66,63,60,57,54,35,34,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,67,64,61,58,55,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#blue",

    controller: "#bluec4"
}
let yellowPlayer1 = {
    player: `<div class="coin yellowcoin" id="yellowc1"</div>`,
    path: [52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,46,45,44,43,42],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#yellow",

    controller: "#yellowc1"
}
let yellowPlayer2 = {
    player: `<div class="coin yellowcoin" id="yellowc2"</div>`,
    path: [52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,46,45,44,43,42],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#yellow",

    controller: "#yellowc2"
}
let yellowPlayer3 = {
    player: `<div class="coin yellowcoin" id="yellowc3"</div>`,
    path: [52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,46,45,44,43,42],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#yellow",

    controller: "#yellowc3"
}
let yellowPlayer4 = {
    player: `<div class="coin yellowcoin" id="yellowc4"</div>`,
    path: [52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,2,5,8,11,14,17,36,37,38,39,40,41,47,46,45,44,43,42],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#yellow",

    controller: "#yellowc4"
}
let greenPlayer1 = {
    player: `<div class="coin greencoin" id="greenc1"</div>`,
    path: [5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,4,7,10,13,16,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#green",

    controller: "#greenc1"
}
let greenPlayer2 = {
    player: `<div class="coin greencoin" id="greenc2"</div>`,
    path: [5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,4,7,10,13,16,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#green",

    controller: "#greenc2"
}
let greenPlayer3 = {
    player: `<div class="coin greencoin" id="greenc3"</div>`,
    path: [5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,4,7,10,13,16,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#green",

    controller: "#greenc3"
}
let greenPlayer4 = {
    player: `<div class="coin greencoin" id="greenc4"</div>`,
    path: [5,8,11,14,17,36,37,38,39,40,41,47,53,52,51,50,49,48,56,59,62,65,68,71,70,69,66,63,60,57,54,35,34,33,32,31,30,24,18,19,20,21,22,23,15,12,9,6,3,0,1,4,7,10,13,16,'win'],
    currentPosition: 0,
    status: "home",
    currentStep: null,
    resetPlayer: function (){
        this.currentPosition = 0;
        this.status = "home";
        this.previousStep = null;
    },
    previousStep: null,
    home: "#green",

    controller: "#greenc4"
}

let playerList = {
    "redc1": redPlayer1,
    "redc2": redPlayer2,
    "redc3": redPlayer3,
    "redc4": redPlayer4,
    "bluec1": bluePlayer1,
    "bluec2": bluePlayer2,
    "bluec3": bluePlayer3,
    "bluec4": bluePlayer4,
    "yellowc1": yellowPlayer1,
    "yellowc2": yellowPlayer2,
    "yellowc3": yellowPlayer3,
    "yellowc4": yellowPlayer4,
    "greenc1": greenPlayer1,
    "greenc2": greenPlayer2,
    "greenc3": greenPlayer3,
    "greenc4": greenPlayer4,
}