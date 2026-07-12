const h=new Date().getHours();document.getElementById('greeting').textContent=h<12?'Good Morning, Kaci!':h<18?'Good Afternoon, Kaci!':'Good Evening, Kaci!';
const vals={water:[0,8],protein:[0,120],steps:[0,7000]};
for(const k in vals){window[k]=+localStorage[k]||0;document.getElementById(k).textContent=window[k]}
window.chg=(k,d)=>{window[k]=Math.max(0,Math.min(vals[k][1],window[k]+d));localStorage[k]=window[k];document.getElementById(k).textContent=window[k]}
const c=[...document.querySelectorAll('.ex')];c.forEach((x,i)=>{x.checked=localStorage['ex'+i]=='1';x.onchange=()=>{localStorage['ex'+i]=x.checked?'1':'0';document.getElementById('workProgress').value=c.filter(y=>y.checked).length}});document.getElementById('workProgress').value=c.filter(y=>y.checked).length;
const w=document.getElementById('weight');w.value=localStorage.weight||'';w.oninput=()=>localStorage.weight=w.value;