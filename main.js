var tag_a=document.getElementsByTagName('a')[1];
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    tag_a.innerHTML =t ;
}

//____________________________________________________________________

var my_text=document.getElementById('my_text');
var result=document.getElementById('result');
var Run=document.querySelectorAll("button")[0];
var Delete=document.querySelectorAll("button")[1];
var img_1=document.querySelectorAll("img")[1];
var img_2=document.querySelectorAll("img")[2];
var my_div=document.getElementById('my_div');
var tag_a2=document.getElementsByTagName('a')[2];

localStorage.setItem('my_text',my_text.value);

onload=()=>{

    my_text.value=localStorage.getItem('my_text');
    result.innerHTML=my_text.value;
    document.body.style.backgroundColor=localStorage.getItem('backgroundColor');
    result.style.color= localStorage.getItem('color');
    my_div.style.color= localStorage.getItem('color');;
}
Run.onclick=()=>{
    result.innerHTML=my_text.value;
    localStorage.setItem('my_text',my_text.value);

}
Delete.onclick=()=>{
    result.innerHTML="";
    localStorage.removeItem('my_text')
}

img_1.onclick=()=>{
    localStorage.setItem('color','White');
    localStorage.setItem('backgroundColor','#282C34');
    location.reload();
}
img_2.onclick=()=>{
    localStorage.setItem('color','#282C34');
    localStorage.setItem('backgroundColor','White');
    location.reload();
}