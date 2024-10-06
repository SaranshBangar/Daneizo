"use client";

import Head from "next/head"; 
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useParams, useSearchParams } from "next/navigation";
import ItemInfo from "./components/ItemInfo/ItemInfo";
import SellerInfo from "./components/SellerInfo/SellerInfo";
import SimilarItems from "./components/SimilarItems/SimilarItems";
import { useEffect } from "react";

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

    
    const pageTitle = itemName ? `${itemName} | Daneizo` : "Item Details | Daneizo"; 

    useEffect(() => {
        document.title = pageTitle; 
    }, [pageTitle]); 

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main className="bg-[#040312] min-h-screen">
                <Navbar />
                <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
                    <div className="w-full md:w-11/12 lg:w-10/12 xl:w-3/4">
                        <ItemInfo />
                        <SellerInfo lender={lender} place={place} rating={rating} />
                        <SimilarItems lender={lender} />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default ItemDetailPage;
