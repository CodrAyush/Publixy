'use client';
import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { Input } from "@/components/ui/input"
import { createBlog } from "./actions";
import { useOrganization} from "@clerk/nextjs";

export default function OrgLandingPage() {
    const [blogContent, setBlogContent] = React.useState('');
    const [blogTitle, setBlogTitle] = React.useState('');

    const selectedOrg=useOrganization();

    const handleCreateBlog=async()=>{
        if(!selectedOrg.organization?.id) return;
       await createBlog({
        body:blogContent.trim(),
        orgId:selectedOrg.organization?.id,
        title:blogTitle,
       })
    }
    return (
        <main>
            <Nav />
            <div className="p-5">
                <Input className="mb-3"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Title" />

                <Textarea placeholder="Write your blog here..." 
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}/>

                <Button className="mt-5">Create Blog</Button>
            </div>
        </main>
    );
}