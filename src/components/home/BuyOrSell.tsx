import BuyOrSellCard from "../card/BuyOrSellCard";

export default function BuyOrSell() {
  return (
    <div className="container bg-white mx-auto px-4 mb-20 rounded-b-[90px]">
      <div className="xl:flex items-center justify-between">
        <BuyOrSellCard
          title="Are You Looking For a Car ?"
          description="We are committed to providing our customers with exceptional service."
          buy={true}
        />
        <BuyOrSellCard
          title="Are You Looking For a Car ?"
          description="We are committed to providing our customers with exceptional service."
          buy={false}
        />
      </div>
    </div>
  );
}
