var toUpperCharAt = function (val) {
  if(val){
    console.log('asdasda', val)
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
};

module.exports = toUpperCharAt;
