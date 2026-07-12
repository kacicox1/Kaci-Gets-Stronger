document.getElementById('greet').textContent=(new Date().getHours()<12?'Good Morning':'Good Afternoon')+', Kaci!';
let w=+(localStorage.w||0),p=+(localStorage.p||0),s=+(localStorage.s||0);
const W=wEl=document.getElementById('w'),P=pEl=document.getElementById('p'),S=sEl=document.getElementById('s');
function draw(){W.textContent=w;P.textContent=p;S.textContent=s+' days';localStorage.w=w;localStorage.p=p;localStorage.s=s;}
function adj(k,v){if(k=='w')w=Math.max(0,Math.min(8,w+v));else p=Math.max(0,Math.min(120,p+v));draw();}
document.querySelectorAll('.ex').forEach(c=>c.onchange=()=>{prog.value=[...document.querySelectorAll('.ex:checked')].length;});
function finishWorkout(){s++;draw();alert('Workout Complete! Great job!');}
draw();
