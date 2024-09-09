import User from "../models/User.model.js";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";
export const signupUser=async(req,res)=>{
    try {
        const {userName,email,password}=req.body
        console.log(userName);
        const user=await User.findOne({email}) 
        if (user) {
            return res.status(400).json({
                message:"User already exist"
            })

            
        } 
        const hashedPassword=await bcrypt.hash(password,10)
        const createUser=new User({
            userName,
            password:hashedPassword,
            email
        })
        await createUser.save() 
        res.status(200).json({
            success:true,
            user:{
                _id:createUser._id,
                userName:createUser.userName,
                email:createUser.email
            }
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
        
    }

}
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: "User not found"
        });
      }
  
      // Check password match
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid Password"
        });
      }
  
      // Generate JWT token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);
      const options = { 
        expires: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000), 
        httpOnly: true 
      };
  
      // Send response with cookie
      return res.status(200).cookie('token', token, options).json({
        success: true,
        user: {
          _id: user._id,
          userName: user.userName,
          email: user.email
        }
      });
  
    } catch (error) {
      // Handle server error
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  