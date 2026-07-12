const hr=new Date().getHours();greeting.textContent=(hr<12?'Good Morning':'Good Afternoon')+', Kaci!';
let data=JSON.parse(localStorage.getItem('kaci40')||'{"water":0,"protein":0,"streak":0}');
function render(){water.textContent=data.water;protein.textContent=data.protein;streak.textContent=data.streak+' days';localStorage.setItem('kaci40',JSON.stringify(data));}
function adjust(k,v){if(k==='water')data.water=Math.max(0,Math.min(8,data.water+v));else data.protein=Math.max(0,Math.min(120,data.protein+v));render();}
const boxes=[...document.querySelectorAll('.ex')];
boxes.forEach(b=>b.onchange=()=>progress.value=boxes.filter(x=>x.checked).length);
finish.onclick=()=>{if(boxes.every(x=>x.checked)){data.streak++;alert('Workout Complete!');}else{alert('Finish all exercises first!');}render();};
render();