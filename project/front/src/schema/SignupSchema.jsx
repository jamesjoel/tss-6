import * as YUP from 'yup'
const SignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Name"),
          email : YUP.string().email("This Email id is Invalid").required("Insert Your Email Id"),
          password : YUP.string().required("Insert Your Password"),
          studentId : YUP.string().required("Insert Your Student ID"),
          department : YUP.string().required("Select Your Department"),
          gender : YUP.string().required("Select Your Gender"),
          address : YUP.string().required("Insert Your Address"),
          repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password")
  });

  export default SignupSchema