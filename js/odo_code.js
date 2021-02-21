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
    console.log('Type: ' + typeof(4 + String(3)));
    return x;
  }

  function update() {
    console.log('update in: ' + reading);
    casting = recast(reading, rad);
    output.innerHTML = reading;
    odom.innerHTML = casting;
    slider.value = reading;
  }

  update();

  slider.oninput = function() {
    reading = parseInt(this.value);
    console.log('slider type: ' + typeof(reading));
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
    console.log('bumpUp in: ' + reading);
    if (reading === maxVal) {
      reading = minVal;
    } else {
      reading += 1;
    }
    update();
  }
