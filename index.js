const  variables  = document.getElementsByClassName('count-up');

for (let i = 0; i < variables.length; i++) {

    var number = variables[i].innerHTML;
    var speed = ((variables[i].getAttribute('data-speed') || 100)/number)*100;
    countup(number,i,speed);
    
}

function countup(number,i,speed) {
    var start = 0;
    const x_count =setInterval(()=>{
        if(start==number){
            clearInterval(x_count);
            return;
        }

        start+=1;
        document.getElementsByClassName('count-up')[i].innerHTML= start;

    },speed)
}