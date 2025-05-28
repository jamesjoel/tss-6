import * as YUP from 'yup';

let SeekerSignupSchema = YUP.object({
    name : YUP
        .string()
        .required("Insert Your Full Name")
        .test("demo", "First Letter should be Capital", (val)=>{ // james
            let arr = val.split(""); 
            // [j, a, m, e, s]
            let char = arr[0]; // j
            if(char.toUpperCase()==char){
                return true;
            }else   
                return false;

        }),
    email : YUP.string().email("Invalid Email Id").required("Insert Your Email Id"),
    password : YUP
    .string()
    .required("Insert Your Password")
    .test("strongpass", "Your Password should be at least one number, one char, one spacial char", ()=>{
        
    }),
    repass : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Number Only").required("Insert Your Contact Number"),
    address : YUP.string().required("Insert Your Full Address"),
    gender : YUP.string().required("Select Your Gender"),
})

export default SeekerSignupSchema;


/*
    .test(uniquename, error msg, (a)=>{

    })

*/