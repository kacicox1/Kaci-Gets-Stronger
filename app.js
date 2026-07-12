document.getElementById('greeting').textContent=
(new Date().getHours()<12)?'Good Morning, Kaci!':
(new Date().getHours()<18)?'Good Afternoon, Kaci!':'Good Evening, Kaci!';
