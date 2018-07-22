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
function boolOr(str){
	return str.toString().replace(/,/g, ' OR '); 
}
var worker = document.getElementById("intro_container_id").getElementsByClassName("_3-90 _8o _8s lfloat _ohe img sp_8hfQa3kOwVD_2x sx_e8b967");
var workArr = [];
for(w=0; w<worker.length; w++){	
	var job = grouped(/.+?at\s(.+)/ig.exec(worker[w].parentNode.innerText), 1);
	workArr.push(job);
}
var co = '&company='+ boolOr(workArr).replace(/\s+/g, "%20")
var fullname = document.getElementById("fb-timeline-cover-name").innerText;
var fn = 'firstName=' + grouped(/^([a-zA-Z]+\S*)\s/.exec(fullname), 1);
var ln = '&lastName=' +/[a-zA-Z]+\S*[a-zA-Z]*$/.exec(fullname);

var startUrl = 'https://www.linkedin.com/search/results/people/?';
window.open(startUrl+fn+ln+co);
