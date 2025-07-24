function countDigits(n) {
 console.log(n)
 let number = Math.abs(n);
 console.log(number)
  let counter = 0;
  if(n == 0 ) return 1;
  while (number > 0) {
    number = Math.floor(number/10);
    counter++  
  }

  return counter;
}



console.log(countDigits(-680125));