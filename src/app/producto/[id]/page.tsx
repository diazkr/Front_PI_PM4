import Detail from "@/components/productos/Detail";
import React from "react";

interface DetailPageProps {
    params: {
      id: string;
    };
  }

export const fetchProductDetail = async (id:string) =>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/products/${id}`,{
        cache: "no-cache",
    });

    const productDetail = await response.json();
    console.log(productDetail)
    return productDetail;
}

const DetailPage: React.FC<DetailPageProps> =async({params})=>{

    const {id, name, description, price, imgUrl, rate, stock, category } = await fetchProductDetail(params.id);
    return <div className="mt-12">

        <Detail id = {id} name={name} description={description} price={price} imgUrl={imgUrl} rate={rate} stock={stock} category={category}></Detail>
        
    </div>

}

export default DetailPage;