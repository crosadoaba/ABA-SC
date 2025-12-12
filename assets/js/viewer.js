
var i=0;
var img=document.getElementById('page');
var input=document.getElementById('pageInput');

function render(){
  img.src=pages[i];
  input.value=i+1;
}

document.getElementById('next').onclick=function(){
  if(i<pages.length-1){i++;render();}
};
document.getElementById('prev').onclick=function(){
  if(i>0){i--;render();}
};

input.onchange=function(){
  var n=parseInt(this.value,10)-1;
  if(!isNaN(n)&&n>=0&&n<pages.length){i=n;render();}
  else{this.value=i+1;}
};

document.onkeydown=function(e){
  if(e.key==='ArrowRight')document.getElementById('next').click();
  if(e.key==='ArrowLeft')document.getElementById('prev').click();
};

// Touch swipe support
var startX=0;
var threshold=50;
var viewer=document.getElementById('viewer');

viewer.addEventListener('touchstart',function(e){
  startX=e.touches[0].clientX;
},{passive:true});

viewer.addEventListener('touchend',function(e){
  var endX=e.changedTouches[0].clientX;
  var diff=startX-endX;
  if(Math.abs(diff)>threshold){
    if(diff>0){document.getElementById('next').click();}
    else{document.getElementById('prev').click();}
  }
});

document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&(e.key==='p'||e.key==='s'))e.preventDefault();
});
