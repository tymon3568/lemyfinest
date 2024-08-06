<script lang="ts">
	import { HOST_URL } from '$lib';
	import { cartItems } from '$lib/runes/global.svelte';

	const cartItem = cartItems();
</script>

<section class="section theme-light md:pt-36 max-lg:pt-36">
	{#if cartItem.cartProducts.length > 0}
		<div class="container grid lg:grid-cols-3 gap-y-4">
			<div class="flex justify-between items-end lg:col-span-2">
				<div class="flex gap-x-4 items-end">
					<h1 class="font-serif text-5xl text-eerie">Giỏ hàng</h1>
					<p class="mb-1 max-sm:hidden">{cartItem.cartStats.totalQuantity} sản phẩm</p>
				</div>
				<button onclick={() => cartItem.emptyCart()} type="button" class="text-charcoal"
					>Xóa hết</button
				>
			</div>
			<div class="bg-white p-8 lg:col-span-2">
				<ul>
					<li class="border-b py-4 flex max-md:flex-col justify-between gap-x-4">
						<div class="flex gap-x-4">
							<div class="flex flex-col">
								<div class="flex flex-col mb-4">
									<h3 class="font-serif text-xl text-eerie w-full max-w-[220px] font-semibold">
										Thông tin sản phẩm
									</h3>
								</div>
							</div>
						</div>
						<div class="flex justify-between max-md:mt-4 xs:gap-x-4 xl:gap-x-20">
							<div class="flex items-center justify-center gap-x-4 relative self-end md:self-start">
								<p class="text-eerie font-semibold">Giá</p>
							</div>
							<div class="flex items-center justify-center gap-x-4 relative self-end md:self-start">
								<p class="text-eerie font-semibold">Số lượng</p>
							</div>
							<div
								class="flex flex-col justify-between text-charcoal items-end text-right w-32 font-semibold"
							>
								<p>Tổng</p>
							</div>
						</div>
					</li>
					{#each cartItem.cartProducts as cartProduct, i}
						<li
							class="{cartItem.cartProducts.length === i + 1
								? ''
								: 'border-b border-gray-200'} py-4 flex max-md:flex-col justify-between gap-x-4"
						>
							<div class="flex gap-x-4">
								<img
									src="{HOST_URL}/api/files/{cartProduct.product.collectionName}/{cartProduct
										.product.id}/{cartProduct.product.product_image[0]}"
									alt={cartProduct.product.name}
									width="800"
									height="800"
									class="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0"
								/>
								<div class="flex flex-col">
									<div class="flex flex-col mb-4">
										<h3
											class="font-serif text-xl text-eerie w-full max-w-[220px]"
											id="cart_item_goodnature-hooded-pullover-sweatshirt"
										>
											{cartProduct.product.name}
										</h3>
										<span class="text-sm text-storm">{cartProduct.variationOption}</span>
										<p class="text-storm text-[12px] font-light max-w-sm"></p>
									</div>
								</div>
							</div>
							<div class="flex justify-between max-md:mt-4 xs:gap-x-4 xl:gap-x-20">
								<div
									class="flex items-center justify-center gap-x-4 relative self-end md:self-start"
								>
									<p class="text-eerie">
										{cartProduct.price.toLocaleString('vi-VN', {
											style: 'currency',
											currency: 'VND'
										})}
									</p>
								</div>
								<div
									class="flex items-center justify-center gap-x-4 border border-gray-200 relative self-end md:self-start"
								>
									<label for="Subtract quantity" class="sr-only">Subtract quantity</label>
									<button
										onclick={() => {
											if (cartProduct.quantity > 1) {
												cartItem.updateProductQuantity(cartProduct.SKU, -1);
											}
										}}
										type="button"
										name="Subtract quantity"
										class="text-storm p-3 active:text-gray-900 {cartProduct.quantity > 1
											? 'cursor-pointer'
											: 'cursor-default !text-gray-200'}"
										><svg
											class="icon w-3"
											viewBox="0 0 448 512"
											focusable="false"
											id="icon_minus"
											role="img"
											aria-hidden="true"
											aria-label="icon_minus"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M432 256c0 13.3-10.7 24-24 24L40 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l368 0c13.3 0 24 10.7 24 24z"
											></path></svg
										></button
									>
									<span class="absolute">{cartProduct.quantity}</span>
									<label for="Add quantity" class="sr-only">Add quantity</label>
									<button
										onclick={() => cartItem.updateProductQuantity(cartProduct.SKU, 1)}
										type="button"
										name="Add quantity"
										class="text-storm p-3 active:text-gray-900"
										><svg
											class="icon w-3"
											viewBox="0 0 448 512"
											focusable="false"
											id="icon_plus"
											role="img"
											aria-hidden="true"
											aria-label="icon_plus"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"
											></path></svg
										></button
									>
								</div>
								<div class="flex flex-col justify-between text-charcoal items-end text-right w-32">
									<div>
										{(cartProduct.price * cartProduct.quantity).toLocaleString('vi-VN', {
											style: 'currency',
											currency: 'VND'
										})}
									</div>
									<button
										onclick={() => cartItem.removeFromCart(cartProduct.SKU)}
										type="button"
										class="text-storm font-light text-sm">Xóa</button
									>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="bg-eerie p-8 text-white self-start theme-dark max-lg:mt-4 lg:ml-8">
				<h2 class="text-3xl font-serif">Thành tiền</h2>
				<dl class="mt-6 space-y-4">
					<div class="flex justify-between">
						<dt>Tổng tiền hàng</dt>
						<dd id="cartSubTotal">
							{cartItem.cartStats.subtotal.toLocaleString('vi-VN', {
								style: 'currency',
								currency: 'VND'
							})}
						</dd>
					</div>
					<div class="flex justify-between pt-4 border-t border-gray-200">
						<dt class="">Phí vận chuyển</dt>
						<dd class="">0 đ</dd>
					</div>
					<div class="flex justify-between pt-4 border-t border-gray-200">
						<dt class="font-medium">Tổng cộng</dt>
						<dd class="font-medium text-xl">
							{cartItem.cartStats.subtotal.toLocaleString('vi-VN', {
								style: 'currency',
								currency: 'VND'
							})}
						</dd>
					</div>
				</dl>
				<!-- <div class="flex justify-start gap-4 mt-10" style="">
						<button class="link">Bạn có mã giảm giá?</button>
						<div class="flex flex-col w-full gap-4">
							<input
								min="1"
								max="1000"
								class="w-[75%] text-center text-sm m-auto uppercase"
								placeholder="Nhập mã giảm giá"
								data-ddg-inputtype="unknown"
							/> <button class="button button-tertiary w-full">Áp dụng mã</button>
						</div>
					</div> -->
				<!-- <div class="text-sm mt-8 text-storm">
						Shipping &amp; Tax will be added in the next step.
					</div> -->
				<div class="flex flex-col gap-8">
					<a
						href="/checkout"
						type="button"
						id="proceed_to_checkout"
						class="button button-primary w-full justify-center mt-6"
						>Tính tiền
						<svg
							class="icon w-4 fill-light-green"
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
			</div>
		</div>
	{:else}
		<div class="container">
			<h1 class="title text-4xl max-md:hidden">Giỏ hàng</h1>
			<div
				class="bg-white py-36 sm:py-48 px-8 text-center mt-4 flex flex-col items-center justify-center"
			>
				<svg
					class="icon fill-gray-200 w-24 mb-8"
					viewBox="0 0 640 512"
					focusable="false"
					id="icon_cart-circle-plus"
					role="img"
					aria-hidden="true"
					aria-label="icon_cart-circle-plus"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4L538.8 197.2c-13.7-3.4-28.1-5.2-42.8-5.2c-68.4 0-127.7 39-156.8 96H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H322.9c-1.9 10.4-2.9 21.1-2.9 32c0 5.4 .2 10.7 .7 16h-121c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm512-96a144 144 0 1 1 -288 0 144 144 0 1 1 288 0zm-80 16c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H432c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48z"
					></path></svg
				>
				<h2 class="title text-2xl mb-2">Giỏ hàng của bạn đang trống.</h2>
				<p class="text-sm max-w-[240px] mb-6">
					… Bạn cần tư vấn thêm không? Hãy gọi hotline: 0949 743 369
				</p>
				<a href="/products" class="button button-primary"
					>Lựa sản phẩm
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
		</div>
	{/if}
</section>
