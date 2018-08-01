
function grouped(e, n){
	if(e != null){
		return e[n];
	}else{
		return '';
	}
}

function clearLinks(){
  this.parentElement.removeChild(document.getElementById("linkedyDobie"));
}

function switcheroo(){
	var regXProfName = /https:\/\/www\.facebook\.com\/\w.+?\w\?/;
	if(regXProfName.test(this.href) === true){

	var fn = grouped(/(^\w*\S+\w*)\s/.exec(this.innerHTML), 1);
	var ln = grouped(/\s+(\w*\S+\w*)$/.exec(this.innerHTML), 1);
  
	var newlink = 'https://www.linkedin.com/search/results/people/?keywords=&firstName='+fn+'&lastName='+ln;
  
	this.href = newlink;
	this.style.color = "green";
	}
}

var aychRef = document.getElementsByTagName("a");

Array.from(aychRef).forEach(function(element) {
   	element.addEventListener('mouseover', switcheroo);
    });

