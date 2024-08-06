<script>
	import { cartItems } from "$lib/runes/global.svelte";

const cartItem = cartItems()
cartItem.emptyCart()
</script>
<main>
    <section class="theme-light flex items-center justify-center min-h-screen">
        <div class="2xl:container p-2 flex flex-col space-y-4 items-center justify-center mx-auto">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#22c55e" stroke="#f3efe9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-40 h-40"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h1 class="text-eerie text-2xl title text-center">Cảm ơn bạn đã mua hàng tại lemyfinest.com!</h1>
            <p class="text-center">Chúng tôi sẽ cập nhật tiến độ giao hàng qua email. Chúc bạn ngày mới tốt lành.</p>
            <a href="/products" class="button button-primary"
                                    >Tìm hiểu thêm các sảm phẩm khác
                                    <svg
                                        class="icon icon w-4 h-4"
                                        viewBox="0 0 512 512"
                                        focusable="false"
                                        id="icon_arrow-right-long"
                                        role="img"
                                        aria-hidden="true"
                                        aria-label="icon_arrow-right-long"
                                        xmlns="http://www.w3.org/2000/svg"
                                        ><path
                                            d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"
                                        ></path></svg
                                    ></a
                                >
        </div>

    </section>
</main>