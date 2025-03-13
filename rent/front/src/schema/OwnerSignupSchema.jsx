import * as YUP from 'yup';

let OwnerSignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),
    repass : YUP.string().required("Insert Your Re-Password"),
    contact : YUP.string().required("Insert Your Contact Number"),
    address : YUP.string().required("Insert Your Full Address"),
})

export default OwnerSignupSchema;