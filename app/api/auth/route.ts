import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server"

const prisma =new PrismaClient()

export async function POST(req:Request){
    const {
        email,
        name,
        password,
        organizations,
    }=await req.json()
    const hashedPassword=await bcrypt.hash(password,10)
    try {
    
        
        return NextResponse.json({message:"User created successfully"})
    } catch (error) {
        return new NextResponse("Internal Error",{status:500})
    }
}