count=0;
totalCount=document.getElementById('total-count').innerHTML=count;
let incr=()=>{
    // document.getElementById('incr')
    totalCount=document.getElementById('total-count').innerHTML=count++;
}
let decr=()=>{
    document.getElementById('total-count').innerHTML=count--
}
let reset=()=>{
    document.getElementById('total-count').innerHTML=0;
}