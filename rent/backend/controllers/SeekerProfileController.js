import Seeker from '../models/Seeker.js'
import jwt from 'jsonwebtoken'
import sha1 from 'sha1'
import nodemailer from 'nodemailer';
import rand from 'string-random'

let transporter = nodemailer.createTransport({
    host : "smtp-relay.brevo.com",
    port : 587,
    secure : false,
    auth : {
        user : "870885002@smtp-brevo.com",
        pass : "QH8dFVscj19GwK7B"
    }
})


let SeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let result = await Seeker.find({_id : obj.id});
            res.send(result);
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

let EditSeekerProfile = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Seeker.updateMany({_id : id}, req.body);
            res.send({success:true});
        }else{
            res.send({success:false});
        }
    }
    else{
        res.send({success:false});
    }
}

const updatePass = async(req, res)=>{
    if(req.headers.authorization){

        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if(obj){
            let id = obj.id;
            let result = await Seeker.find({_id : id });
            if(result[0].password == sha1(req.body.password)){
                await Seeker.updateMany({_id : id}, {password : sha1(req.body.newpass)});
                res.send({success:true, errType : 1})

            }else{
                res.send({success:false, errType : 1})
            }
        }else{

        }

    }else{
        res.send({success:false});
    }
}

let getOtp = async(req, res)=>{
    let username = req.body.username;
    let result = await Seeker.find({email:username});
    
    if(result.length == 1){
        
        let otp = rand(6, {letters: false});

        let mailOpt = {
            from : "james.steppingstone@gmail.com",
            to : "james.steppingstone@gmail.com",
            subject : "OTP for Reset Password",
            html : `<style>
  
  .container { width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; }
  .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eee; }
  .logo { width: 100px; }
  .content { padding: 20px; }
  .otp { text-align: center; font-size: 24px; font-weight: bold; }
  .footer { text-align: center; font-size: 0.8em; color: #777; padding-top: 20px; }
  </style>
  <div class="container">
    <div class="header">
      <img src="your-logo.png" alt="Your Logo" class="logo">
      <h1>OTP Verification</h1>
    </div>
    <div class="content">
      <p>Hi,</p>
      <p>To verify your account, please use the following One-Time Password ${otp}:</p>
      <div class="otp">
        <!-- Replace with the actual OTP -->
        ${otp}
      </div>
      <p>This OTP is valid for 5 minutes. If you did not request this verification, please ignore this email.</p>
      <p>Thank you,</p>
      <p>The Study-Hive Team</p>
    </div>
    <div class="footer">
      &copy; 2025 Your Company. All rights reserved.
    </div>`
        }

        transporter.sendMail(mailOpt, async(err, info)=>{
            if(err){
                console.log("---------", err)
            }
            else{
                console.log(info);
            }
        })

    }else{
        res.send({success:false});
    }
}

export {SeekerProfile,getOtp, EditSeekerProfile, updatePass}