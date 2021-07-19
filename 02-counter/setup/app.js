function btnClick(type){
    var currenCount = document.querySelector("#value").innerHTML;
    if(type === 'increment'){
        ++currenCount;
    } else if (type === 'decrement'){
        --currenCount
    } else {
        currenCount = 0;
    }
    document.querySelector("#value").innerHTML = currenCount;

}