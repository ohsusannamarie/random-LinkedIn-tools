function grouped(e, n) {
  if (e != null) {
    return e[n].toString();
  } else {
    return "";
  }
}

var prodElm = parseInt(grouped(/^(.+?)\s*profile/.exec(document.getElementsByClassName("me-wvmp-views__profile-views Sans-13px-black-55% pr5")[0].innerText), 1));

var numScrollEventsNeeded = Math.round((prodElm - 6) / 9);

function timedScroller(num) {
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, num);

}

for (i = 0; i < numScrollEventsNeeded; i++) {
  timedScroller(i * 1900);
}

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

function clearOut(str) {
  if (str == undefined) {
    return '';
  } else {
    return str.replace(/undefined|\&|\?|\#|"|\=/g, '');
  }
}

setTimeout(() => {
  var profContainer = document.getElementsByTagName("article");
  var dataArray = [];

  for (i = 1; i < (profContainer.length - 1); i++) {

    var profLink = grouped(/linkedin\.com\/in\/(.+?)(?=\/|$)/.exec(validate(profContainer[i].getElementsByTagName("a"), 0, "href")), 1);

    var seen = validate(profContainer[i].getElementsByClassName("me-wvmp-viewer-card__time-ago"), 0, "innerText");

    var name = validate(validate(profContainer[i].getElementsByTagName("h2"), 0, 'next').getElementsByTagName("span"), 0, "innerText");

    var dist = validate(validate(profContainer[i].getElementsByTagName("h2"), 0, 'next').getElementsByTagName("span"), 1, "innerText");

    var work = validate(profContainer[i].getElementsByClassName("me-wvmp-viewer-card__viewer-headline"), 0, "innerText");

    var foundVia = validate(profContainer[i].getElementsByClassName("me-wvmp-viewer-card__found-via"), 0, "innerText");
    if (work == undefined) {
      work = validate(validate(profContainer[i].getElementsByTagName("h2"), 0, 'next').getElementsByTagName("p"), 0, 'innerText');
    }
    dataArray.push('["' + profLink + '","' + clearOut(name) + '","' + clearOut(work) + '","' + clearOut(seen) + '","' + clearOut(dist) + '","' + clearOut(foundVia).replace(/Found you via /, '') + '"]');

  }

  var partitionArray = (array, size) => array.map((e, i) => (i % size === 0) ? array.slice(i, i + size) : null).filter((e) => e);

  var arrays = partitionArray(dataArray, 30);

  function timedPageOpen(fun, num) {

    setTimeout(() => {

      window.open(fun);

    }, num);

  }

  for (a in arrays) {
    var sendthis = encodeURIComponent('[' + arrays[a].toString() + ']');
    console.log('[' + arrays[a].toString() + ']')
    timedPageOpen('https://script.google.com/macros/s/AKfycbz2sDRTJ4OqpkXSlJxsD_fRPpzLCuSyxYEvqIJ5abP_KiVo7W4/exec?out=' + sendthis, (a * 533));

  }
}, ((numScrollEventsNeeded * 1900) + 1333));
