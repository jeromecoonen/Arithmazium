    window.odometerOptions = {
    format: 'd',
    duration: 0,
    animation: 'count',
    theme: 'minimal'
  };
  const byte_modulus = 256;
  const rad = 2;
  const num_digs = 8;
  let reading = 0;
  const slider = document.getElementById("n-slider");
  const output = document.getElementById("n");
  const out_spans = new Array(num_digs);
  let i = 0;
  while (i < num_digs) {
    out_spans[i] = document.getElementById("dig-" + i.toString());
    i += 1;
  }

  function update(new_val) {
    let disp_val = new_val % byte_modulus;
    //let casting = recast(disp_val, rad);
    const num_str = disp_val.toString(rad);
    const out_str = num_str.padStart(num_digs, "0");
    //console.log("num_str: " + num_str + "  out_str: " + out_str);
    let out_digs = out_str.split("");
    //console.log("out_digs: " + out_digs.toString());
    let i = 0;
    while (i < num_digs) {
      out_spans[i].innerHTML = out_digs[i].toString();
      i += 1;
    }
    output.innerHTML = disp_val;
    //odom.innerHTML = casting;
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