const d=new Date();document.getElementById('greeting').textContent=(d.getHours()<12?'Good Morning':'Good Afternoon')+', Kaci!';
document.getElementById('status').textContent='🟢 OFF DAY';
let water=+(localStorage.water||0),protein=+(localStorage.protein||0),streak=+(localStorage.streak||0);
function draw(){water=Math.max(0,Math.min(8,water));protein=Math.max(0,Math.min(120,protein));
waterEl.textContent=water;proteinEl.textContent=protein;streakEl.textContent=streak+' days';
localStorage.water=water;localStorage.protein=protein;localStorage.streak=streak;}
const waterEl=document.getElementById('water'),proteinEl=document.getElementById('protein'),streakEl=document.getElementById('streak');
function adj(k,v){if(k==='water')water+=v;else protein+=v;draw();}
const boxes=[...document.querySelectorAll('.ex')];
boxes.forEach(b=>b.onchange=()=>{document.getElementById('prog').value=boxes.filter(x=>x.checked).length;
if(boxes.every(x=>x.checked)){streak++;draw();}});
function resetWorkout(){boxes.forEach(b=>b.checked=false);document.getElementById('prog').value=0;}
draw();