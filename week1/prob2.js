function fibo(n){
    if(n==0)
        return 0
    else if(n==1)
        return 1
    else
        return fibo(n-2)+fibo(n-1)
}

for(var i = 0;i<=12;i++){
    console.log(fibo(i))
}