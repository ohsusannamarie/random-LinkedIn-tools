//the function only runs on loaded page elements. we could write a function to fix that. maybe next time.

function grouped(e, n){ //this function handles our regular expression groups
  if(e != null){ //if the regex is not null (meaning we have a positive match)
    return e[n]; //return the regex group number as defined by "n"
  }else{
    return ''; //if the regex is null (meaning there was no match) -- return an empty string. We do this because a null response will break our script.
  }
}

function switcheroo(){ //this function handles the "a" tag elements we will pass through from the Array.from() function at the bottom of this script. 
    
  var regXProfName = /\b[a-zA-Z]*\S+[a-zA-Z]*/g; //this regex will match whole words. \b is a word boundary. [a-zA-Z]* will match zero or more letters (this does not include special chars like "é"). \S+ will match any non-whitespace chars (we use this to account for special chars like "é".  
    
  var regXjunker = /\d|RECENT ACTIVITY|See More|replie|div |show older|View Details|activity log|Create|\bnew\b|friend/ig;//this regex will be used to ignore the links which are not names.
//this is not a great practice unless you plan to maintain the code. This is something I use a lot. which is why i am updating it now.
    
    
  var fullnm = grouped(/(\w+.+?)(?:$|<)/.exec(this.innerHTML), 1); //this regex will get the names from the element after we conclude it is not junk from regXjunker. This one is complex, so reach out to me directly if you wan to know why we need it. 
    
  var nameMatcher = fullnm.match(regXProfName); //this creates an object with the whole words matches. We will use this as a second step in processing to verify it is a name, and not just some other link. We will assume that more than 1 but less than 4 is a name.
    
    
  if(nameMatcher != null & regXjunker.test(fullnm) === false){//this first condition checks to see if nameMatcher hits anything because we cannot check the length of a null match. the second condition checks to see if the current element has the junk we do not want and only proceeds if it does not find a match. 
      
    if(nameMatcher.length > 1 && nameMatcher.length < 5) {//we can just change the 4 to a five, but i prefer to always use < | >. 
 //the first condition is checking to see if there is at least 2 whole words. the second condition checks to see if the element has less than 5 whole words and only proceeds to the next step if these are both true.
        
      var fn = grouped(/(^\w*\S+\w*)\s/.exec(fullnm), 1); //this returns the first wholeword match in our full name. because we have filtered our element, this will only execute on 2-3 word matches. So we can somewhat safely assume the first word is the first name and the last word is the last name
      
      var ln = grouped(/\s+(\w*\S+\w*)$/.exec(fullnm), 1);//this returns the last wholeword match--assumes it is the last name
        
      var newlink = 'https://www.linkedin.com/search/results/people/?keywords=&firstName=' + fn + '&lastName=' + ln; //this creates a LinkedIn Search with the firstname and lastname
        
      this.href = newlink; //this replaces the current link in the parent element with our new link.
        
      this.style.color = "green"; //this changes the element to green
      this.style.fontSize = "1.15em"; //this makes the element slightly larger
      this.style.transition = "all 466ms ease-in-out";//this makes the change animated (just for fun)
    }
  }
}

var aychRef = document.getElementsByTagName("a"); //this is all of the "a" tag elements. this is where most links are housed. we run the switcheroo function on each of these elements if they pass through our condition parameters. 

Array.from(aychRef).forEach(element => {//this addes an event listener to each "a" tag and runs the switcheroo function when the user places their mouse over the element. 
  element.addEventListener('mouseover', switcheroo);
});
