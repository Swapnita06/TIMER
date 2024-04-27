

/*function displaytime(){
    var s=new Date();
    var hours = s.getHours();
    var minutes = s.getMinutes();
    var seconds = s.getSeconds();
    var amOrPm = "AM" ;
    if(hours >= 12){
      amOrPm = "PM" ;

}*/
/*if(hours>12){
    hours=hours-12;
}
if(hours<10){
    hours="0"+hours;
}
if(min < 10){
    min = "0" + min ;
  }
  if(sec < 10){
    sec = "0"+ sec ;
  }
  
  /*setInterval(()=>{
    let d= new Date();
document.getElementById("digiClock").innerHTML=d.toLocaleTimeString();
  },1000);
}*/
async function displayClock(){
  var s=new Date();
  var hours = s.getHours();
  var minutes = s.getMinutes();
  var seconds = s.getSeconds();
 var session=document.getElementById('session');
 if(hours>=12){
  session.innerHTML='PM';
}
else{
  session.innerHTML="AM";
}
  document.getElementById('hours').innerHTML=hours;
  document.getElementById('minutes').innerHTML=minutes;
  document.getElementById('seconds').innerHTML=seconds;
  if(hours>12){
    hours=hours-12;
}
if(hours<10){
    hours="0"+hours;
}
if(minutes < 10){
  minutes = "0" + minutes ;
  }
  if(seconds < 10){
    seconds = "0"+ seconds ;
  }
 /* var amOrPm = "AM" ;
  if(hours >= 12){
    amOrPm = "PM" ;*/
  /*if(hours>=12){
    session.innerHTML='PM';
  }
  else{
    session.innerHTML="AM";
  }*/
}
setInterval(displayClock,10);