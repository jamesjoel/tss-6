let finalePrice = (price, slab, gender, age)=>{
    if(slab==1){
        let gst = 5;
        if(gender=="female"){
            let x = price*10/100;
            price = price-x;
        }
        if(age < 20){
            let y = price*10/100;
            price = price-y;
        }
        let am = price*gst/100;
        let net = price+am;
        return net;

    }else if(slab==2){
        let gst = 8;
        if(gender=="female"){
            let x = price*10/100;
            price = price-x;
        }
        if(age < 20){
            let y = price*10/100;
            price = price-y;
        }
        let am = price*gst/100;
        let net = price+am;
        return net;
    }else if(slab==3){
        let gst = 18;
        if(gender=="female"){
            let x = price*10/100;
            price = price-x;
        }
        if(age < 20){
            let y = price*10/100;
            price = price-y;
        }
        let am = price*gst/100;
        let net = price+am;
        return net;
    }else{
        let gst = 28;
        if(gender=="female"){
            let x = price*10/100;
            price = price-x;
        }
        if(age < 20){
            let y = price*10/100;
            price = price-y;
        }
        let am = price*gst/100;
        let net = price+am;
        return net;
    }
}

let ans = finalePrice(10000, 1, "female", 15)
// finalePrice(10000, 2)
console.log(ans)