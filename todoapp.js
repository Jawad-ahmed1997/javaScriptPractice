var mynodelist = document.getElementsByTagName("LI");
var i;
for(i=0;i<mynodelist.length;i++){
    var span= document.createElement("span")
    var txt=document.createTextNode("\u00D7")
    span.className="close";
    span.appendChild(txt);
    mynodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function newelement(){
var li = document.createElement("LI");
var myinput = document.getElementById("myinput").value;
console.log(myinput)
var t = document.createTextNode(myinput);
li.appendChild(t);
if(myinput===""){
alert("You must Write Something")
}
else{
    document.getElementById("myul").appendChild(li);
}
document.getElementById("myinput").value ="";
var span= document.createElement("span")
var txt=document.createTextNode("\u00D7")
span.className="close";
span.appendChild(txt);
li.appendChild(span);
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
var list = document.querySelector("LI");
list.addEventListener('click', function(ev){
if(ev.target.tagName='Li'){
    ev.target.classList.toggle('checked');
}
},false)


