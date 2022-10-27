const github = document.querySelector("#url");
const btn = document.querySelector("#btnTop");

btn.addEventListener("click", function () {
    window.scrollTo(0,0);
});

document.addEventListener('scroll', ()=> ocultar())


function ocultar(){
    if(window.scrollY > 300){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

github.addEventListener("click", function () {
    location.href = "https://github.com/MateusNeres26/buger-eats-cypress-discovery", target="_blank";
});
