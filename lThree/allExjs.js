/**
 * Created by root on 6/23/18.
 */
var myH1=document.getElementById("myH1")       ;
myH1.style.color="red";
myH1.style.background="yellow";
myH1.style.textAlign="center";
myH1.style.margin="60px";
myH1.style.padding="30px";
myH1.style.cursor="pointer";

var myH2=document.getElementById("myH2");
myH2.append(" Goat Kyar.");

function changeBg(){
    myH2.append(" i like ice-cream");
    myH1.innerHTML="Change to grey";
    myH1.style.background="grey";
    myH2.style.background="green";
    myH2.style.margin="80px";
    myH2.style.borderRadius="20px";
    myH2.style.padding="30px";
}

