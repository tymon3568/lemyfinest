import { pb } from "$lib";
import type { LayoutServerLoad } from "./$types";

export const load = ( async () => {
    // const records = await pb.collection('product').getFullList({
    //     sort: '-created',
    // });
    const productDetail = await pb.collection('product').getList(1,50,{
        sort: '-created',
        expand: "category_id.variation_via_category_id.variation_option_via_variation_id, product_items_via_product_id.product_config_via_product_items_id"
    })
    // const view_products = await pb.collection('view_products').getFullList({
    //     sort: '-updated',
    // })
    return { products: productDetail };
}) satisfies LayoutServerLoad;