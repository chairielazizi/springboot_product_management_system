// export const API_URL = "http://localhost:8080";
export const API_URL =
  "https://product-management-system-backend-rrvu.onrender.com";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
