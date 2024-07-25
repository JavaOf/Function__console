let button = document.getElementById('button');
let button2 = document.getElementById('button2');

button.addEventListener('click', ()=>{
    console.log('Старт');
    setTimeout(function(){
        console.log('2 секунды прошло')
    }, 2000);

    setTimeout(function(){
        console.log('3 секунды прошло')
    }, 3000);
});


button2.addEventListener('click', ()=>{
    console.log('Старт');
    setTimeout(function(){
        console.log('1 секунды прошло')
    }, 1000);

    let interval = setInterval(function(){
        console.log('Прошло еще 2 секунды')
    }, 2000);

    setTimeout(function(){
        clearInterval(interval)
        console.log('Прошло 10 секунд ')
    }, 10000);

});