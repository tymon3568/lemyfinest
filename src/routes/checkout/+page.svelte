<script lang="ts">
	import { HOST_URL, MAIN_URL } from '$lib';
	import { cartItems } from '$lib/runes/global.svelte';

	const cartItem = cartItems();
	const makePayment = async (e: any) => {
		e.preventDefault();
		const { email, name, phone, address, note } = e.target;
		const customerInfo = {
			email: email.value,
			name: name.value,
			phone: phone.value,
			address: address.value,
			note: note.value
		};
		const orderInfo = {
			listProduct: cartItem.cartProducts,
			totalQantity: cartItem.cartStats.totalQuantity,
			totalPrice: cartItem.cartStats.subtotal
		};
		const data = {
			customerInfo,
			orderInfo
		};
		const response = await fetch(`/api/make-payment`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
			body: JSON.stringify(data)
		});
		const { url } = await response.json();
		window.location.href = url;
		// console.log('url', url)

		// console.log('data', data)

		// console.log('response', response)

		// console.log('data', data)

		// console.log('response', response)
	};
</script>

<div class="theme-white py-0 theme-light">
	{#if cartItem.cartProducts.length > 0}
		<section class="max-w-[1200px] mx-auto grid grid-cols-3 gap-4 min-h-screen" style="">
			<div class="col-span-3 sm:col-span-2 flex flex-col mt-4 theme-light px-4">
				<header class="sm:mt-0 w-full flex justify-center mb-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						zoomAndPan="magnify"
						viewBox="0 0 375 187.499995"
						preserveAspectRatio="xMidYMid meet"
						class="h-10 w-auto sm:h-12 text-[#386641] transition-colors duration-150 ease-in-out"
						version="1.0"
						><defs><g /></defs><g fill="currentColor" fill-opacity="1"
							><g transform="translate(10.867279, 128.282903)"
								><g
									><path
										d="M 15.859375 -83.578125 L 16 -42.640625 C 16 -36.503906 16.304688 -31.3125 16.921875 -27.0625 C 17.535156 -22.8125 18.8125 -19.476562 20.75 -17.0625 C 22.6875 -14.65625 25.566406 -13.144531 29.390625 -12.53125 C 33.210938 -11.914062 38.289062 -12.175781 44.625 -13.3125 C 49.625 -14.257812 54.648438 -15.179688 59.703125 -16.078125 C 64.753906 -16.972656 69.03125 -17.421875 72.53125 -17.421875 C 75.457031 -17.328125 77.484375 -16.785156 78.609375 -15.796875 C 79.742188 -14.804688 80.738281 -12.75 81.59375 -9.625 L 84.140625 0 C 82.253906 -1.414062 79.703125 -2.238281 76.484375 -2.46875 C 73.273438 -2.707031 69.78125 -2.613281 66 -2.1875 C 62.226562 -1.769531 58.546875 -1.300781 54.953125 -0.78125 C 51.367188 -0.257812 48.207031 0 45.46875 0 C 41.789062 0 37.988281 -0.726562 34.0625 -2.1875 C 30.144531 -3.65625 26.582031 -5.828125 23.375 -8.703125 C 20.164062 -11.585938 17.707031 -15.15625 16 -19.40625 C 16 -16.195312 16 -12.960938 16 -9.703125 C 16 -6.441406 16 -3.207031 16 0 L 0 0 C 0 0 0.234375 -1.554688 0.703125 -4.671875 C 1.179688 -7.785156 1.421875 -11.421875 1.421875 -15.578125 L 1.421875 -83.578125 C 1.421875 -87.734375 1.179688 -91.367188 0.703125 -94.484375 C 0.234375 -97.597656 0 -99.15625 0 -99.15625 L 17.28125 -99.15625 C 17.28125 -99.15625 17.039062 -97.597656 16.5625 -94.484375 C 16.09375 -91.367188 15.859375 -87.734375 15.859375 -83.578125 Z M 15.859375 -83.578125 "
									/></g
								></g
							></g
						><g fill="currentColor" fill-opacity="1"
							><g transform="translate(107.891949, 128.282903)"
								><g
									><path
										d="M 60.203125 -24.796875 L 62.046875 -24.796875 C 61.097656 -20.066406 59.113281 -15.835938 56.09375 -12.109375 C 53.070312 -8.378906 49.390625 -5.425781 45.046875 -3.25 C 40.703125 -1.082031 36.023438 0 31.015625 0 C 25.347656 0 20.175781 -1.390625 15.5 -4.171875 C 10.832031 -6.960938 7.082031 -10.691406 4.25 -15.359375 C 1.414062 -20.035156 0 -25.253906 0 -31.015625 C 0 -36.773438 1.390625 -41.992188 4.171875 -46.671875 C 6.960938 -51.347656 10.71875 -55.078125 15.4375 -57.859375 C 20.15625 -60.648438 25.347656 -62.046875 31.015625 -62.046875 C 34.890625 -62.046875 38.523438 -61.382812 41.921875 -60.0625 C 45.328125 -58.738281 48.351562 -56.941406 51 -54.671875 C 53.164062 -52.878906 55.003906 -50.734375 56.515625 -48.234375 C 58.023438 -45.734375 58.878906 -43.066406 59.078125 -40.234375 C 59.546875 -35.703125 58.691406 -32.019531 56.515625 -29.1875 C 54.347656 -26.351562 51.421875 -24.414062 47.734375 -23.375 C 44.054688 -22.332031 40.234375 -22.144531 36.265625 -22.8125 C 31.640625 -23.5625 27.296875 -25.398438 23.234375 -28.328125 C 19.171875 -31.253906 15.722656 -34.65625 12.890625 -38.53125 C 12.035156 -39.757812 11.273438 -41.007812 10.609375 -42.28125 C 9.953125 -43.5625 9.390625 -44.910156 8.921875 -46.328125 C 8.078125 -42.640625 8.21875 -38.53125 9.34375 -34 C 10.476562 -29.46875 12.507812 -24.984375 15.4375 -20.546875 C 17.519531 -17.421875 20.09375 -14.75 23.15625 -12.53125 C 26.226562 -10.3125 29.535156 -8.773438 33.078125 -7.921875 C 36.617188 -7.078125 40.132812 -7.035156 43.625 -7.796875 C 47.6875 -8.640625 51.273438 -10.664062 54.390625 -13.875 C 57.515625 -17.09375 59.453125 -20.734375 60.203125 -24.796875 Z M 14.59375 -55.390625 C 12.695312 -54.066406 11.140625 -52.175781 9.921875 -49.71875 C 10.953125 -45.65625 12.601562 -42.179688 14.875 -39.296875 C 17.144531 -36.421875 19.882812 -34.085938 23.09375 -32.296875 C 27.34375 -29.929688 31.140625 -28.703125 34.484375 -28.609375 C 37.835938 -28.515625 40.578125 -29.269531 42.703125 -30.875 C 44.828125 -32.488281 46.21875 -34.566406 46.875 -37.109375 C 47.539062 -39.660156 47.304688 -42.398438 46.171875 -45.328125 C 45.046875 -48.253906 42.828125 -50.992188 39.515625 -53.546875 C 36.878906 -55.617188 34.023438 -57.007812 30.953125 -57.71875 C 27.878906 -58.425781 24.898438 -58.566406 22.015625 -58.140625 C 19.140625 -57.722656 16.664062 -56.804688 14.59375 -55.390625 Z M 14.59375 -55.390625 "
									/></g
								></g
							></g
						><g fill="currentColor" fill-opacity="1"
							><g transform="translate(182.253917, 128.282903)"
								><g
									><path
										d="M 13.734375 -15.578125 C 13.734375 -11.421875 13.96875 -7.785156 14.4375 -4.671875 C 14.914062 -1.554688 15.15625 0 15.15625 0 L 0 0 C 0 0 0.234375 -1.554688 0.703125 -4.671875 C 1.179688 -7.785156 1.421875 -11.421875 1.421875 -15.578125 L 1.421875 -46.328125 C 1.421875 -50.578125 1.179688 -54.257812 0.703125 -57.375 C 0.234375 -60.488281 0 -62.046875 0 -62.046875 L 13.734375 -62.046875 L 13.734375 -55.8125 C 17.328125 -57.414062 21.082031 -58.851562 25 -60.125 C 28.914062 -61.40625 32.71875 -62.046875 36.40625 -62.046875 C 40.46875 -62.046875 43.628906 -61.382812 45.890625 -60.0625 C 48.160156 -58.738281 49.816406 -56.894531 50.859375 -54.53125 C 54.722656 -56.425781 58.898438 -58.148438 63.390625 -59.703125 C 67.878906 -61.265625 72.203125 -62.046875 76.359375 -62.046875 C 80.796875 -62.046875 84.191406 -61.242188 86.546875 -59.640625 C 88.910156 -58.035156 90.539062 -55.769531 91.4375 -52.84375 C 92.332031 -49.914062 92.78125 -46.46875 92.78125 -42.5 L 92.78125 -15.578125 C 92.78125 -11.421875 93.015625 -7.785156 93.484375 -4.671875 C 93.960938 -1.554688 94.203125 0 94.203125 0 L 79.046875 0 C 79.046875 0 79.253906 -1.554688 79.671875 -4.671875 C 80.097656 -7.785156 80.3125 -11.421875 80.3125 -15.578125 L 80.3125 -42.78125 C 80.3125 -49.195312 78.894531 -53.796875 76.0625 -56.578125 C 73.226562 -59.367188 68.460938 -59.539062 61.765625 -57.09375 C 59.972656 -56.425781 58.222656 -55.710938 56.515625 -54.953125 C 54.816406 -54.203125 53.164062 -53.453125 51.5625 -52.703125 C 52.507812 -49.960938 52.984375 -46.5625 52.984375 -42.5 L 52.984375 -15.578125 C 52.984375 -11.421875 53.191406 -7.785156 53.609375 -4.671875 C 54.035156 -1.554688 54.25 0 54.25 0 L 39.09375 0 C 39.09375 0 39.328125 -1.554688 39.796875 -4.671875 C 40.273438 -7.785156 40.515625 -11.421875 40.515625 -15.578125 L 40.515625 -42.78125 C 40.515625 -49.195312 39.097656 -53.796875 36.265625 -56.578125 C 33.429688 -59.367188 28.660156 -59.539062 21.953125 -57.09375 C 19.304688 -56.144531 16.566406 -55.007812 13.734375 -53.6875 Z M 13.734375 -15.578125 "
									/></g
								></g
							></g
						><g fill="currentColor" fill-opacity="1"
							><g transform="translate(289.051871, 128.282903)"
								><g
									><path
										d="M 13.734375 -46.46875 L 13.734375 -19.265625 C 13.734375 -12.835938 15.171875 -8.253906 18.046875 -5.515625 C 20.929688 -2.785156 25.679688 -2.597656 32.296875 -4.953125 C 35.316406 -5.992188 38.242188 -7.195312 41.078125 -8.5625 C 43.910156 -9.9375 46.460938 -11.238281 48.734375 -12.46875 L 48.734375 -46.46875 C 48.734375 -50.625 48.492188 -54.257812 48.015625 -57.375 C 47.546875 -60.488281 47.3125 -62.046875 47.3125 -62.046875 L 62.46875 -62.046875 C 62.46875 -62.046875 62.253906 -60.488281 61.828125 -57.375 C 61.410156 -54.257812 61.203125 -50.625 61.203125 -46.46875 L 61.203125 6.09375 C 61.203125 9.300781 61.082031 12.414062 60.84375 15.4375 C 60.601562 18.457031 59.820312 21.289062 58.5 23.9375 C 57.175781 26.582031 54.957031 29.039062 51.84375 31.3125 C 49.007812 33.382812 45.773438 34.867188 42.140625 35.765625 C 38.503906 36.660156 34.65625 37.109375 30.59375 37.109375 C 27.664062 37.109375 24.617188 36.820312 21.453125 36.25 C 18.296875 35.6875 15.347656 34.984375 12.609375 34.140625 C 9.867188 33.285156 7.296875 32.289062 4.890625 31.15625 C 2.484375 30.03125 0.472656 28.804688 -1.140625 27.484375 L 2.546875 23.09375 C 4.910156 25.070312 7.648438 26.984375 10.765625 28.828125 C 13.878906 30.671875 17.160156 32.203125 20.609375 33.421875 C 24.054688 34.648438 27.335938 35.265625 30.453125 35.265625 C 34.984375 35.265625 38.5 34.367188 41 32.578125 C 43.507812 30.785156 45.304688 28.445312 46.390625 25.5625 C 47.472656 22.6875 48.132812 19.546875 48.375 16.140625 C 48.613281 12.742188 48.734375 9.394531 48.734375 6.09375 L 48.734375 -10.34375 C 45.992188 -8.925781 42.898438 -7.414062 39.453125 -5.8125 C 36.003906 -4.207031 32.414062 -2.835938 28.6875 -1.703125 C 24.957031 -0.566406 21.296875 0 17.703125 0 C 11.097656 0 6.707031 -1.769531 4.53125 -5.3125 C 2.363281 -8.851562 1.28125 -13.597656 1.28125 -19.546875 L 1.28125 -46.46875 C 1.28125 -50.625 1.066406 -54.257812 0.640625 -57.375 C 0.210938 -60.488281 0 -62.046875 0 -62.046875 L 15.15625 -62.046875 C 15.15625 -62.046875 14.914062 -60.488281 14.4375 -57.375 C 13.96875 -54.257812 13.734375 -50.625 13.734375 -46.46875 Z M 13.734375 -46.46875 "
									/></g
								></g
							></g
						></svg
					>
				</header>
				<h1 class="text-eerie text-2xl title mb-4">Thông tin thanh toán</h1>
				<!-- <div class="mb-4 text-sm"><p><button class="link">Login</button></p></div> -->
				<div class="theme-white container py-8">
					<form onsubmit={makePayment} id="payment-form" class="flex flex-col gap-8 min-h-[650px]">
						<div class="flex flex-col gap-4">
							<h3 class="payment-form-heading" style="">Email nhận hóa đơn thanh toán</h3>
							<input type="email" name="email-checkout" id="email" placeholder="Email" required />
						</div>
						<div class="flex flex-col gap-4 minh-h-[150px]">
							<h3 class="payment-form-heading" style="">Thông tin nhận hàng</h3>
							<input type="text" name="name-checkout" id="name" placeholder="Họ tên" required />
							<input type="text" name="phone-checkout" id="phone" placeholder="SDT" required />
							<input
								type="text"
								name="address-checkout"
								id="address"
								placeholder="Địa chỉ"
								required
							/>
							<input type="text" name="note-checkout" id="note" placeholder="Ghi chú" />
						</div>
						<!-- <div class="flex flex-col gap-2 minh-h-[100px]">
							<h3 class="payment-form-heading" style="">Quét mã</h3>
							QRpayment here
						</div>
						<div class="mb-4 -mt-4" style="">
							<button type="button" class="link mt-4">Have a gift card?</button>
						</div> -->
						<div class="minh-h-[150px]">
							<div class="flex flex-col gap-2">
								<label class="inline-flex justify-start items-center gap-3 text-inherit"
									><input
										class="stripe-style h-4 w-4 rounded border-inherit text-light-green focus:outline-none focus:ring-light-green"
										name="agree-terms-checkbox"
										required
										type="checkbox"
										id="agree-terms-checkbox"
										value="false"
									/> <span class="text-sm text-eerie">Đồng ý điều khoản</span></label
								>
								<p class="text-xs">
									Bằng cách đặt hàng, bạn đã đồng ý với <a class="link" href="/dieu-khoan-su-dung"
										>điều khoản của lemyfinest.</a
									>
								</p>
							</div>
						</div>
						<div class="min-w-full">
							<div class="min-h-6"></div>
							<button id="submit" class="button button-primary w-full" style="">Thanh toán</button>
						</div>
					</form>
				</div>
				<div class="sm:mt-16"></div>
				<script src="https://accounts.google.com/gsi/client" async defer></script>
			</div>
			<div class="col-span-3 sm:col-span-1 theme-white mr-0 mt-0 py-0 pl-4 pr-12 pt-4 theme-white">
				<div class="pl-0 sm:pl-6 theme-white sticky top-5">
					<h3 class="text-2xl title text-eerie">Đơn hàng</h3>
					<div class="">
						<ul>
							{#each cartItem.cartProducts as cartProduct}
								<li class="border-b border-gray-200 py-4 grid grid-cols-6 justify-between gap-x-6">
									<div class="flex gap-x-4 col-span-5">
										<img
											src="{HOST_URL}/api/files/{cartProduct.product.collectionName}/{cartProduct
												.product.id}/{cartProduct.product.product_image[0]}"
											alt={cartProduct.product.name}
											width="800"
											height="800"
											class="w-16 h-16 object-contain shrink-0 col-span-2"
										/>
										<div class="flex flex-col">
											<div class="flex flex-col">
												<h3 class="font-serif text-md text-eerie w-full max-w-[220px]">
													{cartProduct.product.name}
												</h3>
												<span class="text-sm text-eerie">{cartProduct.variationOption}</span>
												<p class="text-eerie text-[12px] font-light max-w-sm"></p>
											</div>
										</div>
									</div>
									<div class="flex justify-between col-span-1">
										<div class="flex flex-col gap-2 w-full">
											<div
												class="flex flex-col justify-between text-charcoal items-end text-right text-sm"
											>
												<div>
													{cartProduct.price.toLocaleString('vi-VN', {
														style: 'currency',
														currency: 'VND'
													})}
												</div>
											</div>
											<div class="flex justify-end">
												<p class="text-sm">x {cartProduct.quantity}</p>
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
										{cartItem.cartStats.subtotal.toLocaleString('vi-VN', {
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
										{cartItem.cartStats.subtotal.toLocaleString('vi-VN', {
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
		</section>
	{:else}
		<div class="container">
			<h1 class="title text-4xl max-md:hidden">Thanh toán</h1>
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
</div>
