import React from 'react';
import Main from './Main.js';

var anaNum = [[2000,4],[4,150]]; //Tesla Model3 50 kWh battery 220mi range.. xkwh/50
var anaItem = [["LED light bulbs for one hour", "Tesla Model 3's for a full charge"],["Bathtubs","Cups of Coffee"]]//ledLight bulbs ~10w 1000 bulbs=10000w =10Kw   xkwh/.01 = #bulbs per hour
var anaImg = ["imgSrs","imgSrs"];//filePath
var anaCur = [0,0];
var firstTime=true;
var consType=0;

var changeNum = function(type){
    if(type==0){
        anaCur[1]++
    }
    else if(type==1){
        anaCur[1]--
    }
     
    fun(consType)

}




var fun = function(type){    
    var doc = document.getElementById('AnaType');
    var del = document.getElementById('anaHeadDelete')
    var del2=document.getElementById('anaHead2Delete')
    consType=type
    if(del != null){
        doc.removeChild(del);
        doc.removeChild(del2);
    }
    var head=document.createElement('h1');
    var head2 = document.createElement('h1')
    head2.setAttribute("class","AnaItem")
    head2.setAttribute("id",'anaHead2Delete')
    var text=document.createTextNode(anaNum[anaCur[0]][anaCur[1]]+" "+anaItem[anaCur[0]][anaCur[1]])
    head2.appendChild(text);
    head.setAttribute("id","anaHeadDelete")
    switch(type){
        case 1:
            text = document.createTextNode("With the electricity used to power x, you could power...");
            head.appendChild(text);
            anaCur[0]=0
            break;
        case 2:
            text = document.createTextNode("With the hot water used by x, you could fill...");
            anaCur[0]=1
            head.appendChild(text);
            break;
        case 3:
            text = document.createTextNode("With the cold water used by x, you could fill...");
            head.appendChild(text);
            anaCur[0]=1
            break;
        case 4:
            text = document.createTextNode("With the steam used by x, you could fill...");
            head.appendChild(text);
            anaCur[0]=1
            break;
        case 0:
            text = document.createTextNode("With the electricity used to power x, you could power...");
            head.appendChild(text);
            anaCur[0]=0
            break;
    }
    doc.appendChild(head);
    doc.appendChild(head2);
    var doc2 = document.getElementById('lotsOfImg');
    while(doc2.firstChild){
        doc2.removeChild(doc2.firstChild)
    }   
    var doc2 = document.getElementById('lotsOfImg');
    for(var i =0; i<anaNum[anaCur[0]][anaCur[1]];i++){
        var img = document.createElement('img');
        img.src=anaImg[anaCur[0]][anaCur[1]];
        img.alt="NOIMAGE";
        doc2.appendChild(img)
    
    }
}
export {changeNum};
export default fun;