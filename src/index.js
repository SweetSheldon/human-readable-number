module.exports = function toReadable (number) {
  if(number===0){return 'zero'};
  if(number===100){return 'one hundred'}
  var unitsNums = ['', 'one', 'two' ,'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var tenNums = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  var prefs = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
if(number.toString().length<=2){return checkTens(number, unitsNums ,tenNums, prefs)}
else if(number.toString().length==3&&number%100==00){return  (unitsNums[Math.floor(number/100)]+" hundred")}
else if(number.toString().length==3){return  (unitsNums[Math.floor(number/100)]+" hundred "+ checkTens(number%100, unitsNums ,tenNums, prefs))}
}

function checkTens(num, unitsNums, tenNums, prefs){
if(num.toString().length==1){return unitsNums[num]}
  else if(num>=10&&num<=19){ return tenNums[num%10]}
  else if(num>=20&&(num%10==0)){return prefs[(num/10)-2]}
  else if(num>20){return (prefs[Math.floor(num/10)-2]+" "+unitsNums[num%10])}
}
