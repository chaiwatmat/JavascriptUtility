function validatePID(pid){
    pid = pid.toString().replace(/D/g,'');
    if(pid.length == 13){
        var sum = 0;
        for(var i = 0; i < pid.length-1; i++){
            sum += Number(pid.charAt(i))*(pid.length-i);
        }
        var last_digit = (11 - sum % 11) % 10;
        return pid.charAt(12) == last_digit;
    }else{
        return false;
    }
}

validatePID('1-2345-67891-23-2');
//credit : http://www.earthchie.com/blog/js-function-validate-pid/