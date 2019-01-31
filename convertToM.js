let stdin = process.openStdin()
console.log('Enter value in cm: ')
stdin.addListener("data", (cen) => {
    let result
    if(cen > 0){
        result = cen *0.01
        console.log('cm =' + cen + 'to' + result + 'm')
    }
    else
        console.log('No value')
    stdin.destroy()
})