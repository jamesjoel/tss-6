let myfunc = (a=10, b=1, c=1) =>{
    // let a = 100;
    // let b = 5;
    // let c = 2;

    let x = a*b;
    let y = x/c;

    console.log(y);
}

myfunc(1000, 20, 10);
myfunc(20, 50, 2);
myfunc(50, 2, 20);

myfunc(10, 10);
myfunc(50)

myfunc();
