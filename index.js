setInterval(() => { const time = new Date().toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
});


const h1 = document.getElementById('time');
h1.innerText = time;},1000);
