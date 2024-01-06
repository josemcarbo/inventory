import { Product } from "./Api/stockApi";

export const transformProduct = (product: Product) => {
    return {
        ...product,
        cost: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.cost),
        price: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.cost),
    }
}