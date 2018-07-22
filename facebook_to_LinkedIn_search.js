/*/
watch the build at https://youtu.be/hjeuJrc-vrQ
/*/
function grouped(e, n){
	if(e != null){ 
		return e[n].toString();
	}else{
		return '';
	}
}
var fullname = document.getElementById("fb-timeline-cover-name").innerText;
var fn = 'firstName=' + grouped(/^([a-zA-Z]+\S*)\s/.exec(fullname), 1);
var ln = '&lastName=' +/[a-zA-Z]+\S*[a-zA-Z]*$/.exec(fullname);

if(/Works at/i.test(document.body.innerText)){	
	var job = grouped(/Works at (.+)/i.exec(document.body.innerText), 1);
	var co = '&company='+job;
}else{
	var co = '';
}
var startUrl = 'https://www.linkedin.com/search/results/people/?';
window.open(startUrl+fn+ln+co);
