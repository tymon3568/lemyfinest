<script lang="ts">
	import { page } from '$app/stores';
	import { cartItems } from '$lib/runes/global.svelte';

	const cartItem = cartItems();
	cartItem.emptyCart();
	const billingInfo = $page.data.updateOrderStatus;
</script>

<section class="theme-light flex items-center justify-center min-h-screen">
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="2xl:container p-2 flex flex-col space-y-4 items-center justify-center mx-auto">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="#22c55e"
					stroke="#f3efe9"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-circle-check w-40 h-40"
					><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg
				>
			</div>
			<h1 class="text-eerie text-2xl title text-center">
				Cảm ơn bạn đã mua hàng tại lemyfinest.com!
			</h1>
			<p class="text-center">
				Chúng tôi sẽ cập nhật tiến độ giao hàng qua email. Chúc bạn ngày mới tốt lành.
			</p>
			<a href="/san-pham" class="button button-primary"
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
		<div class="col-span-3 sm:col-span-1 theme-white mr-0 mt-0 py-0 pl-4 pr-12 pt-4 theme-white">
			<div class="pl-0 sm:pl-6 theme-white sticky top-5">
				<h3 class="text-2xl title text-eerie">Mã đơn hàng: {billingInfo.order_code}</h3>
				<div class="">
					<ul>
						{#each billingInfo.order_items as order}
							<li class="border-b border-gray-200 py-4 grid grid-cols-6 justify-between gap-x-6">
								<div class="flex gap-x-4 col-span-5">
									<div class="flex flex-col">
										<div class="flex flex-col">
											<h3 class="font-serif text-md text-eerie w-full max-w-[220px]">
												{order.name}
											</h3>
										</div>
									</div>
								</div>
								<div class="flex justify-between col-span-1">
									<div class="flex flex-col gap-2 w-full">
										<div
											class="flex flex-col justify-between text-charcoal items-end text-right text-sm"
										>
											<div>
												{order.price.toLocaleString('vi-VN', {
													style: 'currency',
													currency: 'VND'
												})}
											</div>
										</div>
										<div class="flex justify-end">
											<p class="text-sm">x {order.quantity}</p>
										</div>
									</div>
								</div>
							</li>
						{/each}
					</ul>
					<div class="theme-white">
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
						<div class="space-y-2 mt-12 text-sm mb-12">
							<div class="flex justify-between">
								<h4 class="text-storm">Tổng tiền hàng</h4>
								<h4 class="text-eerie" id="subTotalShown" aria-label="subTotalShown">
									{billingInfo.total_amount.toLocaleString('vi-VN', {
										style: 'currency',
										currency: 'VND'
									})}
								</h4>
							</div>
							<div class="flex justify-between">
								<h4 class="text-storm">Phí vận chuyển</h4>
								<h4 class="text-eerie" id="shippingTotalShown" aria-label="shippingTotalShown">
									0đ
								</h4>
							</div>
							<div class="flex justify-between">
								<h4 class="text-storm">Thuế</h4>
								<h4 class="text-eerie" id="taxShown" aria-label="taxShown">0đ</h4>
							</div>
							<div class="flex justify-between text-lg">
								<h4 class="text-eerie text-md font-medium">Tổng cộng</h4>
								<h4
									class="text-eerie font-medium"
									id="grandTotalShown"
									aria-label="grandTotalShown"
								>
									{billingInfo.total_amount.toLocaleString('vi-VN', {
										style: 'currency',
										currency: 'VND'
									})}
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
