const activesearch = document.querySelector(".activesearch");
const hiddensearch = document.querySelector(".hiddensearch");
const input = document.querySelector(".input");
const addTo = document.querySelector(".addTo");
const add = document.querySelector(".add");
const ucs = document.querySelector(".ucs");
const ucnokta = document.querySelector(".ucnokta");
const searchnext = document.querySelector(".searchnext");
const x = document.querySelector(".x");
const isearch = document.querySelector("#isearch");
const atac = document.querySelector(".atac");
const ADD = document.querySelector(".ADD");

atac.addEventListener("click", () =>{
    ADD.classList.toggle("pocus");
});

isearch.addEventListener("click", devam,true);
function devam(e){
    e.preventDefault();
    searchnext.style.display = "block";
    x.addEventListener("click", () =>{
        searchnext.style.display = "none";
    });
}

input.addEventListener("click", () => {
   activesearch.classList.toggle("ac"); 
   hiddensearch.classList.toggle("kapat");
   
});

add.addEventListener("click", () =>{
    if(addTo.style.display =="none"){
        addTo.style.display = "block";
    }
    else{
            addTo.style.display = "none";

    }
});

ucs.addEventListener("click", () =>{
    if(ucnokta.style.display =="none"){
        ucnokta.style.display = "block";
    }
    else{
        ucnokta.style.display ="none";
    }
});
