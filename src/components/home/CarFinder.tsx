import ExploreArrow from "../exploreArrow/ExploreArrow";
import Category from "../category/category";

export default function CarFinder() {
  return (
    <div className="max-w-[1500px] mx-auto px-4 my-20 mb-40">
      <div className="flex items-center justify-between">
        <h1 className="md:text-5xl text-3xl font-bold">Shop Box Car Your Way</h1>
        <ExploreArrow text="View More" />
      </div>
      <Category category1="New Cars For Sale" category2="Used Cars For Sale" category3="Browse By Type" category4="Browse By Brand" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/*  */}
        <ul className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2">
          <li>Ford Cars</li>
          <li>Honda Cars</li>
          <li>Hyundai Cars</li>
          <li>Infiniti Cars</li>
          <li>Jaguar Cars</li>
          <li>Jeep Cars</li>
        </ul>
        {/*  */}
        <ul className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2">
          <li>SUV</li>
          <li>Sedan</li>
          <li>Hatchback</li>
          <li>Coupe</li>
          <li>Hybrid</li>
          <li>Electric</li>
        </ul>
        {/*  */}
        <ul className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2">
          <li>Toyota Cars</li>
          <li>Volkswagen Cars</li>
          <li>Volvo Cars</li>
          <li>Mazda Cars</li>
          <li>Mercedes-Benz Cars</li>
          <li>BMW Cars</li>
        </ul>
        {/*  */}
        <ul className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2">
          <li>Abarth Cars</li>
          <li>Romeo Cars</li>
          <li>Audi Cars</li>
          <li>Bentley Cars</li>
          <li>BMW Cars</li>
          <li>Chevrolet Cars</li>
        </ul>
        {/*  */}
        <ul className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2">
          <li>Mini Cars</li>
          <li>Mitsubishi Cars</li>
          <li>Nissan Cars</li>
          <li>Peugeot Cars</li>
          <li>Porsche Cars</li>
          <li>Renault Cars</li>
        </ul>
      </div>
    </div>
  );
}
