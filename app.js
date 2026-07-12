const h=new Date().getHours();
document.getElementById('greeting').textContent=h<12?'Good Morning, Kaci!':h<18?'Good Afternoon, Kaci!':'Good Evening, Kaci!';
const quotes=['One day at a time.','Consistency beats perfection.','Small steps create big changes.'];
document.getElementById('quote').textContent=quotes[new Date().getDate()%quotes.length];
['water','protein'].forEach(id=>{const el=document.getElementById(id),out=document.getElementById(id+'Value');const key='ks_'+id;el.value=localStorage.getItem(key)||0;out.textContent=el.value;el.oninput=()=>{out.textContent=el.value;localStorage.setItem(key,el.value);};});
