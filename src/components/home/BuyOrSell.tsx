import BuyOrSellCard from "../card/BuyOrSellCard";

export default function BuyOrSell() {
  return (
    <div className="max-w-[1500px] mx-auto px-4 my-20 mb-40">
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
