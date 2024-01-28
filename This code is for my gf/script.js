const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML ="Yeyhey I love you so much Princess Fhionna R. Gujelde";
    gif.src = 
    "https://media.tenor.com/Du-UN5d_AycAAAAi/love-couple.gif"
});

noBtn.addEventListener("mouseover", ()=>{
    question.innerHTML = "Choose wisely"
    gif.src= "https://media.tenor.com/GWffyFoiOo0AAAAi/tkthao219-peach.gif"

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});