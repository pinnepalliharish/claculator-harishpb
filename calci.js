// function add(){
//     var a = document.getElementsByClassName("first")[0].value;
//     var b = document.getElementsByClassName("second")[0].value;
//     var result= Number(a)+Number(b);
//     document.getElementsByClassName("output")[0].innerText=`Sum of ${a} and ${b} is ${result}`
// }
// function sub(){
//     var a = document.getElementsByClassName("first")[0].value;
//     var b = document.getElementsByClassName("second")[0].value;
//     var result= Number(a)-Number(b);
//     document.getElementsByClassName("output")[0].innerText=`Difference between ${a} and ${b} is ${result}`
// }
// function mul(){
//     var a = document.getElementsByClassName("first")[0].value;
//     var b = document.getElementsByClassName("second")[0].value;
//     var result= Number(a)*Number(b);
//     document.getElementsByClassName("output")[0].innerText=`Multiplication of ${a} and ${b} is ${result}`
// }
// function div(){
//     var a = document.getElementsByClassName("first")[0].value;
//     var b = document.getElementsByClassName("second")[0].value;
//     var result= Number(a)/Number(b);
//     document.getElementsByClassName("output")[0].innerText=`Division of ${a} and ${b} is ${result}`
// }
// function mod(){
//     var a = document.getElementsByClassName("first")[0].value;
//     var b = document.getElementsByClassName("second")[0].value;
//     var result= Number(a)%Number(b);
//     document.getElementsByClassName("output")[0].innerText=`Modules of ${a} and ${b} is ${result}`
// }

function calc(opera){
    var a = document.getElementsByClassName("first")[0].value;
    var b = document.getElementsByClassName("second")[0].value;
    var result;
    if (opera=="add"){
        result=`sum of ${a} and ${b} is ${Number(a) + Number(b)}`;
    }
    else if(opera=="sub"){
            result=`Difference of ${a} and ${b} is ${Number(a) - Number(b)}`;
    }
    else if(opera=="mul"){
        result=`Multiplication of ${a} and ${b} is ${Number(a) * Number(b)}`;
    }
    else if(opera=="div"){
        result=`Division of ${a} and ${b} is ${Number(a) / Number(b)}`;
    }
    else if(opera=="mod"){
        result=`modules of ${a} and ${b} is ${Number(a) % Number(b)}`;
}
    document.getElementsByClassName("output")[0].innerText=result
}

