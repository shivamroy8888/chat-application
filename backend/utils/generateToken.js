import jwt from "jsonwebtoken"

const gtokenscookies = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })
    res.cookie("jwt",token,{
        // expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
        // httpOnly: true
        maxAge: 60 * 60 * 24 * 1000, 
        secure: true,
        httpOnly: true, // prevent attacker from xssing
        sameSite: "strict"
    })

}

export default gtokenscookies;