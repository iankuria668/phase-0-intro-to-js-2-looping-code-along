writeCards = function(nameProvided){
    return nameProvided.map(name => `Thank you, ${name}, for the wonderful surprise gift!`)
}

countDown = function(num){
    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}