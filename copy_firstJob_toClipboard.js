//lets build something together!!

//today we will learn how to copy an HTML element to your clipboard. 

//javascript has a built-in function which will copy highlighted/selected text within a webpage to your clipboard, but that is not helpful for anything I need. document.execCommand("copy");

//javascript also has a built-in function which will select text from within an input element. That gets us closer, but what if the data we want is not within an input element? ...well, i guess we could create one, no?

//so what do we need here?
/*/
1) create an input element on the website
2) add our input element to the body of the webpage we are currently viewing.
3) assign an id to that element,  so we can call upon it.
4) now we will call that id and add some text to the input value
5) select this input element 
6) copy it by using the execCommand("copy") function
/*/

var firstCoName = document.getElementById("profile-experience").getElementsByTagName("h5")[0].innerText;
var dumdum = document.createElement("input");
document.body.appendChild(dumdum); 
dumdum.setAttribute("id", "copyBox_1"); 
document.getElementById("copyBox_1").value = firstCoName; 
dumdum.select();
document.execCommand("copy");
