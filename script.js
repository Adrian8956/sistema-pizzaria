const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const item = [];

frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta";
    frm.inPizza.className = "exibe";
});

frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta";
    frm.inBebida.className = "exibe";
});

