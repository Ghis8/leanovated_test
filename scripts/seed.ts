import { userData } from "@/utils/dummyUserData";
import { PrismaClient } from "@prisma/client";

const database=new PrismaClient()

export async function main(){
    try {
        userData.map(async(d,i)=>{
            
            
        })
        
    } catch (error) {
        console.log("error->",error)
        return false
    }finally{
        database.$disconnect()
    }
}