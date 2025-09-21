import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import AppleIcon from "../icons/appleIcon";
import GooglePlayIcon from "../icons/googlePlayIcon";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import UpArrow from "../icons/upArrowIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#050B20] py-10 px-4 text-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between my-10 px-4">
          <div>
            <h4 className="text-2xl font-semibold">Join CarHut</h4>
            <p className="">Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className="relative">
            <Input type="email" placeholder="Enter your email" className="bg-[#ffffff23] border-none rounded-full px-8 py-8 md:w-sm" />
            <Button className="rounded-full absolute right-8 top-1/2 -translate-y-1/2">Sign Up</Button>
          </div>
        </div>
        {/*  */}
        <div className="border-t-1 border-y-[#ffffff15] py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/*  */}
            <div>
              <h4 className="text-xl font-semibold">Company</h4>
              <ul className="space-y-4 my-6">
                <li>About Us</li>
                <li>Blogs</li>
                <li>FAQ</li>
                <li>Services</li>
                <li>Terms</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <ul className="space-y-4 my-6">
                <li>Home</li>
                <li>Blogs</li>
                <li>FAQ</li>
                <li>Services</li>
                <li>Terms</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h4 className="text-xl font-semibold">Our Brands</h4>
              <ul className="space-y-4 my-6">
                <li>About Us</li>
                <li>Blogs</li>
                <li>FAQ</li>
                <li>Services</li>
                <li>Terms</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h4 className="text-xl font-semibold">Vehicles Types</h4>
              <ul className="space-y-4 my-6">
                <li>About Us</li>
                <li>Blogs</li>
                <li>FAQ</li>
                <li>Services</li>
                <li>Terms</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/*  */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Our Mobile App</h4>
              <div className="bg-[#ffffff1f] rounded-xl p-4 w-[198px] h-[60px] flex items-center gap-4">
                <AppleIcon size={24} />
                <div className="flex flex-col items-start">
                  <span className="text-sm">Download on the</span>
                  <span className="text-md font-semibold">Apple store</span>
                </div>
              </div>
              <div className="bg-[#ffffff1f] rounded-xl p-4 w-[198px] h-[60px] flex items-center gap-4">
                <GooglePlayIcon size={24} />
                <div className="flex flex-col items-start">
                  <span className="text-sm">Download on the</span>
                  <span className="text-md font-semibold">Google play</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold">Connect With Us</h4>
              <div className="flex items-center gap-8 py-4">
                <FacebookIcon size={20} />
                <TwitterIcon size={20} />
                <InstagramIcon size={20} />
                <LinkedinIcon size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-y-[#ffffff15] pt-4">
        <div className="container mx-auto flex md:flex-row flex-col gap-4 md:justify-between md:items-center">
          <p>© 2025 exemple.com. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Privacy Policy</p>
            <span className="size-1 bg-white rounded-full"></span>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
      <Link href="#top">
        <div className="absolute bottom-10 right-10 bg-primary rounded-full p-2">
          <UpArrow size={14} />
        </div>
      </Link>
    </div>
  );
}
