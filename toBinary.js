let stdin = process.openStdin()
console.log('Enter number: ')
stdin.addListener("data" , (Num) => {
    
    let binary = [];

    while (Num > 0) {

        if (Num % 2 === 1) {

            binary.splice(0,0,1);
            Num = (Num - 1) / 2;

        } else {

            binary.splice(0,0,0);
            Num /= 2;
        }
    }

    binary = binary.join('');
    console.log('Binary is: ' +  binary);
    stdin.destroy() 
})
