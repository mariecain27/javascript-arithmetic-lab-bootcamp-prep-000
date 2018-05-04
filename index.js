function add(a, b) {
  return a + b
  add (1, 80)
}

function subtract(a, b) {
  return a - b
  subtract (60, 40)
}

function multiply(a, b) {
  return a * b
  multiply (2, 3.4)
}

function divide(a, b) {
  return a / b
  divide (5.0, 2.5)
}

function inc(a) {
  a++ 
  return a
}

function dec(a) {
  a-- 
  return a
}

function makeInt(a) {
  if (a == String) {
    return 0
  } else {
  parseInt(a, 10) 
  return a 
  }
}

function roughScale(x, base) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}




function preserveDecimal(a) {
  parseFloat(a) 
  return a
}


