let n = 10;

for (let i = 0 ; i< n ; i++) {
    let row = " \n";
    for(let j = 0;j <= i; j++ ){
        row = row + " ⭐ ";
    }
    console.log(row);
}