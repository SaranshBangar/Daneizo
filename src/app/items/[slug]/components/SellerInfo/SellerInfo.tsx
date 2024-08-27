import { CircleCheckBig, Dot, MapPin, Star } from "lucide-react";

interface SellerInfoProps {
    lender : string;
    place : string;
    rating : number;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ lender, place, rating }) => {
  return (
    <section>
        <div className="flex flex-col justify-center items-start gap-3">
            <h2 className="font-outfit text-2xl text-white font-bold">About the seller</h2>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="h-fit rounded-[20px] bg-gradient-to-br from-[#8D8BD3]/20 to-[#433FD7]/20 py-[36px] pl-[37px] pr-[43px] flex flex-row justify-between w-[85%]">
                    <div>
                        <div className="flex flex-row justify-start items-center gap-[13px] text-white mb-[8px]">
                            <p className="font-outfit text-[25px] font-semibold">{lender}</p>
                            <div className="flex flex-row justify-center items-center gap-[4px]">
                                <CircleCheckBig className="size-[19px]" />
                                <p className="text-[16px] text-white/80 font-outfit font-semibold">Verified</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center text-white/80 mb-[11px]">
                            <MapPin className="h-[18px]" />
                            <p className="text-[16px] font-outfit font-semibold">{place}</p>
                        </div>
                        <div className="flex flex-row text-white/80 font-outfit font-semibold text-[16px] gap-[2px]">
                            <div>
                                <p>45 item(s) listed on site</p>
                            </div>
                            <Dot />
                            <div>
                                <p>Seller since 2019</p>
                            </div>
                            <Dot />
                            <div className="flex flex-row gap-2 items-center">
                                <p>{rating}</p>
                                <Star className="size-[18px]" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/110" alt="" className="rounded-full shadow-xl" />
                    </div>
                </div>
                <a href="/" className="cursor-pointer underline underline-offset-4 text-[#D9D9D9] font-outfit font-medium text-[20px]">Similar sellers...</a>
            </div>
        </div>
    </section>
  );
};

export default SellerInfo;
