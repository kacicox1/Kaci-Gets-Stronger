const h=new Date().getHours();
greeting.textContent=h<12?'Good Morning, Kaci!':h<18?'Good Afternoon, Kaci!':'Good Evening, Kaci!';
let water=+(localStorage.water||0),protein=+(localStorage.protein||0);
function draw(){waterEl.textContent=water;proteinEl.textContent=protein;}
const waterEl=document.getElementById('water'),proteinEl=document.getElementById('protein');
window.changeWater=n=>{water=Math.max(0,Math.min(8,water+n));localStorage.water=water;draw();}
window.changeProtein=n=>{protein=Math.max(0,Math.min(120,protein+n));localStorage.protein=protein;draw();}
draw();