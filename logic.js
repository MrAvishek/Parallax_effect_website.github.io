let man=document.getElementById("man");
let backGround=document.getElementById("background");
let tp=document.getElementById("tp");
let star1=document.getElementById("star1");
let star2=document.getElementById("star2");
let star3=document.getElementById("star3");

window.addEventListener('scroll', ()=>{
    let value= window.scrollY;
    backGround.style.top=value*.2+"px";
    backGround.style.left= -value*.5+"px";
    man.style.left=-value*.3+"px";
    
    tp.style.top= -value*.4+"px";
    star1.style.left= value*1+"px";
    star1.style.top= value*.2+"px";
    star2.style.left= value*1.2+"px";
    star2.style.top= value*1+"px";
    star3.style.left= value*1.2+"px";
    star3.style.top= value*2+"px";
    
    

});

const textElement = document.getElementById("Htext");
    const words = ["Welcome", "to The", "Space"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 100);
      }
    }

    type();