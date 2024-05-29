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

frm.inDetalhes.addEventListener("focus", () => {
   if(frm.rbPizza.checked){
    const pizza = frm.inPizza.value;

    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;

    frm.inDetalhes.placeholder = `Até ${num} sabores`
   }
});

frm.inDetalhes.addEventListener("blur", () =>{
    frm.inDetalhes.placeholder = ""
})