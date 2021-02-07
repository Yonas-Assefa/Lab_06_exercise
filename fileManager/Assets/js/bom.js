/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
let itemArray=document.getElementsByClassName('collection-item');






// Display the BOM Information on the innerHTML of the elements


//Location Information -href
itemArray[0].addEventListener('click',action1);
function action1(e){
    itemArray[0].firstElementChild.innerHTML=window.location.href;
}


//Location Information -protocol
itemArray[1].addEventListener('click',action2);
function action2(e){
    itemArray[1].firstElementChild.innerHTML=window.location.protocol;
}


//Location Information -host
itemArray[2].addEventListener('click',action3);
function action3(e){
    itemArray[2].firstElementChild.innerHTML=window.location.host;
}



//Location Information -port
itemArray[3].addEventListener('click',action4);
function action4(e){
    itemArray[3].firstElementChild.innerHTML=window.location.port;
}


//Location Information -hostname
itemArray[4].addEventListener('click',action5);
function action5(e){
    itemArray[4].firstElementChild.innerHTML=window.location.hostname;
}


//browser info-Appname
itemArray[5].addEventListener('click',action6);
function action6(e){
    itemArray[5].firstElementChild.innerHTML=window.navigator.appName;
}

//browser info-AppVersion
itemArray[6].addEventListener('click',action7);
function action7(e){
    itemArray[6].firstElementChild.innerHTML=window.navigator.appVersion;
}


//browser info-AppVersion
itemArray[7].addEventListener('click',action8);
function action8(e){
    itemArray[7].firstElementChild.innerHTML=window.navigator.platform;
}

//browser info-AppVersion
itemArray[8].addEventListener('click',action9);
function action9(e){
    itemArray[8].firstElementChild.innerHTML=window.navigator.language;
}

//browser info-AppVersion
itemArray[9].addEventListener('click',action10);
function action10(e){
    itemArray[9].firstElementChild.innerHTML=window.navigator.cookieEnabled;
}


//screen info-height
itemArray[10].addEventListener('click',action11);
function action11(e){
    itemArray[10].firstElementChild.innerHTML=window.screen.height;
}

//screen info-width
itemArray[11].addEventListener('click',action12);
function action12(e){
    itemArray[11].firstElementChild.innerHTML=window.screen.width;
}

//screen info-pixldebth
itemArray[12].addEventListener('click',action13);
function action13(e){
    itemArray[12].firstElementChild.innerHTML=window.screen.pixelDepth;
}


//browsing-history info--length
itemArray[13].addEventListener('click',action14);
function action14(e){
    itemArray[13].firstElementChild.innerHTML=window.history.length;
}

//browsing-history info--state
itemArray[14].addEventListener('click',action15);
function action15(e){
    itemArray[14].firstElementChild.innerHTML=window.history.state;
}


