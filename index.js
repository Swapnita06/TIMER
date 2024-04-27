let [seconds,minutes,hours]=[0,0,0];
let displaytime=document.getElementById("timer_display");
let timer=null;
//document.getElementById("startbtn").addEventListener('click',watchstart());
//document.getElementById("pausebtn").addEventListener('click',function(){ 
     //   clearInterval(timer);
//});
   // document.getElementById("startbtn").addEventListener('click',function(){
            //clearInterval(timer);
       //timer_display.innerHTML='00:00:00';
       //});
async function stopwatch(){
    seconds++;
    if(seconds==60){
       seconds=0;
       minutes++;
       if(minutes==60){
        minutes=0;
       hours++;
       if(hours==24)
        hours=0;
       }}
       timer_display.innerHTML= hours+ ":"+minutes+ ":"+seconds;
    }
    function watchstart(){
        if(timer!=null){
            clearInterval(timer);
        }
        timer=setInterval(stopwatch,1000);
    }
    function watchStop(){
        clearInterval(timer) ;
      }

      function watchReset(){
        clearInterval(timer) ;
        seconds = 0;
        minutes = 0;
        hours = 0;
        //let [seconds, minutes, hours] = [0, 0, 0] ;
        timer_display.innerHTML = "00:"+"00:"+"00";
      }
   

    

