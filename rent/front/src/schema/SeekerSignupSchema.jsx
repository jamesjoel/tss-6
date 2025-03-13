import * as YUP from 'yup';

let SeekerSignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Invalid Email Id").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),
    repass : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Number Only").required("Insert Your Contact Number"),
    address : YUP.string().required("Insert Your Full Address"),
    gender : YUP.string().required("Select Your Gender"),
})

export default SeekerSignupSchema;