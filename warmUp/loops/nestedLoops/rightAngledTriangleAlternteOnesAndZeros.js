for(let i = 0; i<6; i++){
   let row = "";
   let toggle = 1;
   for (let j = 0; j<i+1; j++){
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
   }
   console.log(row);
}