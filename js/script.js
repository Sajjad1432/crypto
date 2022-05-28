const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click',function(){
	this.classList.toggle('pe-7s-moon');
	if(this.classList.toggle('pe-7s-sun'))
	{
		this.classList.toggle('pe-7s-moon');
		body.classList.toggle('crypt-light');

	}
	else 
	{
		body.classList.toggle('crypt-dark');
		this.classList.toggle('pe-7s-sun');

	}
});