//Scripting for splash screen to disappear upon clicking

const splash = document.querySelector('.splash');
splash.onclick = function() {
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);
}

var $1 = document.getElementById('1');
	  $1.onclick = function() {
		  console.log("img clicker 1 clicked!");
		  window.top.postMessage('1', '*');
	  }
	  var $2 = document.getElementById('2');
	  $2.onclick = function() {
		  console.log("img clicker 2 clicked!");
		  window.top.postMessage('2', '*');
	  }
	  var $3 = document.getElementById('3');
	  $3.onclick = function() {
		  console.log("img clicker 3 clicked!");
		  window.top.postMessage('3', '*');
	  }