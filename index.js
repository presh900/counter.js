const  variables  = document.getElementsByClassName('count-up');

for (let i = 0; i < variables.length; i++) {
    console.log(variables[i].innerHTML);

    var number = variables[i].innerHTML;
    
    countup(number,i);

    // result = countup(number);

    // document.getElementsByClassName('count-up')[i].innerHTML = result;
    
}

function countup(number,i) {
    var start = 0;
    console.log("number is "+number+" and start is "+start);
    const x_count =setInterval(()=>{
        if(start==number){
            console.log(start+" is equals "+number);
            clearInterval(x_count);
            return;
        }

        start+=1;
        document.getElementsByClassName('count-up')[i].innerHTML= start;


    },100)
}