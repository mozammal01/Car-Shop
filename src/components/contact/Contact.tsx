import amyWalker from "@/../public/vehicles/author/author.jpg";
import { Facebook, MapPinIcon, InstagramIcon, MailIcon, PhoneIcon, FacebookIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div>
      <h4 className="text-2xl font-bold uppercase mb-8">Contacts</h4>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-8 gap-4 my-10">
        <div className="xl:col-span-2 col-span-1">
          <Image src={amyWalker} alt="Amy Walker" width={300} height={300} className="rounded-md" />
        </div>
        {/*  */}
        <div className="xl:col-span-4 col-span-2 p-4">
          <div className="flex flex-col gap-2 font-semibold uppercase mb-4">
            <h4 className="text-2xl font-bold">Amy Walker </h4>
            <span>View My Office</span>
            <span className="bg-white rounded px-4 py-1 w-fit">Free Agent</span>
          </div>
          <div className="flex flex-col gap-4 text-gray-500 font-semibold">
            <span>Fluet in English, spanish</span>
            <span>
              Quisque eu euismod ex, sed porttitor orci. Donec sit amet dolor nulla. Cras scelerisque egestas orci, sit amet rutrum sapien
              eleifend nec. Morbi non lacinia orci, et vulputate eros. Nunc rhoncus nunc volutpat, consequat enim eu.
            </span>
            <span>+1234567890</span>
            <span>+1234567891</span>
            <span>+1234567892</span>
            <span>123 Main St, Anytown, USA</span>
            <div className="flex gap-2 mt-4 text-black">
              <div className="bg-white rounded p-2 w-fit hover:text-primary">
                <MailIcon size={16} />
              </div>
              <div className="bg-white rounded p-2 w-fit hover:text-primary">
                <InstagramIcon size={16} />
              </div>
              <div className="bg-white rounded p-2 w-fit hover:text-primary">
                <FacebookIcon size={16} />
              </div>
              <div className="bg-white rounded p-2 w-fit hover:text-primary">
                <TwitterIcon size={16} />
              </div>
              <div className="bg-white rounded p-2 w-fit hover:text-primary">
                <PhoneIcon size={16} />
              </div>
              <div className="bg-white rounded p-2 w-fit hover:text-primary">
                <MapPinIcon size={16} />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="xl:col-span-2 col-span-1">
          <ContactForm />
          {/* <ContactForm contactName="Amy Walker" /> */}
        </div>
      </div>
    </div>
  );
}
