let water=0,protein=0;
function change(k,d){if(k==='water'){water=Math.max(0,Math.min(8,water+d));waterEl.textContent=water;}
else{protein=Math.max(0,Math.min(120,protein+d));proteinEl.textContent=protein;}
localStorage.setItem('water',water);localStorage.setItem('protein',protein);}
const waterEl=document.getElementById('water');const proteinEl=document.getElementById('protein');
water=+localStorage.getItem('water')||0;protein=+localStorage.getItem('protein')||0;
waterEl.textContent=water;proteinEl.textContent=protein;
function startWorkout(){alert('Workout mode coming in Version 3.3!');}