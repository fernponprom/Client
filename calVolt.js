let stdin = process.openStdin()

console.log('Enter current (I) & (R): ')
stdin.addListener("data", (i) => {
    if(i >= 0){
        stdin.addListener("data", (r) => {
            let Voltage
            if(r >= 0){
                Voltage = i * r
                if( Voltage > 0)
                    console.log('Voltage = ' + Voltage + 'v')
                else if( Voltage == 0)
                    console.log('No valtage')
            }
            else
                console.log('No value of (R)')
            
            stdin.destroy()
        })
    }
    else
        console.log('No value of (I)')
    
})