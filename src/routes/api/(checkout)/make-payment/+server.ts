import { VITE_PAYOS_API_KEY, VITE_PAYOS_CHECKSUM_KEY, VITE_PAYOS_CLIENT_ID } from "$env/static/private";
import { MAIN_URL, pb } from "$lib";
import PayOS from "@payos/node";
import { redirect } from "@sveltejs/kit";

const payOS = new PayOS(
    VITE_PAYOS_CLIENT_ID,
    VITE_PAYOS_API_KEY,
    VITE_PAYOS_CHECKSUM_KEY
);

export const POST =  async ({ request }) => {
    const body = await request.json();
    const {customerInfo} = body
    const pbCustomer = {
        "name": customerInfo.name,
        "address": customerInfo.address,
        "phone": customerInfo.phone,
        "email": customerInfo.email
    };
    const addCustomer = async () => {
        try {
           return await pb.collection('customers').create(pbCustomer);
        } catch (error) {
           return await pb.collection('customers').getFirstListItem(`phone = "${customerInfo.phone}"`); 
        }
    }
    const addedCustomer = await addCustomer();
    // console.log("🚀 ~ POST ~ addCustomer:", addedCustomer)
    const { orderInfo } = body
    // console.log("🚀 ~ POST ~ orderInfo:", orderInfo)
    // console.log("🚀 ~ POST ~ customerInfo:", customerInfo)
    let items = orderInfo.listProduct.map((item: CartItem) => {
        return {
            name: item.product.name + ' - ' + item.variationOption,
            quantity: item.quantity,
            price: item.price
        }
    })
    const newOrder = {
        "order_code": Number(String(Date.now()).slice(-6)),
        "customer_id": addedCustomer.id,
        "total_amount": orderInfo.totalPrice,
        "payment_method_id": "w8lij12ml0ui55j",
        "shipping_address": customerInfo.address,
        // "shipping_method": "RELATION_RECORD_ID",
        "order_items": items,
        "status": "0mlkiw8o83jj10e"
    };
    
    const newAddedOrder = await pb.collection('order').create(newOrder);
    const order = {
        // orderCode: Number(String(Date.now()).slice(-6)),
        orderCode: newAddedOrder.order_code,
        amount: orderInfo.totalPrice,
        description: "mua tinh dau",
        items: items,
        returnUrl: `${MAIN_URL}?success=true`,
        cancelUrl: `${MAIN_URL}/support`,
      };
    
    const paymentLink = await payOS.createPaymentLink(order);
    return new Response(JSON.stringify({url: paymentLink.checkoutUrl}), {
        status: 200
    })
}   
