function calculate() {
  var flex = document.getElementById('flex').value;
  var mass = document.getElementById('mass').value;
  var poleLength = document.getElementById('poleL').value;
  var height = document.getElementById('height').value;
  var angle = document.getElementById('angle').value;

  var angleinDegrees = (angle/2.0) * Math.PI / 180.0;
  var k = 51*(1-flex) + 2327;
  var compress = 0.03279*(poleLength-4.265) + 0.3;
  var tmp = Math.pow(compress, 2) * Math.pow(poleLength, 2);

  var a = (k*tmp)/(2.0*mass*9.8);
  var b = poleLength*(1-compress) - (height/4.0) - 0.2;
  var c = height*Math.cos(angleinDegrees) / 6.0;
  var result = document.getElementById('result');

  result.innerHTML = a+b+c;

}
