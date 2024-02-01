export interface Product {
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
}[];