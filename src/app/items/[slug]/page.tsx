"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useParams, useSearchParams } from "next/navigation";
import ItemInfo from "./components/ItemInfo/ItemInfo";
import SellerInfo from "./components/SellerInfo/SellerInfo";
import SimilarItems from "./components/SimilarItems/SimilarItems";

const ItemDetailPage = () => {
    const { slug } = useParams() as { slug: string };
    const searchParams = useSearchParams();
    
    const image = searchParams.get('image') || '';
    const itemName = searchParams.get('itemName') || '';
    const lender = searchParams.get('lender') || '';
    const place = searchParams.get('place') || '';
    const oldPrice = parseFloat(searchParams.get('oldPrice') || '0');
    const currentPrice = parseFloat(searchParams.get('currentPrice') || '0');
    const duration = searchParams.get('duration') || '';
    const rating = parseFloat(searchParams.get('rating') || '0');

    return (
         <main className="bg-[#040312]">
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-[75%]">
                    <ItemInfo />
                    <SellerInfo lender={lender} place={place} rating={rating} />
                    <SimilarItems lender={lender} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
         </main>
    );
};

export default ItemDetailPage;