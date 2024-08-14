<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cartItems } from '$lib/runes/global.svelte';
	import { HOST_URL } from '$lib';

	function overlay_click(e: any) {
		if ('close' in e.target.dataset) show = false;
	}
	let { show = $bindable(false) } = $props<{ show: boolean }>();
	const cartItem = cartItems();
</script>

{#if show}
	<div
		class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm no-scrollbar"
		data-close
		onclick={overlay_click}
		transition:fade={{ duration: 150 }}
	>
		<div
			class="absolute inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
			transition:fly={{ x: 500, duration: 200 }}
		>
			<div class="h-4 w-4 absolute right-4 top-4 cursor-pointer" onclick={() => (show = false)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-x"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path
						d="M6 6l12 12"
					/></svg
				>
			</div>
			<div class="w-full theme-light p-4 h-screen">
				<div class="realative flex flex-col h-full items-center">
					<div class="w-full flex-none"><p class="border-b pb-4">Giỏ hàng</p></div>
					{#if cartItem.cartProducts.length == 0}
						<div class="flex justify-center items-center flex-col space-y-4 mt-4">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-shopping-basket w-16 h-16"
									><path d="m15 11-1 9" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path
										d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
									/><path d="M4.5 15.5h15" /><path d="m5 11 4-7" /><path d="m9 11 1 9" /></svg
								>
							</div>
							<p class="text-2xl font-semibold">Chưa có sản phẩm nào</p>
							<a href="/san-pham" class="button button-primary" onclick={() => (show = false)}
								><span>Tiếp tục mua sắm</span><svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-shopping-bag"
									><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path
										d="M3 6h18"
									/><path d="M16 10a4 4 0 0 1-8 0" /></svg
								></a
							>
						</div>
					{:else}
						<div class="flex flex-auto flex-col overflow-y-auto inset-0 lm-scrollbar w-full">
							<div class=" mt-4">
								<ul>
									{#each cartItem.cartProducts as cartProduct}
										<li
											class="border-b border-gray-200 py-4 flex max-md:flex-col justify-between gap-x-20"
										>
											<div class="flex gap-x-4">
												<img
													src="{HOST_URL}/api/files/{cartProduct.product
														.collectionName}/{cartProduct.product.id}/{cartProduct.product
														.product_image[0]}"
													alt={cartProduct.product.name}
													width="800"
													height="800"
													class="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0"
												/>
												<div class="flex flex-col">
													<div class="flex flex-col mb-4">
														<h3 class="font-serif text-xl text-eerie w-full">
															{cartProduct.product.name}
														</h3>
														<span class="text-sm text-storm">{cartProduct.variationOption}</span>
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
															class="text-storm p-3 {cartProduct.quantity > 1
																? 'cursor-pointer'
																: 'cursor-default !text-gray-200'} active:text-gray-900"
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
														<span
															class="absolute"
															id="cart_quantity_goodnature-hooded-pullover-sweatshirt"
															>{cartProduct.quantity}</span
														> <label for="Add quantity" class="sr-only">Add quantity</label>
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
												</div>
											</div>
											<div class="flex justify-between max-md:mt-4 xs:gap-x-4 xl:gap-x-20">
												<div
													class="flex flex-col justify-between text-charcoal items-end text-right w-32"
												>
													<div id="cart_price_goodnature-hooded-pullover-sweatshirt">
														<span class="text-sm text-gray-300">{cartProduct.quantity} x </span>
														{cartProduct.price.toLocaleString('vi-VN', {
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
						</div>
						<div class="flex-none flex-col py-4 w-full">
							<div class="flex items-center justify-between">
								<h3 class="title text-2xl font-semibold">Tổng:</h3>
								<span class="title !text-berry font-semibold"
									>{cartItem.cartStats.subtotal.toLocaleString('vi-VN', {
										style: 'currency',
										currency: 'VND'
									})}</span
								>
							</div>
							<div>
								<div class="flex max-xs:flex-col flex-wrap mt-4">
									<a
										href="/cart"
										class="relative z-10 button button-secondary py-3 px-6 text-xs w-full"
										onclick={() => (show = false)}>Giỏ hàng</a
									>
								</div>
								<div class="mt-4 flex justify-start flex-wrap gap-6">
									<a
										href="/checkout"
										class="button button-primary w-full"
										onclick={() => (show = false)}
										><span>Thanh toán</span>
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
