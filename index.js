var rpio = require('rpio'),
CLOSE=rpio.HIGH,
OPEN=rpio.LOW,
currentStatus=CLOSE,
max=52000,
min=40000,
funPin=16;
rpio.open(funPin, rpio.OUTPUT, currentStatus);

var exec = require('child_process').exec;
setInterval(function(){
  exec("cat /sys/devices/virtual/thermal/thermal_zone0/temp",function(err,stdout,stderr){
    if(err){
      console.error(err);
      return;
    }
    let val=parseInt(stdout);
    if(currentStatus===CLOSE && val>=max){
      currentStatus=OPEN;
      rpio.write(funPin,OPEN);
      console.log(new Date().toLocaleString(),'OPEN');
      return;
    }
    if(currentStatus===OPEN && val<=min){
      currentStatus=CLOSE;
      rpio.write(funPin,CLOSE);
      console.log(new Date().toLocaleString(),'CLOSE');
      return;
    }
  });
},1000);
