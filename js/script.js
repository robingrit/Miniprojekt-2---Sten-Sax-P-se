const Startbutton = document.querySelector("button");

const p = document.querySelector("p");
const h2 = document.querySelector("h2");


const bilddiv = document.querySelector(".bilder");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const mitten = document.querySelector(".mitten");
const h2mitt =mitten.querySelector("h2");
const mittin =mitten.querySelector("input");
const mittbtn =mitten.querySelectorAll("button");
let Player1poäng = 0;
let Player2poäng = 0;
let v = 0;

bilddiv.style.display = "none";
mittbtn[1].style.display = "none";
Startbutton.addEventListener("click", Starta);

bilddiv.addEventListener("click", Val);

mittbtn[1].addEventListener("click", reload);

function reload(){
  window.location='index.html';
}




let player2 = 0;

function Poäng() {
  const input = document.querySelector("input");
  const h2div1 =div1.querySelector("h2");
  const h2div2 =div2.querySelector("h2");
  h2div1.innerText =
    input.value +
    " Poäng: " +
    Player1poäng;

    h2div2.innerText =
    
    
    " Datorns Poäng: " +
    Player2poäng;
}
function Generate() {
  player2 = Math.floor(Math.random() * 3) + 1;
  console.log("player2 valde " + player2);
}

function Starta() {
  Poäng();
  Player1poäng =0;
  Player2poäng =0;
  
  
  
  
  
  bilddiv.style.display = "block";
  mittin.style.display = "none";
  mittbtn[1].style.display = "none"
  mittbtn[0].style.display = "none";
  
 
  mitten.querySelector("h2").innerText = "Spelet är nu igång  Välj ett allternativ";


}
function Val(e) {
  Generate();
  v = e.target.id;
  
  vinnare();
  Checkscore();  
}

function vinnare() {
  const p1img =div1.querySelector("img");
  const p2img =div2.querySelector("img");
    if (v == 1) {
     
      
      p1img.setAttribute('src', 'picture/sten.png');
      
      
      if (player2 == 1) {
        
        p2img.setAttribute('src', 'picture/sten.png');
        h2mitt.innerText = "Lika Båda valde sten Testa igen";
        mitten.querySelector("h2");
      } else if (player2 == 2) {
        
        p2img.setAttribute('src', 'picture/sax.png');
        h2mitt.innerText = "Grattis du van motståndaren valde sax";
        Player1poäng++;
        Poäng();

        
      } else {
        
        p2img.setAttribute('src', 'picture/paper.jpg');
        h2mitt.innerText = " du Förlora ";
        Player2poäng++;
        Poäng();
      }
    } else if (v == 2) {
      p1img.setAttribute('src', 'picture/sax.png');
      if (player2 == 1) {
        p2img.setAttribute('src', 'picture/sten.png');
        h2mitt.innerText = "Du förlora";
        Player2poäng++;
        Poäng();
      } else if (player2 == 2) {
        p2img.setAttribute('src', 'picture/sax.png');
        h2mitt.innerText = "Lika Båda valde sax Testa igen";
        Player1poäng++;
        Poäng();
      } else {
        p2img.setAttribute('src', 'picture/paper.jpg');
        h2mitt.innerText = "Lika Båda valde sax Testa igen";
      }
    } else if (v == 3) {
      p1img.setAttribute('src', 'picture/paper.jpg');
      if (player2 == 1) {
        p2img.setAttribute('src', 'picture/sten.png');
        h2mitt.innerText = "Grattis du van motståndaren valde sten";
        Player1poäng++;
        Poäng();
      } else if (player2 == 2) {
        p2img.setAttribute('src', 'picture/sax.png');
        h2mitt.innerText = "du Förlora";
        Player2poäng++;
        Poäng();
        
      } else {
        p2img.setAttribute('src', 'picture/paper.jpg');
        h2mitt.innerText = " Lika ";
      }
    }
  }
function Checkscore(){
  if (Player1poäng <= 3 || Player2poäng <= 3) {
    if (Player1poäng == 3) {
      alert("grattis du vann");
      
      
      restart();
      
    } else if(Player2poäng == 3) {
      
      
      alert("Tyvärr du förlora");
      
      
      restart();
    }
    else {
      console.log("nothing")
    }
  }
}

function restart(){
  
  Poäng();
  mitten.querySelector("h2").innerText = "Vill du fortsätta spela klicka start";
  mittbtn[1].style.display = "block";
  mittbtn[0].style.display = "block";
  bilddiv.style.display = "none";


}
