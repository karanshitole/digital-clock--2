const cl = console.log;
 function createDigitalclock(){
let d = new Date();
let hr = d.getHours();

let min = d.getMinutes();

let sec = d.getSeconds();
 
 let session = "AM";
  if (hr > 12){
	  session = "pm"
	  hr = hr - 12
  }
 
 cl(hr);
 let result = `${setZero(hr)}:${setZero(min)}:${setZero(sec)} ${session}`
 
 let digitalclock = document.getElementById("digitalclock");
 digitalclock.innerHTML = result;
 
 setTimeout(createDigitalclock, 1000)
 }
 createDigitalclock();
 function setZero(n){
	 return(n<10)? "0" + n : n
 }