import {  extendType,nonNull,objectType,stringArg  } from "nexus";
//import { Context } from "../types/context";
import argon2 from "argon2";
import { User } from "../entities/user";
import * as jwt from 'jsonwebtoken'
//import { Context } from "src/types/context";



export const AuthType = objectType({
    name:"AuthType",
    definition(t){
        t.nonNull.string("token"),
        t.nonNull.field("user",{
            type:"User",
        })
    }
})

export const AuthMutation = extendType
({
    type:"Mutation",
    definition(t)
    {
        t.nonNull.field("login",{
            type:"AuthType",
            args:{username:nonNull(stringArg()),password:nonNull(stringArg())},
            async resolve(_parent,args,_info){
                const {username,password}=args;
                const user = await User.findOne({where:{username}});
                if(!user){
                    throw new Error("User not found")
                }
                const isValid =await argon2.verify(user.password,password)
                if(!isValid){
                    throw new Error("Invalid creds.")
                }
                const token = jwt.sign({userId:user.id},
                    process.env.TOKEN_SECRET as jwt.Secret)

                    return {token,user}
            }
        

        })
    
    }
})
     
//     t.nonNull.field("register",{
//     type:"AuthType",
//     args:{
//         username:nonNull(stringArg()),
//         email:nonNull(stringArg()),
//         password:nonNull(stringArg()),
//         },

    
//     async resolve(_parent,args,_context:Context,_info){
//     console.log(_context);
//     const {username,email,password} = args;
    
//     const hashedPassword = await argon2.hash(password);
//     let user;
//     let token;
//     try{
//     const result = await _context.conn

//    .createQueryBuilder()
//    .insert()
//    .into(User)
//    .values({username,email,password:hashedPassword})
//    .returning("*")
//    .execute();
   
//    user = result.raw[0]
//    //console.log(result)
// token = await jwt.sign({userId: user.id},process.env.TOKEN_SECRET as jwt.Secret)
//                 }catch(err){
//                     console.log(err);
//                 }
//                 return {
//                     user,
//                     token
//                 }
//             }
//         })
//     }
// })

