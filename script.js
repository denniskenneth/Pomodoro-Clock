// SELECTION OF ELEMENTS

// BTNS
let breakPlusBtn = document.querySelector(".breakPlusBtn");
let workPlusBtn = document.querySelector(".workPlusBtn");
let breakMinusBtn = document.querySelector(".breakMinusBtn");
let workMinusBtn = document.querySelector(".workMinusBtn");
let playBtn = document.querySelector(".fa-play-circle");
let stopBtn = document.querySelector(".fa-stop-circle");

//INPUT
let breakTime = document.querySelector("#break-time");
let workTime = document.querySelector("#work-time");

// PLUS BTNS
breakPlusBtn.addEventListener("click", () => breakTime.value++);
workPlusBtn.addEventListener("click", () => workTime.value++);

// MINUS BTNS
breakMinusBtn.addEventListener("click", () => breakTime.value--);
workMinusBtn.addEventListener("click", () => workTime.value--);

// PLAY BTN
playBtn.addEventListener("click", () => console.log("plays"));

// STOP BTN
stopBtn.addEventListener("click", () => console.log("stops"));
