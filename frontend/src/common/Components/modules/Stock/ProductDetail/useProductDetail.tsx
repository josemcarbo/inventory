import { Product } from "@/common/Api/stockApi";
import { transformProduct } from "@/common/utils";

export default function useProductDetail(props: {item: Product | null | undefined}) {
    return {
        product: transformProduct(props.item as Product)
    }
}