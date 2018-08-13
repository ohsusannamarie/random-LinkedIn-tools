function grouped(e, n) {
  if (e != null) {
    return e[n].toString();
  } else {
    return "";
  }
}

function validate(e, n, t) {
  if (e != null) {
    if (e.length > (n)) {
      if (t == "href") {
        return e[n].href;
      }
      if (t == "innerText") {
        return e[n].innerText;
      }
      if (t == "innerHTML") {
        return e[n].innerHTML;
      }
      if (t = 'next') {
        return e[n];
      }
    }
  } else {
    return '';
  }
}

var profContainer = document.getElementsByTagName("article");
var connAvail = [];

for (i = 1; i < (profContainer.length); i++) {
	var connBtn = validate(profContainer[i].getElementsByTagName("button"),1,"innerText");
	if(/Connect/.test(connBtn) === true){
		connAvail.push(i);
	}	
}

function inviteThemAll(elmNum, timr){
	setTimeout(() => {
		profContainer[elmNum].getElementsByTagName("button")[1].click();
	},timr);
}
for(b in connAvail){
	var ct = b*333;
	inviteThemAll(connAvail[b], ct);
}
