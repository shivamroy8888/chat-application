import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import gtokenscookies from "../utils/generateToken.js"
export const signup = async (req,res)=>{
try {
    const {fullname,username,password, confirmpassword, gender} = req.body;

    if(password !== confirmpassword){
        return res.status(400).send({error:"Passwords do not match"})
    }
    // res.send("signup Route")
    const user = await User.findOne({username})

    if(user){
        return res.status(400).send({error:"Username already taken"})

    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    //https://api.dicebear.com/7.x/lorelei/svg

//https://api.dicebear.com/7.x/lorelei/svg?flip=true     receive
//https://api.dicebear.com/7.x/lorelei/svg?flip=false     send

//    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}'
const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

const newUser = new User({
    fullname,
    username,
    password:hashedpassword,
    // confirmpassword,
    gender,
    profilepic: gender === 'male' ? boyprofilepic : girlprofilepic
})


if(newUser){
    // generate JWT token here

    gtokenscookies(newUser._id, res)


 
    await newUser.save()
    res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        fullname: newUser.fullname,
        gender: newUser.gender,
        profilepic: newUser.profilepic
    })
}else{
    res.status(500).send({error:"Something went wrong"})
}

} catch (error) {
    console.log(error.message)
    res.status(500).send({error:error.message})
}
};

export const login = (req,res)=>{
    res.send("Login Route")
};

export const logout = (req,res)=>{
    res.send("Logout Route")
};