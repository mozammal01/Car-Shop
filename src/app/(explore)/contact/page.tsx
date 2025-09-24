import Contact from "@/components/contact/Contact";


export default function ContactPage() {
  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h2 className="md:text-6xl text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl font-semibold">Get in touch with us</p>
      </div>
      <div className="container mx-auto p-4 ">
        <Contact />
      </div>
    </>
  );
}
