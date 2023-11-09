// Header Toggle 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('#change',{
    strings :['Frontend Developer','Web Designer','Programmer'],
    typeSpeed : 80,
    backSpeed : 80,
    loop : true,
    loopCount : Infinity,
    showCursor : false


})
















const canvas=document.querySelector("#canvas");
const ctx=canvas.getContext("2d");
//console.log(ctx);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.addEventListener("resize",(e)=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
})

function rnd(min, max) {
  return Math.floor(Math.random() * max) + min;
}

class Element{
  constructor (){
    this.x=rnd(10,canvas.width);
    this.y=rnd(10,canvas.height);
    this.size=1;
    this.opacity=1;
    this.colorH=rnd(1,360);
    this.color="hsl("+this.colorH+",100%,50%,"+ this.opacity +")";
    this.speedx=Math.random() * 5 - 2.5;
    this.speedy=Math.random() * 5 - 2.5;
    this.exit=false;
  }
  update(){
    //this.x+=this.speedx;
    //this.y+=this.speedy;
    this.opacity-=0.015;
    this.color="hsl("+this.colorH+",100%,50%,"+ this.opacity +")";
    this.size+=.5;
    if(this.opacity < 0){
      this.exit=true;
    }
  }
  drow(){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.strokeStyle=this.color;
    ctx.lineWidth = 2;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    //ctx.fill();
    ctx.stroke();
  }
}

const elements=[];
let fream=0;

//elm.drow();
//console.log(elm);
function handleCircle(){
  for(let i=0; i < elements.length; i++){
    elements[i].update();
    elements[i].drow();
  }
  for(let i=0; i < elements.length; i++){
   if(elements[i].exit){
      elements.splice(i,1);
      continue;
    }
  }
  if(fream %2 ==0){
    elements.push(new Element());
  }
 // console.log(elm);
}
function animation(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fream ++;
  handleCircle();
  window.requestAnimationFrame(animation);
}
animation();
    



/* About Us  */

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}