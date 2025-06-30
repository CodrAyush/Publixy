'use client';
import * as React from "react";
import { UserButton } from "@clerk/nextjs";
import {OrganizationSwitcher} from "@clerk/nextjs";
const Nav:React.FC = () => {
    return (<nav className="flex justify-between items-center p-5 ">
        <div>
            <h1 className="text-2xl font-bold">Blog Application</h1>
        </div>
        <div className="flex items-center gap-4">
            <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
            <UserButton />
        </div>
    </nav>)
        
    
}

export default Nav;