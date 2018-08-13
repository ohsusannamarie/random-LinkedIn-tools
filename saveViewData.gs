/*/
install guide: https://youtu.be/NcTaR9hfoTI
/*/
var yourSheetId = 'ReplaceTHISwithYOURsheetId';
var yourSheetName = "Sheet1";
var ss = SpreadsheetApp.openById(yourSheetId);
var s1 = ss.getSheetByName(yourSheetName)


function grouped(e,n){
    if(e != null){
        return e[n].toString();
    }else{
        return "";
    }
}

function getName(type, fullname){
  function cleanName(fullname){
    var regXcommaplus = new RegExp(",.+");
    var regXjunk  = new RegExp('\\(|\\)|"|\\s*\\bJr\\b.*|\\s*\\bSr\\b.*|\\s*\\bIi\\b.*|\\s*\\bIii\\b.*|\\s*\\bIv\\b.*|\\s*\\bMba\\b.*|\\s*\\bPmp\\b.*|\\s+$', 'g');
    var regXendDot = new RegExp("\\.$");
    return fullname.replace(regXcommaplus, "").replace(regXjunk, "").replace(regXendDot, "");
  }
  function fixCase(fullname){ 
    return fullname.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  function getFirstName(fullname){
  	return grouped(/(^\w+\.\s+\w+(?=\s)|^\S+(?=\s))/.exec(cleanName(fullname)),1).toString();
  }
  function getLastName(fullname){
  	return grouped(/(\w*'\w*$|\w*-\w*$|\w+$)/.exec(cleanName(fullname)),1).toString();
  }
  if(type == "first"){
    return getFirstName(cleanName(fixCase(fullname)));
  }
  if(type == "last"){
    return getLastName(cleanName(fixCase(fullname)));
  }
}

var regXmin = /^(\d+)m\b/;
var regXhour = /^(\d+)h\b/;
var regXday = /^(\d+)d\b/;
var regXweek = /^(\d+)w\b/;
var regXmonth = /^(\d+)mo\b/;

var onemin = 60000;
var onehour = (onemin*60);
var oneday = (onehour*24);
var oneweek = (oneday*7)
var onemonth = (oneday*30);

function dateViewed(str){
  if(str != ''){
    var now = new Date().getTime();
    if(regXmin.test(str) === true){
      return new Date((now)-(parseInt(grouped(regXmin.exec(str), 1)) * onemin));
    }
    if(regXhour.test(str) === true){
      return new Date((now)-(parseInt(grouped(regXhour.exec(str), 1)) * onehour));
    }
    if(regXday.test(str) === true){
      return new Date((now)-(parseInt(grouped(regXday.exec(str), 1)) * oneday));
    }
    if(regXweek.test(str) === true){
      return new Date((now)-(parseInt(grouped(regXweek.exec(str), 1)) * oneweek));
    }
    if(regXmonth.test(str) === true){
      return new Date((now)-(parseInt(grouped(regXmonth.exec(str), 1)) * onemonth));
    }
  }else{ 
    return '';
  }
}

function check4Dupes(arr, val) {
  return arr.some(function(arrVal) {
    return val == arrVal;
  });
}

function doGet(req){
var profIdCol = s1.getRange(1, 1, s1.getLastRow(), 1).getValues();
var viewDateCol = s1.getRange(1, 6, s1.getLastRow(), 1).getValues();

  var inputArray = JSON.parse(decodeURIComponent(req.parameter.out));
  var dropContainer = [];
  for(i in inputArray){
    var profLink = 'https://www.linkedin.com/in/'+inputArray[i][0];
    var firstName = getName("first", inputArray[i][1]);
    var lastName = getName("last", inputArray[i][1]);
    var workInfo = inputArray[i][2];
    var date = dateViewed(inputArray[i][3]);
    var degreeConn = inputArray[i][4];
    var foundmevia = inputArray[i][5];
    var output = new Array(profLink,inputArray[i][1],firstName,lastName,workInfo,date,degreeConn,foundmevia);


    if(check4Dupes(profIdCol, profLink) === false){  
      dropContainer.push(output);
    }
    /*/ multiview. needs work
    for(t=0; t<profIdCol.length; t++){
        var viewTime = new Date(date).getTime()-5259600000;
        var timeInCol = new Date(viewDateCol[t]).getTime();
      if(profIdCol[t] == profLink && timeInCol < viewTime){
        var curval = s1.getRange((t+1), 9).getValue();
        s1.getRange((t+1), 9).setValue(curval.replace(/,$/, '')+"viewed again on "+date+",");
      }
    }
  /*/
  }  
  var nextRow = s1.getLastRow()+1;
  if(dropContainer.length > 0){
    s1.getRange(nextRow, 1, dropContainer.length, dropContainer[0].length).setValues(dropContainer);
    return ContentService.createTextOutput(dropContainer)
     .setMimeType(ContentService.MimeType.TEXT);  
  }else{
    return ContentService.createTextOutput("it appears eveyone here has already been added to your sheet.")
     .setMimeType(ContentService.MimeType.TEXT); 
  }
}
