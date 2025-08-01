function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;

  return powerOfTwo(n / 2);
}

console.log("is 4 power of two ? " + (powerOfTwo(4) ? "Yes" : "No"));
console.log("is 3 power of two ? " + (powerOfTwo(3) ? "Yes" : "No"));
console.log("is 10 power of two ? " + (powerOfTwo(10) ? "Yes" : "No"));
console.log("is 22 power of two ? " + (powerOfTwo(22) ? "Yes" : "No"));
