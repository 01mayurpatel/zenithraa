var img1 = document.getElementById('gitbook-img-1');
var img2 = document.getElementById('gitbook-img-2');
var img3 = document.getElementById('gitbook-img-3');
var img4 = document.getElementById('gitbook-img-4');

function gitbookEnter(){
    img1.style.visibility="hidden";
    img2.style.visibility="visible";
    

}
function gitbookLeave(){
    img1.style.visibility="visible";
    img2.style.visibility="hidden";
    
    

}
function gitbookEnter2(){
    img3.style.visibility="hidden";
    img4.style.visibility="visible";
    

}
function gitbookLeave2(){
    img3.style.visibility="visible";
    img4.style.visibility="hidden";
    
    

}