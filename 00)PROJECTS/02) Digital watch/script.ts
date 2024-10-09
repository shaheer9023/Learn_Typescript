

function  clock(){
    let Days:any=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Months:any=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let hours:any=document.getElementById("hours");
    let minutes:any=document.getElementById("minutes");
    let seconds:any=document.getElementById("seconds");
    let period:any=document.getElementById("ampm");
    let day:any=document.getElementById("day");
    let date:any=document.getElementById("date");
    let time= new Date();
    let hrs:any=time.getHours();
    let min:any=time.getMinutes();
    let sec:any=time.getSeconds();
    let days:any=time.getDay();
    let dates:any=time.getDate();
    let months:any=time.getMonth();
    let years:any=time.getFullYear();
    day.innerHTML=Days[days];
    date.innerHTML=Months[months]+" "+dates+","+years;
    
    
   if(hrs>12){
       hrs=hrs-12;
   }
   if(hrs==0){
       hrs=12;
   }
  
   let ampm = hrs <= 12 ? "PM" : "AM";
   hrs = hrs < 10 ? "0" + hrs : hrs;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec : sec;

   hours.innerHTML=hrs;
   minutes.innerHTML=min;
   seconds.innerHTML=sec;
   period.innerHTML=ampm;

}
setInterval(clock,1000);