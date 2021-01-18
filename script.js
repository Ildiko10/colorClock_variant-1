function colorClock(){
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  var clockFace = hours + ' @ ' + minutes + ' @ ' + seconds;
  var vividSeconds = (4*seconds)
  var vividMinutes = (4*minutes)
  var vividHours = (4*hours)  
  
    var clockFace = hours + ' @ ' + minutes + ' @ ' + seconds;
  var hexColor = '#' + (vividSeconds).toString(16) + (vividMinutes).toString(16) + (vividHours).toString(16);
  
  document.getElementById('clock').innerHTML = clockFace;  
  document.body.style.background = hexColor;
  
  setTimeout(function() {
    colorClock();
  }, 1000);
}

colorClock();