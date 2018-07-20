//video rebuild at https://youtu.be/kwVfYG2BnR0

function grouped(e, n){
	if(e != null){
	return e[n].toString();
	}else{
	return '';	
	}
}
var keywords = grouped(/(keywords=.+?)&/.exec(document.referrer), 1);
var conns = grouped(/fs_profileNetworkInfo:(.+?)"/.exec(document.body.outerHTML), 1);
var output = 'https://www.linkedin.com/search/results/people/?'+keywords+'&facetConnectionOf=%5B"'+conns+'"%5D';
window.open(output.replace(/\?\&/, '?'));
