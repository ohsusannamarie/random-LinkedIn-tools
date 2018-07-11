/*/
this will fix firstname lastname to be Firstname Lastname.
This was built for those who are annoyed with undercase names
works on LinkedIn, or LinkedIn Recruiter

-------- follow along at -------> https://youtu.be/JmxQl6jJXCo

/*/

var url = window.location.href;
if(/linkedin\.com\/in/.test(url) === true){
var nameElm = document.getElementsByClassName("pv-top-card-section__name")[0].innerHTML;
document.getElementsByClassName("pv-top-card-section__name")[0].innerHTML = fixCase(nameElm);
}
if(/linkedin\.com\/recruiter/.test(url) === true){
var nameElm = document.getElementsByClassName("profile-info")[0].getElementsByTagName("h1")[0].innerHTML;
document.getElementsByClassName("profile-info")[0].getElementsByTagName("h1")[0].innerHTML = fixCase(nameElm);
}

function fixCase(str){
return str.replace(
        /\w\S*/g, function(az){
            return az.charAt(0).toUpperCase() + az.substr(1).toLowerCase();
        }
    );
}
