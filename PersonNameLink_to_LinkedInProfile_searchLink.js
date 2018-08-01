function grouped(e, n){
  if (e != null) {
    return e[n];
  } else {
    return '';
  }
}

function switcheroo(){
  var regXProfName = /\w*\S+\w*/g;
  var regXnumber = /\d|See More|replie|div /ig;
  var fullnm = grouped(/(\w+.+?)(?:$|<)/.exec(this.innerHTML), 1);

  var nameMatcher = fullnm.match(regXProfName);
  if(nameMatcher != null & regXnumber.test(fullnm) === false){
    if(nameMatcher.length > 1 && nameMatcher.length < 4) {
      	var fn = grouped(/(^\w*\S+\w*)\s/.exec(fullnm), 1);
      	var ln = grouped(/\s+(\w*\S+\w*)$/.exec(fullnm), 1);
      	var newlink = 'https://www.linkedin.com/search/results/people/?keywords=&firstName=' + fn + '&lastName=' + ln;
      	this.href = newlink;
      	this.style.color = "green";
	this.style.fontSize = "1.15em";
	this.style.transition = "all 466ms ease-in-out";
    }
  }
}
var aychRef = document.getElementsByTagName("a");

Array.from(aychRef).forEach(element => {
  element.addEventListener('mouseover', switcheroo);
});
