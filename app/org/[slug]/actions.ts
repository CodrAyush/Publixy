'use server'

import { CreateBlogType,blogsTable } from "@/db/schema";
import { db } from "@/db";


export const createBlog=async(payload:CreateBlogType)=>{
    const result=await db.insert(blogsTable).values(payload);
    return result;
}