const divContent = document.querySelector(".show-json");
const div = document.createElement("div");

const rest =  JSON.parse(localStorage.restorationBD);
const store = JSON.parse(localStorage.storeBD);
const video = JSON.parse(localStorage.videoBD);

div.innerHTML = JSON.stringify([rest, store, video])
divContent.append(div)