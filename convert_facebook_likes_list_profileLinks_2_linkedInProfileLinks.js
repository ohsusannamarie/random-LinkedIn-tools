var uniq = (arrArg) => {  return arrArg.filter((elem, pos, arr) => {    return arr.indexOf(elem) == pos;  });};

function grouped(e, n){
	if(e != null){
		return e[n];
	}else{
		return '';
	}
}

var loops = document.getElementsByTagName("div");
var larr = [];
var narr = [];
for(i=0; i<loops.length; i++){
	var role = loops[i].getAttribute("role");
	if(role == "dialog"){
		var ul = loops[i].getElementsByTagName("li");
		if(ul.length >0){
			for(p=0; p<ul.length; p++){
				var link = grouped(/(https:\/\/www\.facebook\.com\/.+?)\?fref.+?>(\w+.+?\w+)</.exec(ul[p].innerHTML), 1);
				var name = grouped(/(https:\/\/www\.facebook\.com\/.+?)\?fref.+?>(\w+.+?\w+)</.exec(ul[p].innerHTML), 2);
				larr.push(link);
				narr.push(name);
	var fn = grouped(/(^\w*\S+\w*)\s/.exec(name), 1);
	var ln = grouped(/\s+(\w*\S+\w*)$/.exec(name), 1);
	var newlink = 'https://www.linkedin.com/search/results/people/?keywords=&firstName='+fn+'&lastName='+ln;
ul[p].innerHTML = ul[p].innerHTML.replace(/https:\/\/www\.facebook\.com\/.+?\?fref.+?"/, newlink+'"')

        	}
        }
	}
}
