import type { PageServerLoad } from "./$types";

export const load = (async ({ parent,params }) => {
    const data = await parent()
    return { productDetail: data.products.items.find(product => product.slug === params.productDetail) }
}) satisfies PageServerLoad;