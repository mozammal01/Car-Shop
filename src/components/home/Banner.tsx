import bannerImg from "@/../public/banner/background.jpg";


export default function Banner() {
  return (
    <div style={{ backgroundImage: `url(${bannerImg.src})` }} className="w-full h-screen bg-cover bg-center -mt-28">
    </div>
  );
}