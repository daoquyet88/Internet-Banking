function getRamdom(min, max){
    return Math.random()*(max-min)+min;
}

exports.between1and10()=function(){
    return getRamdom(1,10);
}