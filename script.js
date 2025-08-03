window.onload = () => {
	// Random case
	function randomCase(str) {
	  return [...str].map(c =>
		Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()
	  ).join('');
	}
	document.querySelectorAll('p, h1, h2, li').forEach(el => {
	  el.textContent = randomCase(el.textContent);
	});
  
	// Wobbly headings
	const wobble = (el) => {
	  let deg = 3;
	  let direction = 1;
	  setInterval(() => {
		deg += direction;
		if (deg > 5 || deg < -5) direction *= -1;
		el.style.transform = `rotate(${deg}deg) skew(-2deg, 1deg)`;
	  }, 100);
	};
	document.querySelectorAll('h1, h2').forEach(wobble);
  
	// Chaotic button flashing
	const button = document.querySelector('button');
	setInterval(() => {
	  button.style.background = Math.random() > 0.5 ? '#e3c657' : '#3a65d8';
	  button.style.color = button.style.background === '#e3c657' ? '#121214' : '#e3c657';
	}, 500);
  
	// Quote jitter
	const quotes = document.querySelectorAll('q');
	quotes.forEach(q => {
	  let pos = 0;
	  let dir = 1;
	  setInterval(() => {
		pos += dir;
		if (pos > 3 || pos < -3) dir *= -1;
		q.style.transform = `translateX(${pos}px) rotate(2deg)`;
	  }, 80);
	});
  };
  