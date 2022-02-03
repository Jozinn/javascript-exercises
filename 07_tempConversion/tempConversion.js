const ftoc = function(tempf) {
  let tempc = (tempf - 32) * 5/9;
  tempc = +tempc.toFixed(1);
  return tempc; 
};

const ctof = function(tempc) {
  let tempf = tempc * 9/5 + 32;
  tempf = +tempf.toFixed(1);
  return tempf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
