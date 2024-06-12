// src/fetch/producto/fetchProductDetail.ts
export const fetchProductDetail = async (id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const response = await fetch(`${apiUrl}/products/${id}`, {
      cache: "no-cache",
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch product detail");
    }
  
    const productDetail = await response.json();
    return productDetail;
  };
  