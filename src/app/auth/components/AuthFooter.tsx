import FacebookIcon from "@/components/ui/svgs/FacebookIcon";
import LinkedinIcon from "@/components/ui/svgs/LinkedinIcon";
import TwitterIcon from "@/components/ui/svgs/TwitterIcon";
import InstaIcon from "@/components/ui/svgs/InstaIcon";
import Link from "next/link";

export default function AuthFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 pl-8 pr-20">
      <div className="flex justify-between items-center">
        <div className="flex space-x-8">
          <Link
            href="/about"
            className="text-[#718096]  hover:text-green-600 transition-colors duration-200 text-base font-medium leading-[165%] tracking-[-0.03em]"
          >
            About BIOTA
          </Link>
          <Link
            href="/terms"
            className="text-[#718096] hover:text-green-600 transition-colors duration-200 text-base font-medium leading-[165%] tracking-[-0.03em]"
          >
            T&C
          </Link>
          <Link
            href="/blog"
            className="text-[#718096] hover:text-green-600 transition-colors duration-200 text-base font-medium leading-[165%] tracking-[-0.03em]"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-[#718096] hover:text-green-600 transition-colors duration-200 text-base font-medium leading-[165%] tracking-[-0.03em]"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors duration-200"
          >
          <FacebookIcon />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors duration-200"
          >
           <TwitterIcon />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors duration-200"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 object transition-colors duration-200"
          >
           <InstaIcon className="text-gray-400 hover:text-green-600 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}