// window.addEventListener("scroll",() =>{
//     var nav=document.querySelector("nav")
//     if(window.scrollY>100){
//         nav.style.backgroundColor="red";
//     }else{
//         nav.style.backgroundColor="black";
//     }
// })

window.addEventListener("scroll",() =>{
    var btn=document.querySelector(".btt")
    if(window.scrollY>100){
        btn.style.display="flex";
    }else{
        btn.style.display="none";
    }
})

var btnOne = document.querySelector(".btn-1");
var btnTwo = document.querySelector(".btn-2");
var btnThree = document.querySelector(".btn-3");
var wcOne = document.querySelector(".wc-1");
var wcTwo = document.querySelector(".wc-2");
var wcThree = document.querySelector(".wc-3");
var btnFour = document.querySelector(".btn-4");
var btnFive = document.querySelector(".btn-5");
var btnThree = document.querySelector(".btn-3");
var wcFour = document.querySelector(".wc-4");
var wcFive = document.querySelector(".wc-5");


btnOne.addEventListener("click", () => {
    wcOne.classList.toggle("active");
    btnOne.innerHTML = "&#x2715;";
    if(wcOne.classList.contains("active")){
        btnOne.innerHTML = "&#x2715;";
    }
    else {
        btnOne.innerHTML = "&plus;";
    }
    btnTwo.innerHTML = "&plus;";
    btnThree.innerHTML = "&plus;";
    wcTwo.classList.remove("active")
    wcThree.classList.remove("active")
});
btnTwo.addEventListener("click", () => {
    wcTwo.classList.toggle("active");
    btnTwo.innerHTML = "&#x2715;";
    if(wcTwo.classList.contains("active")){
        btnTwo.innerHTML = "&#x2715;";
    }
    else {
        btnTwo.innerHTML = "&plus;";
    }
    btnOne.innerHTML = "&plus;";
    btnThree.innerHTML = "&plus;";
    wcOne.classList.remove("active")
    wcThree.classList.remove("active")
});
btnThree.addEventListener("click", () => {
    wcThree.classList.toggle("active");
    btnThree.innerHTML = "&#x2715;";
    if(wcThree.classList.contains("active")){
        btnThree.innerHTML = "&#x2715;";
    }
    else {
        btnThree.innerHTML = "&plus;";
    }
    wcTwo.classList.remove("active")
    wcOne.classList.remove("active")
    btnTwo.innerHTML = "&plus;";
    btnOne.innerHTML = "&plus;";
});
btnFour.addEventListener("click", () => {
    wcFour.classList.toggle("active");
    btnFour.innerHTML = "&#x2715;";
    if(wcFour.classList.contains("active")){
        btnFour.innerHTML = "&#x2715;";
    }
    else {
        btnFour.innerHTML = "&plus;";
    }
    wcThree.classList.remove("active")
    wcTwo.classList.remove("active")
    wcOne.classList.remove("active")
    btnThree.innerHTML = "&plus;";
    btnTwo.innerHTML = "&plus;";
    btnOne.innerHTML = "&plus;";
});
btnFive.addEventListener("click", () => {
    wcFive.classList.toggle("active");
    btnFive.innerHTML = "&#x2715;";
    if(wcFive.classList.contains("active")){
        btnFive.innerHTML = "&#x2715;";
    }
    else {
        btnFive.innerHTML = "&plus;";
    }
    wcFour.classList.remove("active")
    wcThree.classList.remove("active")
    wcTwo.classList.remove("active")
    wcOne.classList.remove("active")
    btnFour.innerHTML = "&plus;";
    btnThree.innerHTML = "&plus;";
    btnTwo.innerHTML = "&plus;";
    btnOne.innerHTML = "&plus;";
});