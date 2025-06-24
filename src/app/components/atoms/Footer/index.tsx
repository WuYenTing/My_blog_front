import Link from "next/link";
import React from "react";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
    return (
            <div className="flex flex-col space-y-4 py-4 bg-emerald-950">
        <div className="flex justify-center space-x-2">
          <Link href="https://medium.com/@tanloiit2010/part-1-develop-a-post-list-api-using-phoenix-framework-and-elixir-430836d7c0e3" className="flex items-center space-x-2 text-emerald-50/50 hover:text-gray-100/80">
            <p>Inspire From Loi Le</p>
            <LinkIcon className="block h-5 w-7 border-1 rounded-md"></LinkIcon>
          </Link>
          <Link href="https://github.com/WuYenTing/My_blog_front" className="flex items-center space-x-1 text-emerald-50/50 hover:text-gray-100/80">
            <p>Front-end</p>
            <CodeBracketIcon className="block h-5 w-7 border-1 rounded-md"></CodeBracketIcon>
          </Link>
          <Link href="https://github.com/WuYenTing/My_blog" className="flex items-center space-x-1 text-emerald-50/50 hover:text-gray-100/80">
            <p>Back-end</p>
            <CodeBracketIcon className="block h-5 w-7 border-1 rounded-md"></CodeBracketIcon>
          </Link>
        </div>
        <div className="flex justify-center text-gray-200/60 space-x-2">
            <p>@2025 Roger, All rights reserved.</p>
            <div className="flex justify-center space-x-4 text-sm text-emerald-50/50">
            </div>
        </div>
      </div>
    )
    
}

export default Footer;