const modalWibdow = document.getElementsByClassName('modal')[0];
const buttonOpen = document.getElementsByClassName('button')[0];
const closeBtn = document.getElementsByClassName('close')[0];

buttonOpen.onclick = function() {
	modalWibdow.style.display = 'block';
}

closeBtn.onclick = function() {
	modalWibdow.style.display = 'none';
}

window.onclick = function(event) {
	if (event.target == modalWibdow) {
		modalWibdow.style.display = 'none';
	}
}