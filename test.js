function factorialNumber(n){
    if(n===1 || n===2){
        return 1;
    }
    else{
        return n*factorialNumber(n-1);
    }
    
}

const factorial=factorialNumber(5);


function fibonacci(n){
    let fib=[0,1];
    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib.slice(0,n+1);
}

console.log(fibonacci(5));