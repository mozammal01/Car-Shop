import background from "@/../public/explore/background.jpg"
export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return(
  <div style={{ backgroundImage: `url(${background.src})` }} className="bg-cover bg-center h-[400px] pt-28 ">  
    <div className="">{children}</div>
  </div>
)}
