"use client"

import { useParams } from "next/navigation";

const ItemDetailPage = () => {
    const { slug } = useParams() as { slug: string };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Item : {slug}</h1>
        </div>
    );
};

export default ItemDetailPage;
