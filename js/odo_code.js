    window.odometerOptions = {
    format: 'd',
    duration: 0,
    animation: 'count',
    theme: 'minimal'
  };
  const minVal = 0;
  const maxVal = 255;
  var rad = 2;
  var reading = 0;
  var casting = 0;
  var slider = document.getElementById("n-slider");
  var output = document.getElementById("n");
  var odom = document.getElementById("myOd");

  function recast(n,r) {
    var x = 0;
    var i = 0;
    var b = 1;
    while (n > 0) {
      i = n % r;
      x += b * i;
      b *= 10;
      n = Math.floor(n / r);
    }
    return x;
  }

  function update() {
    casting = recast(reading, rad);
    output.innerHTML = reading;
    odom.innerHTML = casting;
    slider.value = reading;
  }

  update();

  slider.oninput = function() {
    reading = parseInt(this.value);
    update();
  }

  function bumpDown() {
    if (reading === minVal) {
      reading = maxVal;
    } else {
      reading -= 1;
    }
    update();
  }

  function bumpUp() {
    if (reading === maxVal) {
      reading = minVal;
    } else {
      reading += 1;
    }
    update();
  }
