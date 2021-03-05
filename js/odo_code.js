    window.odometerOptions = {
    format: 'd',
    duration: 0,
    animation: 'count',
    theme: 'minimal'
  };
  // const input_modulus = 256, 768, ...?
  const byte_modulus = 256;
  let rad = 2;
  let reading = 0;
  const slider = document.getElementById("n-slider");
  const output = document.getElementById("n");
  const odom = document.getElementById("myOd");

  function recast(n,r) {
    let x = 0;
    let i = 0;
    let b = 1;
    while (n > 0) {
      i = n % r;
      x += b * i;
      b *= 10;
      n = Math.floor(n / r);
    }
    return x;
  }

  function update(new_val) {
    let disp_val = new_val % byte_modulus;
    let casting = recast(disp_val, rad);
    output.innerHTML = disp_val;
    odom.innerHTML = casting;
    slider.value = new_val;
  }

  update(0);

  slider.oninput = function() {
    reading = parseInt(this.value);
    update(reading);
  }

  function bumpDown() {
    reading = (reading + input_modulus - 1) % input_modulus;
    update(reading);
  }

  function bumpUp() {
    reading = (reading + 1) % input_modulus;
    update(reading);
  }
