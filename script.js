const container = document.querySelector(".container");
const question = document.querySelector(".question");
const yesbtn = document.querySelector(".yesbtn");
const nobtn = document.querySelector(".nobtn");
const icon = document.querySelector(".fa-solid");
const btn = document.querySelector(".btns");

const containerReact =container.getBoundingClientRect();
const nobtnReact = nobtn.getBoundingClientRect();



yesbtn.addEventListener('click', () =>{
    question.innerHTML = "I love You Too :-)";
    icon.classList.remove("fa-circle-question");
    icon.classList.add("fa-heart");
    btn.style.opacity = "0";
    setTimeout(()=>{
        container.style.background = "url(11.jpg)" ;
        container.style.backgroundSize = "cover" ;
        container.style.backgroundPosition = "center" ;
        icon.style.opacity = "0";
        question.style.cssText = "color:red;";
    },4000);
    setTimeout(() => {
        container.style.height ="100vh";
        container.style.width = "100vw";
        container.style.maxHeight ="700px";
        container.style.maxWidth = "900px";
        question.innerHTML = "&#x1F60D"
        question.style.cssText = "font-size:9rem;margin-top:250px;color:red;"
    }, 6000);
    setTimeout(() => {
        question.style.cssText = "font-size:1000rem;"
        container.style.overflow = "hidden"
    }, 9000);
    setTimeout(()=>{
        location.reload()
    },10000)
} );

nobtn.addEventListener('mouseover', ()=>{
    const i = Math.floor(Math.random() * (containerReact.width - nobtnReact.width)) + 1;
    const j = Math.floor(Math.random() * (containerReact.height - nobtnReact.height)) + 1;

    nobtn.style.left = i + "px";
    nobtn.style.top = j + "px";
    
})
nobtn.addEventListener('click',()=>{
    const i = Math.floor(Math.random() * (containerReact.width - nobtnReact.width)) + 1;
    const j = Math.floor(Math.random() * (containerReact.height - nobtnReact.height)) + 1;

    nobtn.style.left = i + "px";
    nobtn.style.top = j + "px";
    
})

nobtn.addEventListener("click", function() {
  let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
  clickCount++;
  localStorage.setItem("clickCount", clickCount);

  if (clickCount > 3) {
    nobtn.style.display = "none";
    yesbtn.style.cssText = "margin:10px 0 0 0;width:200px"
  }
});
