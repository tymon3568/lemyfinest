<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { clickOutside } from '$lib/helper/clickOutSide';
	import { cartItems, openCheckoutSidebar } from '../../runes/global.svelte';

	let scrolled = $state('');
	let activeNav = $state('');
	let isTransparent = $derived.by(() => {
		if ($page.url.pathname.startsWith('/san-pham') && $page.url.pathname !== '/san-pham') {
			return false;
		} else if (
			[
				'/chinh-sach-bao-mat-thong-tin',
				'/dieu-khoan-su-dung',
				'/chinh-sach-doi-tra',
				'/checkout/thank-you'
			].includes($page.url.pathname)
		) {
			return false;
		}
		return true;
	});
	const handleNavClick = (navId: string) => {
		activeNav === navId ? (activeNav = '') : (activeNav = navId);
	};
	const cartItem = cartItems();
	$effect(() => {
		if ($navigating) {
			activeNav = '';
		}
	});
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 5 ? 'scrolled' : '')} />
<header
	id="site-header"
	class="{scrolled} {isTransparent ? 'is-transparent' : ''} {['/cart', '/checkout'].includes(
		$page.url.pathname
	)
		? 'hidden'
		: ''} {activeNav ? 'has-open-dropdown' : ''}"
	use:clickOutside={() => (activeNav = '')}
>
	<nav class="container flex justify-between items-center gap-10 relative z-20 pt-0">
		<a href="/"
			><span class="sr-only" data-svelte-h="svelte-1in8tzo">Home</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				zoomAndPan="magnify"
				viewBox="0 0 375 187.499995"
				preserveAspectRatio="xMidYMid meet"
				class="h-10 w-auto sm:h-12 {scrolled || isTransparent
					? ''
					: 'text-[#386641]'} transition-colors duration-150 ease-in-out"
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
		</a>
		<div class="hidden md:flex gap-0 lg:gap-6">
			<button
				id="products-dropdown-button"
				type="button"
				class="nav-item {activeNav === 'san-pham' ? 'is-open' : ''}"
				onclick={() => handleNavClick('san-pham')}
				>Sản phẩm
				<span class="closarrow ml-2"></span></button
			>
			<button
				id="resources-dropdown-button"
				type="button"
				class="nav-item {activeNav === 'resources' ? 'is-open' : ''}"
				onclick={() => handleNavClick('resources')}
				>Thông tin
				<span class="closarrow ml-2"></span></button
			> <a href="/gioi-thieu" class="nav-item" data-svelte-h="svelte-7u0bfj">Giới thiệu</a>
		</div>
		<div class="flex items-center justify-end gap-2">
			<!-- <a href="/profile/login" class="nav-item" title="Profile"
				><svg
					class="icon w-5 h-5"
					viewBox="0 0 448 512"
					focusable="false"
					id="icon_user"
					role="img"
					aria-hidden="true"
					aria-label="icon_user"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
					></path></svg
				></a
			> -->
			<!-- <button type="button" class="nav-item {activeNav === 'search' ? 'is-open' : ''}" title="Search" aria-label="Toggle search" onclick={() => handleNavClick('search')}
				><svg
					class="icon w-5 h-5"
					viewBox="0 0 512 512"
					focusable="false"
					id="icon_magnifying-glass"
					role="img"
					aria-hidden="true"
					aria-label="icon_magnifying-glass"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z"
					></path></svg
				></button
			> -->
			<a
				href="##"
				class="nav-item relative"
				id="navbar_cart_icon_link"
				aria-label="CartLink"
				title="Cart"
				onclick={() => {
					openCheckoutSidebar.value = !openCheckoutSidebar.value;
				}}
				><svg
					class="icon w-5 h-5"
					viewBox="0 0 576 512"
					focusable="false"
					id="icon_cart-shopping"
					role="img"
					aria-hidden="true"
					aria-label="icon_cart-shopping"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"
					></path></svg
				>
				<span
					class="min-w-6 h-6 pl-0.5 pr-0.5 bg-light-green rounded-full text-white text-center absolute -top-2 -right-2"
					>{cartItem.cartStats.totalQuantity}</span
				>
			</a>
		</div>
	</nav>
	<div id="products-dropdown" class="nav-dropdown {activeNav === 'san-pham' ? 'is-open' : ''}">
		<div class="container flex gap-12">
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
				<span
					class="col-span-1 md:col-span-2 xl:col-span-3 label text-white/40"
					data-svelte-h="svelte-13xrrgb"
				></span>
				<div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="../assets/images/lemy-tong-hop-tinh-dau.webp"
							width="96"
							height="96"
							alt="Tinh dầu"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">Tinh dầu</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>Tinh Dầu Tinh Khiết Từ Thiên Nhiên - Đem Lại Sự Thư Giãn và Sức Khỏe</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a href="/san-pham" class="relative z-10 button button-secondary py-3 px-6 text-xs"
								>Xem thêm</a
							>
							<!-- <a href="/configure/m1" class="relative z-10 button button-primary py-3 px-6 text-xs"
								>Build</a
							> -->
						</div>
					</div>
					<a href="/san-pham" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Xem thêm</span></a
					>
				</div>
				<!-- <div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="https://rstr.in/goodnature/juicers/UrcMqgdX4Px/c5aCqoMV4Oc"
							width="96"
							height="96"
							alt="Render of Hummingbird"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">Hummingbird</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>30-60 bottles/hr</span> <span>$2,900</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a
								href="/juicers/hummingbird"
								class="relative z-10 button button-secondary py-3 px-6 text-xs">Explore</a
							>
							<a
								href="/configure/hummingbird"
								class="relative z-10 button button-primary py-3 px-6 text-xs">Build</a
							>
						</div>
					</div>
					<a href="/juicers/hummingbird" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Explore</span></a
					>
				</div>
				<div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="https://cdn.raster.app/goodnature/juicers/A7TzcZbi8T?ixlib=js-3.7.0&amp;height=2000&amp;width=200&amp;compress=false&amp;fm=webp&amp;s=b4815a5522009b339bc3305cc5fdb6dd"
							width="96"
							height="96"
							alt="Render of X-1 Mini"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">X-1 Mini</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>40-60 bottles/hr</span> <span>$11,900</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a
								href="/juicers/x1-mini"
								class="relative z-10 button button-secondary py-3 px-6 text-xs">Explore</a
							>
							<a
								href="/configure/x1-mini"
								class="relative z-10 button button-primary py-3 px-6 text-xs">Build</a
							>
						</div>
					</div>
					<a href="/juicers/x1-mini" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Explore</span></a
					>
				</div>
				<div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="https://cdn.raster.app/goodnature/juicers/x3CCZTZY0w?ixlib=js-3.7.0&amp;height=3380&amp;width=200&amp;compress=false&amp;fm=webp&amp;s=530747071ec0118d8816917452a0972c"
							width="96"
							height="96"
							alt="Render of X-1"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">X-1</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>50-300 bottles/hr</span>
							<span data-svelte-h="svelte-1vc2pe3">Inquire for price</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a href="/juicers/x1" class="relative z-10 button button-secondary py-3 px-6 text-xs"
								>Explore</a
							>
							<a
								href="/quote?product=X-1"
								class="relative z-10 button button-primary py-3 px-6 text-xs">Quote</a
							>
						</div>
					</div>
					<a href="/juicers/x1" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Explore</span></a
					>
				</div>
				<div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="https://cdn.raster.app/goodnature/juicers/YASpuQyY5c?ixlib=js-3.7.0&amp;height=669&amp;width=250&amp;compress=false&amp;fm=webp&amp;s=59d6d47643e5e3587a4e43fdab505f57"
							width="96"
							height="96"
							alt="Render of X-6"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">X-6</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>Up to 100 gal/hr</span>
							<span data-svelte-h="svelte-1vc2pe3">Inquire for price</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a href="/juicers/x6" class="relative z-10 button button-secondary py-3 px-6 text-xs"
								>Explore</a
							>
							<a
								href="/quote?product=X-6"
								class="relative z-10 button button-primary py-3 px-6 text-xs">Quote</a
							>
						</div>
					</div>
					<a href="/juicers/x6" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Explore</span></a
					>
				</div>
				<div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="https://rstr.in/goodnature/juicers/tnlCp06lkL7/PCR1-pNSzhy"
							width="96"
							height="96"
							alt="Render of Autopress"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">Autopress</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>Up to 300 gal/hr</span>
							<span data-svelte-h="svelte-1vc2pe3">Inquire for price</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a
								href="/juicers/autopress"
								class="relative z-10 button button-secondary py-3 px-6 text-xs">Explore</a
							>
							<a
								href="/quote?product=Autopress"
								class="relative z-10 button button-primary py-3 px-6 text-xs">Quote</a
							>
						</div>
					</div>
					<a href="/juicers/autopress" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Explore</span></a
					>
				</div>
				<div class="flex flex-col relative theme-white text-eerie px-2 py-4">
					<div class="flex items-center gap-4 flex-1">
						<img
							src="https://cdn.raster.app/goodnature/juicers/hbavCJ1JfB?ixlib=js-3.7.0&amp;height=468&amp;width=200&amp;compress=false&amp;fm=webp&amp;s=193fbecf87b6a12c09d74c8e280d6fff"
							width="96"
							height="96"
							alt="Render of Maximizer"
							loading="lazy"
							class="w-24 h-24 object-contain"
						/> <span class="title text-lg lg:text-2xl">Maximizer</span>
					</div>
					<div
						class="flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col 2xl:flex-row flex items-center justify-between gap-2 mx-4 pt-4 mt-4 border-t"
					>
						<div class="flex flex-col text-[10px] font-medium w-full">
							<span>Up to 1,500 gal/hr</span>
							<span data-svelte-h="svelte-1vc2pe3">Inquire for price</span>
						</div>
						<div class="flex flex-col md:flex-row gap-2 w-full">
							<a
								href="/juicers/maximizer"
								class="relative z-10 button button-secondary py-3 px-6 text-xs">Explore</a
							>
							<a
								href="/quote?product=Maximizer"
								class="relative z-10 button button-primary py-3 px-6 text-xs">Quote</a
							>
						</div>
					</div>
					<a href="/juicers/maximizer" class="absolute inset-0"
						><span class="sr-only" data-svelte-h="svelte-nhyoqq">Explore</span></a
					>
				</div> -->
				<div
					class="border border-white/10 px-6 py-4 flex flex-col justify-between theme-dark"
					data-svelte-h="svelte-1ysb8xc"
				>
					<span class="title text-2xl flex-1 flex items-center max-w-[140px]"
						>Chờ đón những sản phẩm tuyệt vời sắp tới..</span
					>
					<div class="flex flex-col md:flex-row gap-2 w-full pt-4 mt-4 border-t border-white/5">
						<a
							href="/lien-he"
							class="button button-tertiary bg-charcoal !border-transparent py-3 px-6 text-xs"
							>Yêu cầu sản phẩm</a
						>
						<a
							href="https://m.me/249847884884471"
							target="_blank"
							class="relative z-10 button button-tertiary py-3 px-6 text-xs">Chat với chúng tôi</a
						>
					</div>
				</div>
			</div>
			<!-- <div class="lg:w-64 nav-column">
				<span class="label text-white/40 mb-4" data-svelte-h="svelte-js11sw">More</span>
				<a href="/products/category/parts" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_gear"
						role="img"
						aria-hidden="true"
						aria-label="icon_gear"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"
						></path></svg
					> Parts and Bags</a
				><a
					href="/products/category/marketplace-glass-bottles"
					class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_bottle-droplet"
						role="img"
						aria-hidden="true"
						aria-label="icon_bottle-droplet"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M72 16C72 7.2 79.2 0 88 0l8 0V0h32 64 32 8c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0V145.1c38.3 22.1 64 63.5 64 110.9V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-47.4 25.7-88.7 64-110.9V32l-8 0c-8.8 0-16-7.2-16-16zM192 32l-64 0V145.1c0 11.4-6.1 22-16 27.7C83.2 189.5 64 220.5 64 256V448c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V256c0-35.5-19.2-66.5-48-83.2c-9.9-5.7-16-16.3-16-27.7V32zm0 305c0-5.6-4-17.2-14.6-33.5c-5.4-8.3-11.5-16.5-17.4-23.6c-5.9 7.2-12 15.3-17.4 23.6C132 319.8 128 331.4 128 337c0 16.6 13.8 31 32 31c11.5 0 19.3-3.4 23.8-7.5c4-3.6 8.2-10.3 8.2-23.5zm32 0c0 42-28.7 63-64 63s-64-28.2-64-63c0-31 34.9-73.5 53.2-93.6c5.9-6.5 15.8-6.5 21.6 0C189.1 263.5 224 306 224 337z"
						></path></svg
					> Glass Bottles</a
				><a href="/configure/bottles" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_bottle-droplet"
						role="img"
						aria-hidden="true"
						aria-label="icon_bottle-droplet"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M72 16C72 7.2 79.2 0 88 0l8 0V0h32 64 32 8c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0V145.1c38.3 22.1 64 63.5 64 110.9V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-47.4 25.7-88.7 64-110.9V32l-8 0c-8.8 0-16-7.2-16-16zM192 32l-64 0V145.1c0 11.4-6.1 22-16 27.7C83.2 189.5 64 220.5 64 256V448c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V256c0-35.5-19.2-66.5-48-83.2c-9.9-5.7-16-16.3-16-27.7V32zm0 305c0-5.6-4-17.2-14.6-33.5c-5.4-8.3-11.5-16.5-17.4-23.6c-5.9 7.2-12 15.3-17.4 23.6C132 319.8 128 331.4 128 337c0 16.6 13.8 31 32 31c11.5 0 19.3-3.4 23.8-7.5c4-3.6 8.2-10.3 8.2-23.5zm32 0c0 42-28.7 63-64 63s-64-28.2-64-63c0-31 34.9-73.5 53.2-93.6c5.9-6.5 15.8-6.5 21.6 0C189.1 263.5 224 306 224 337z"
						></path></svg
					> Plastic Bottles</a
				><a href="/consulting" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_hat-chef"
						role="img"
						aria-hidden="true"
						aria-label="icon_hat-chef"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M170.9 83.4C187 52.8 219.1 32 256 32s69 20.8 85 51.4c2.5 4.7 7.1 7.9 12.4 8.5s10.5-1.5 13.9-5.5C379.1 72.7 396.5 64 416 64c35.3 0 64 28.7 64 64c0 4-.4 7.8-1 11.6l-.1 .5c-3.5 22.8-14.2 58.4-26.1 93.5c-11.8 34.7-24.3 67.7-31 84.7c-.4 1-1.4 1.8-2.8 1.8H373.8l25.9-141.1c1.6-8.7-4.2-17-12.8-18.6s-17 4.2-18.6 12.8l-26.4 144c-.2 1-.3 1.9-.3 2.9H272V144c0-8.8-7.2-16-16-16s-16 7.2-16 16V320H170.4c0-1-.1-1.9-.3-2.9l-26.4-144c-1.6-8.7-9.9-14.4-18.6-12.8s-14.4 9.9-12.8 18.6L138.2 320H93c-1.4 0-2.4-.8-2.8-1.8c-6.6-17-19.2-50-31-84.7C47.3 198.4 36.6 162.8 33.1 140l-.1-.5c-.7-3.7-1-7.6-1-11.6c0-35.3 28.7-64 64-64c19.5 0 36.9 8.7 48.6 22.4c3.5 4 8.7 6.1 13.9 5.5s9.9-3.8 12.4-8.5zM256 0c-41.9 0-79.1 20.1-102.4 51.2c-16-12-36-19.2-57.6-19.2C43 32 0 75 0 128c0 5.8 .5 11.5 1.5 17.1c4 25.9 15.6 63.8 27.4 98.7c12 35.3 24.7 68.8 31.4 86C65.6 343.4 78.7 352 93 352H419c14.3 0 27.4-8.6 32.6-22.2c6.7-17.2 19.4-50.7 31.4-86c11.8-34.9 23.4-72.8 27.4-98.7c1-5.5 1.5-11.2 1.5-17.1c0-53-43-96-96-96c-21.6 0-41.6 7.2-57.6 19.2C335.1 20.1 297.9 0 256 0zM64 384v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384H416v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64z"
						></path></svg
					> Consulting</a
				><a href="/marketplace" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 640 512"
						focusable="false"
						id="icon_shop"
						role="img"
						aria-hidden="true"
						aria-label="icon_shop"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25C90.8 9.6 106.9 0 124.5 0h391c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3c0 21.1-17.1 38.2-38.2 38.2H576V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V224H96V352H352V272 256h32v16V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V224H38.2C17.1 224 0 206.9 0 185.8zM80 192H560h41.8c3.4 0 6.2-2.8 6.2-6.2c0-1-.3-2.1-.8-3L529.6 40.3c-2.8-5.1-8.2-8.3-14-8.3h-391c-5.9 0-11.2 3.2-14 8.3L32.8 182.8c-.5 .9-.8 1.9-.8 3c0 3.4 2.8 6.2 6.2 6.2H80zM96 464c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16V384H96v80z"
						></path></svg
					> Marketplace</a
				><a href="/products/category/books" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 448 512"
						focusable="false"
						id="icon_book"
						role="img"
						aria-hidden="true"
						aria-label="icon_book"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M64 0C28.7 0 0 28.7 0 64L0 448l0 0c0 35.3 28.7 64 64 64H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H416V413.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H64zM384 416v64H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H384zM64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32H96V384H64zm64 0V32H400c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H128zm48-240c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"
						></path></svg
					> Books</a
				><a href="/products/category/apparel" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 640 512"
						focusable="false"
						id="icon_shirt"
						role="img"
						aria-hidden="true"
						aria-label="icon_shirt"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M211.4 0c-27.7 0-54.5 9.6-76 27.1L56.3 91.9 12.9 127.4c-13.7 11.2-15.7 31.4-4.5 45l70.9 86.7c11.2 13.7 31.4 15.7 45 4.5L160 234.4V456c0 30.9 25.1 56 56 56H424c30.9 0 56-25.1 56-56V234.4l35.6 29.1c13.7 11.2 33.8 9.2 45-4.5l70.9-86.7c11.2-13.7 9.2-33.8-4.5-45l-10.1 12.4 10.1-12.4L583.7 91.9 504.6 27.1C483.1 9.6 456.3 0 428.6 0h-6.3c-1.3 0-2.5 .1-3.7 .2c-.8-.1-1.7-.2-2.6-.2H224c-.9 0-1.7 .1-2.6 .2c-1.2-.1-2.4-.2-3.7-.2h-6.3zm40.7 32H387.9C378 60 351.3 80 320 80s-58-20-67.9-48zM155.7 51.9C171.4 39 191.1 32 211.4 32h6.3l0 0c0 0 .2 .1 .4 .3c.5 .4 1 1.2 1.3 2.2C231.1 79.1 271.7 112 320 112s88.9-32.9 100.6-77.5c.3-1 .8-1.8 1.3-2.2c.2-.2 .4-.2 .4-.3l0 0h6.3c20.3 0 40 7 55.7 19.9l79.2 64.8 43.3 35.5-70.9 86.7-43.3-35.5-18.4-15.1c-4.8-3.9-11.4-4.7-17-2.1s-9.1 8.3-9.1 14.5V456c0 13.3-10.7 24-24 24H216c-13.3 0-24-10.7-24-24V200.7c0-6.2-3.6-11.8-9.1-14.5s-12.2-1.8-17 2.1l-18.4 15.1-43.3 35.5L33.2 152.1l43.3-35.5 79.2-64.8z"
						></path></svg
					> Apparel</a
				><a
					href="/products/category/printed-materials"
					class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 576 512"
						focusable="false"
						id="icon_image-landscape"
						role="img"
						aria-hidden="true"
						aria-label="icon_image-landscape"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M512 96c17.7 0 32 14.3 32 32V384c0 6.1-1.7 11.8-4.6 16.6L377 197.6c-12.8-16-37.2-16-50 0L244.4 300.9l-27.3-37.5c-12.3-17-37.4-17.7-50.6-1.4L45.3 410C37.3 404.2 32 394.7 32 384V128c0-17.7 14.3-32 32-32H512zm-1.3 320H193.3l63-78.8L352 217.6 510.7 416zM160.1 448H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64h95.9c.1 0 .2 0 .3 0zm-7.8-32H81.8L191.3 282.2l32.4 44.6L152.3 416zM144 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
						></path></svg
					> Printed Items</a
				>
				<span class="label text-white/40 mb-4 mt-12" data-svelte-h="svelte-1g5i9ej"
					>By Industry</span
				>
				<a href="/juice-bars" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 576 512"
						focusable="false"
						id="icon_store"
						role="img"
						aria-hidden="true"
						aria-label="icon_store"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M520.6 120.9l0 0c18.7 29.6 .3 66.6-29.2 70.6c-2.6 .3-5.2 .5-7.9 .5c-16.5 0-31.2-7.2-41.5-18.5c-6.1-6.7-14.7-10.5-23.7-10.5s-17.6 3.8-23.7 10.5c-10.2 11.2-24.8 18.4-41.4 18.4c-16.5 0-31.3-7.2-41.4-18.4c-6.1-6.7-14.7-10.5-23.7-10.5s-17.7 3.8-23.7 10.5C254 184.8 239.3 192 222.7 192c-16.5 0-31.3-7.2-41.4-18.4c-6.1-6.7-14.7-10.5-23.7-10.5s-17.7 3.8-23.7 10.5C123.6 184.8 109 192 92.4 192c-2.6 0-5.2-.2-7.9-.5c-29.3-4-47.7-41-29.1-70.6l0 0L111.6 32H464.4l56.2 88.9zM483.4 224c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c19.6 0 37.5-6.4 52-17c4.8-3.5 9.2-7.6 13.2-11.9c4 4.4 8.4 8.4 13.2 11.9c14.5 10.6 32.4 17 52 17c19.6 0 37.5-6.4 52-17c4.8-3.5 9.2-7.6 13.2-12c4 4.4 8.4 8.4 13.2 11.9c14.5 10.6 32.4 17 52 17c19.8 0 37.8-6.5 52.3-17.3c4.7-3.5 9-7.4 12.9-11.7c3.9 4.3 8.3 8.3 13 11.8c14.5 10.7 32.5 17.2 52.2 17.2zM80 256c-8.8 0-16 7.2-16 16v80 16 16 64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 368 352 272c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H96V272c0-8.8-7.2-16-16-16zM96 384H480v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384z"
						></path></svg
					> Juice Bars
				</a><a href="/cider" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 448 512"
						focusable="false"
						id="icon_apple-whole"
						role="img"
						aria-hidden="true"
						aria-label="icon_apple-whole"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M228.6 96H224V91.4C224 58.6 250.6 32 283.4 32H288v4.6C288 69.4 261.4 96 228.6 96zm-18.3 32h18.3c50.5 0 91.4-40.9 91.4-91.4V18.3C320 8.2 311.8 0 301.7 0H283.4C232.9 0 192 40.9 192 91.4v18.3c0 10.1 8.2 18.3 18.3 18.3zM32 288c0-33.8 8-67.7 22.8-92c14.2-23.5 33-36 57.2-36c21 0 48.7 8.4 71.1 17.1c26.2 10.2 55.6 10.2 81.9 0C287.3 168.4 315 160 336 160c24.3 0 43 12.5 57.2 36C408 220.3 416 254.2 416 288c0 57.5-18 106.6-43.6 140.8C346.4 463.5 315 480 288 480c-13.2 0-32-2.7-45.3-5c-12.3-2.2-25-2.2-37.3 0c-13.3 2.3-32.1 5-45.3 5c-27 0-58.4-16.5-84.4-51.2C50 394.6 32 345.5 32 288zM160 512c16.2 0 37.4-3.2 50.8-5.5c8.7-1.5 17.6-1.5 26.3 0c13.5 2.4 34.6 5.5 50.8 5.5c80 0 160-96 160-224c0-76.3-35.7-160-112-160c-27.3 0-59.7 10.3-82.7 19.3c-18.8 7.3-39.9 7.3-58.7 0C171.7 138.3 139.3 128 112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512z"
						></path></svg
					> Cider
				</a><a href="/grocery" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 576 512"
						focusable="false"
						id="icon_basket-shopping"
						role="img"
						aria-hidden="true"
						aria-label="icon_basket-shopping"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M327.9 2.2c-7.6 4.5-10.2 14.2-5.8 21.9l98 167.9H155.9l98-167.9c4.5-7.6 1.9-17.4-5.8-21.9s-17.4-1.9-21.9 5.8L118.8 192H65 32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H40L99.9 463.5C107 492 132.6 512 162 512H414c29.4 0 55-20 62.1-48.5L536 224h24c8.8 0 16-7.2 16-16s-7.2-16-16-16H544 511 457.2L349.8 7.9c-4.5-7.6-14.2-10.2-21.9-5.8zM73 224H503L445.1 455.8C441.5 470 428.7 480 414 480H162c-14.7 0-27.5-10-31-24.2L73 224zm151 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm64-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm96 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"
						></path></svg
					> Grocery
				</a><a href="/restaurant" class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 448 512"
						focusable="false"
						id="icon_utensils"
						role="img"
						aria-hidden="true"
						aria-label="icon_utensils"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M42.6 .2c8.7 1.5 14.6 9.7 13.2 18.4L32.7 157.4c-.4 2.6-.7 5.2-.7 7.9V176c0 26.5 21.5 48 48 48h32 32c26.5 0 48-21.5 48-48V165.3c0-2.6-.2-5.3-.7-7.9L168.2 18.6c-1.5-8.7 4.4-17 13.2-18.4s17 4.4 18.4 13.2l23.1 138.8c.7 4.3 1.1 8.7 1.1 13.2V176c0 44.2-35.8 80-80 80H128V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H80c-44.2 0-80-35.8-80-80V165.3c0-4.4 .4-8.8 1.1-13.2L24.2 13.4C25.7 4.7 33.9-1.2 42.6 .2zM88.8 0c8.8 .4 15.6 8 15.2 16.8l-8 160c-.4 8.8-8 15.6-16.8 15.2s-15.6-8-15.2-16.8l8-160C72.5 6.4 80-.4 88.8 0zm46.4 0C144-.4 151.5 6.4 152 15.2l8 160c.4 8.8-6.4 16.3-15.2 16.8s-16.3-6.4-16.8-15.2l-8-160C119.6 8 126.4 .5 135.2 0zM320 176V288c0 17.7 14.3 32 32 32h64V32.2l-.2 .1c-1.7 .4-6.7 1.5-14.3 4.6C391.4 41 379 47.8 367 58.2c-23.2 20.1-47 55.3-47 117.8zM416 0c17.7 0 32 14.3 32 32V320v16 16V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H352c-35.3 0-64-28.7-64-64V176C288 32 400 0 416 0z"
						></path></svg
					> Restaurant
				</a>
			</div> -->
		</div>
	</div>
	<div id="resources-dropdown" class="nav-dropdown {activeNav === 'resources' ? 'is-open' : ''}">
		<div class="container flex gap-16">
			<div class="grid grid-cols-3 gap-6 max-w-screen-md">
				<a
					href="https://m.me/249847884884471"
					target="_blank"
					class="flex flex-col items-start border border-white/10 hover:border-white/30 transition-colors duration-300 ease"
					><div class="custom-filter">
						<img
							src="/assets/images/nvtuvan.webp"
							alt="Consulting"
							draggable="false"
							loading="lazy"
							class="bg-eerie flex-1 self-stretch object-cover"
						/>
					</div>
					<span class="title text-lg px-6 py-4">Tư vấn</span>
				</a>
				<!-- <a
					href="/recipes"
					class="flex flex-col items-start border border-white/10 hover:border-white/30 transition-colors duration-300 ease"
					><div class="custom-filter">
						<img
							src="https://cdn.raster.app/goodnature/recipes/7IgsGIyqLr?ixlib=js-3.7.0&amp;compress=false&amp;width=250&amp;height=900&amp;fm=webp&amp;s=fd4a4a8da3d96cf36387b26815791c64"
							alt="Recipes"
							draggable="false"
							loading="lazy"
							class="bg-eerie flex-1 self-stretch object-cover"
						/>
					</div>
					<span class="title text-lg px-6 py-4">Recipes</span>
				</a><a
					href="/blog"
					class="flex flex-col items-start border border-white/10 hover:border-white/30 transition-colors duration-300 ease"
					><div class="custom-filter">
						<img
							src="https://cdn.raster.app/goodnature/gn-stock/OqrcoDPVPm?ixlib=js-3.7.0&amp;compress=false&amp;fit=crop&amp;height=5792&amp;rect=0%2C0%2C5804%2C5792&amp;width=250&amp;ar=1.00207182320442&amp;fm=webp&amp;s=715e04d4987cf45d6dd0f9563b2a26d9"
							alt="Blog"
							draggable="false"
							loading="lazy"
							class="bg-eerie flex-1 self-stretch object-cover"
						/>
					</div>
					<span class="title text-lg px-6 py-4">Blog</span>
				</a> -->
			</div>
			<div class="nav-column flex-1">
				<span
					class="uppercase text-xs tracking-wide text-white/40 mb-4"
					data-svelte-h="svelte-41wzc2">Thêm</span
				>
				<a href="/san-pham/tinh-dau-sa" class="py-1.5 text-sm">Tinh dầu sả</a><a
					href="/san-pham/tinh-dau-bach-dan-chanh"
					class="py-1.5 text-sm">Tinh dầu bạch đàn chanh</a
				>
				<span
					class="uppercase text-xs tracking-wide text-white/40 mb-4 mt-8"
					data-svelte-h="svelte-19b2kw4">Bộ phận CSKH</span
				> <a href="tel:0949743369" class="py-1.5 text-sm">Liên hệ hổ trợ: 0949743369 </a><a
					href="/"
					class="py-1.5 text-sm"
					>Hướng dẫn sử dụng
				</a>
			</div>
			<div class="nav-column flex-1">
				<span
					class="uppercase text-xs tracking-wide text-white/40 mb-4"
					data-svelte-h="svelte-1ymbx14">Mạng xã hội</span
				>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 448 512"
						focusable="false"
						id="icon_instagram"
						role="img"
						aria-hidden="true"
						aria-label="icon_instagram"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						></path></svg
					> Instagram
				</a><a
					href="https://www.youtube.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 576 512"
						focusable="false"
						id="icon_youtube"
						role="img"
						aria-hidden="true"
						aria-label="icon_youtube"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
						></path></svg
					> Youtube
				</a><a
					href="https://www.facebook.com/lemyfinest"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_facebook"
						role="img"
						aria-hidden="true"
						aria-label="icon_facebook"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
						></path></svg
					>
					Facebook
					<!-- </a><a
					href="https://www.facebook.com/groups/407299067217191"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 py-1.5 text-sm"
					><svg
						class="icon h-3 w-3"
						viewBox="0 0 640 512"
						focusable="false"
						id="icon_user-group"
						role="img"
						aria-hidden="true"
						aria-label="icon_user-group"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 96h91.4c65.7 0 120.1 48.7 129 112H49.3c8.9-63.3 63.3-112 129-112zm0-48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3zm431 208c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320H417.3c-4.4 0-8.8 .2-13.2 .5c46.4 38.6 75.9 96.7 75.9 161.8c0 10.8-2.8 20.9-7.6 29.7H609.3zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7C377.4 75.9 384 101.2 384 128c0 35.6-11.6 68.5-31.3 95.1C373 243.4 401 256 432 256z"
						></path></svg
					> FB Group
				</a> -->
				</a>
			</div>
		</div>
	</div>
	<div class="nav-dropdown flex flex-col theme-dark {activeNav === 'search' ? 'is-open' : ''}">
		<div class="container self-stretch flex flex-col h-0 gap-8">
			<form>
				<input
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					spellcheck="false"
					id="search-input"
					type="search"
					placeholder="Find something…"
				/>
			</form>
		</div>
	</div>
	<!-- <div class="nav-dropdown nav-dropdown-mobile pt-14 pb-0 z-50">
		<div
			class="relative container flex flex-col gap-6 h-64 pb-24 text-md pl-6 overflow-y-scroll pt-12"
		>
			<div class="nav-column">
				<div class="label flex flex-row text-base gap-x-2 items-center cursor-pointer">
					<svg
						class="icon nav-icon"
						viewBox="0 0 448 512"
						focusable="false"
						id="icon_lemon"
						role="img"
						aria-hidden="true"
						aria-label="icon_lemon"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M368 64c-5.8 0-11.2 1-16.2 2.8c-18.9 6.8-44.1 12.9-70.1 7.1c-60.7-13.5-128.7 11-178.8 61s-74.5 118.1-61 178.8c5.8 26-.3 51.2-7.1 70.1C33 388.8 32 394.2 32 400c0 26.5 21.5 48 48 48c5.8 0 11.2-1 16.2-2.8c18.9-6.8 44.1-12.9 70.1-7.1c60.7 13.5 128.7-11 178.8-61s74.5-118.1 61-178.8c-5.8-26 .3-51.2 7.1-70.1c1.8-5 2.8-10.5 2.8-16.2c0-26.5-21.5-48-48-48zm0-32c44.2 0 80 35.8 80 80c0 9.5-1.7 18.6-4.7 27.1c-6 16.7-9.8 35-5.9 52.4c16.4 73.7-13.7 152.4-69.6 208.3s-134.7 86-208.3 69.6c-17.3-3.9-35.7-.1-52.4 5.9c-8.4 3-17.6 4.7-27.1 4.7c-44.2 0-80-35.8-80-80c0-9.5 1.7-18.6 4.7-27.1c6-16.7 9.8-35 5.9-52.4C-5.8 246.9 24.3 168.2 80.2 112.2s134.7-86 208.3-69.6c17.3 3.9 35.7 .1 52.4-5.9c8.4-3 17.6-4.7 27.1-4.7zM246.7 134.5L228.3 143c-51.8 23.9-93.4 65.5-117.3 117.3l-8.5 18.4c-3.7 8-13.2 11.5-21.2 7.8s-11.5-13.2-7.8-21.2l8.5-18.4c27.1-58.7 74.3-105.9 133-133l18.4-8.5c8-3.7 17.5-.2 21.2 7.8s.2 17.5-7.8 21.2z"
						></path></svg
					>
					Juice Presses
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					>
				</div>
			</div>
			<div class="nav-column">
				<div class="label flex flex-row text-base gap-x-2 items-center cursor-pointer">
					<svg
						class="icon nav-icon"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_gear"
						role="img"
						aria-hidden="true"
						aria-label="icon_gear"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"
						></path></svg
					>
					Parts &amp; Bags
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					>
				</div>
			</div>
			<div class="nav-column">
				<div class="label flex flex-row text-base gap-x-2 items-center cursor-pointer">
					<svg
						class="icon nav-icon"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_jar"
						role="img"
						aria-hidden="true"
						aria-label="icon_jar"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M32 24c0 13.3 10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H56C42.7 0 32 10.7 32 24zM256 128c8.8 0 16 7.2 16 16v80H48V144c0-8.8 7.2-16 16-16H256zm16 240v80c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V368H272zM64 80C28.7 80 0 108.7 0 144V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H64z"
						></path></svg
					>
					Bottles
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					>
				</div>
			</div>
			<div class="nav-column">
				<div class="label flex flex-row text-base gap-x-2 items-center cursor-pointer">
					<svg
						class="icon nav-icon"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_phone"
						role="img"
						aria-hidden="true"
						aria-label="icon_phone"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z"
						></path></svg
					>
					Contact
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					>
				</div>
			</div>
			<div class="nav-column">
				<a
					class="label flex flex-row text-base gap-x-2 items-center cursor-pointer"
					href="/consulting"
					><svg
						class="icon nav-icon"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_hat-chef"
						role="img"
						aria-hidden="true"
						aria-label="icon_hat-chef"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M170.9 83.4C187 52.8 219.1 32 256 32s69 20.8 85 51.4c2.5 4.7 7.1 7.9 12.4 8.5s10.5-1.5 13.9-5.5C379.1 72.7 396.5 64 416 64c35.3 0 64 28.7 64 64c0 4-.4 7.8-1 11.6l-.1 .5c-3.5 22.8-14.2 58.4-26.1 93.5c-11.8 34.7-24.3 67.7-31 84.7c-.4 1-1.4 1.8-2.8 1.8H373.8l25.9-141.1c1.6-8.7-4.2-17-12.8-18.6s-17 4.2-18.6 12.8l-26.4 144c-.2 1-.3 1.9-.3 2.9H272V144c0-8.8-7.2-16-16-16s-16 7.2-16 16V320H170.4c0-1-.1-1.9-.3-2.9l-26.4-144c-1.6-8.7-9.9-14.4-18.6-12.8s-14.4 9.9-12.8 18.6L138.2 320H93c-1.4 0-2.4-.8-2.8-1.8c-6.6-17-19.2-50-31-84.7C47.3 198.4 36.6 162.8 33.1 140l-.1-.5c-.7-3.7-1-7.6-1-11.6c0-35.3 28.7-64 64-64c19.5 0 36.9 8.7 48.6 22.4c3.5 4 8.7 6.1 13.9 5.5s9.9-3.8 12.4-8.5zM256 0c-41.9 0-79.1 20.1-102.4 51.2c-16-12-36-19.2-57.6-19.2C43 32 0 75 0 128c0 5.8 .5 11.5 1.5 17.1c4 25.9 15.6 63.8 27.4 98.7c12 35.3 24.7 68.8 31.4 86C65.6 343.4 78.7 352 93 352H419c14.3 0 27.4-8.6 32.6-22.2c6.7-17.2 19.4-50.7 31.4-86c11.8-34.9 23.4-72.8 27.4-98.7c1-5.5 1.5-11.2 1.5-17.1c0-53-43-96-96-96c-21.6 0-41.6 7.2-57.6 19.2C335.1 20.1 297.9 0 256 0zM64 384v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384H416v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64z"
						></path></svg
					>
					Consulting
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					></a
				>
			</div>
			<div class="nav-column">
				<div class="label flex flex-row text-base gap-x-2 items-center cursor-pointer">
					<svg
						class="icon nav-icon"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_newspaper"
						role="img"
						aria-hidden="true"
						aria-label="icon_newspaper"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M160 64c-17.7 0-32 14.3-32 32V416c0 11.7-3.1 22.6-8.6 32H432c26.5 0 48-21.5 48-48V96c0-17.7-14.3-32-32-32H160zM64 480c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64v32c-17.7 0-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V400c0 44.2-35.8 80-80 80H64zM384 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zM160 304c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm32-144H320V128H192v96zM160 120c0-13.3 10.7-24 24-24H328c13.3 0 24 10.7 24 24V232c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24V120z"
						></path></svg
					>
					Resources
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					>
				</div>
			</div>
			<div class="nav-column">
				<div class="label flex flex-row text-base gap-x-2 items-center cursor-pointer">
					<svg
						class="icon nav-icon"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_hat-chef"
						role="img"
						aria-hidden="true"
						aria-label="icon_hat-chef"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M170.9 83.4C187 52.8 219.1 32 256 32s69 20.8 85 51.4c2.5 4.7 7.1 7.9 12.4 8.5s10.5-1.5 13.9-5.5C379.1 72.7 396.5 64 416 64c35.3 0 64 28.7 64 64c0 4-.4 7.8-1 11.6l-.1 .5c-3.5 22.8-14.2 58.4-26.1 93.5c-11.8 34.7-24.3 67.7-31 84.7c-.4 1-1.4 1.8-2.8 1.8H373.8l25.9-141.1c1.6-8.7-4.2-17-12.8-18.6s-17 4.2-18.6 12.8l-26.4 144c-.2 1-.3 1.9-.3 2.9H272V144c0-8.8-7.2-16-16-16s-16 7.2-16 16V320H170.4c0-1-.1-1.9-.3-2.9l-26.4-144c-1.6-8.7-9.9-14.4-18.6-12.8s-14.4 9.9-12.8 18.6L138.2 320H93c-1.4 0-2.4-.8-2.8-1.8c-6.6-17-19.2-50-31-84.7C47.3 198.4 36.6 162.8 33.1 140l-.1-.5c-.7-3.7-1-7.6-1-11.6c0-35.3 28.7-64 64-64c19.5 0 36.9 8.7 48.6 22.4c3.5 4 8.7 6.1 13.9 5.5s9.9-3.8 12.4-8.5zM256 0c-41.9 0-79.1 20.1-102.4 51.2c-16-12-36-19.2-57.6-19.2C43 32 0 75 0 128c0 5.8 .5 11.5 1.5 17.1c4 25.9 15.6 63.8 27.4 98.7c12 35.3 24.7 68.8 31.4 86C65.6 343.4 78.7 352 93 352H419c14.3 0 27.4-8.6 32.6-22.2c6.7-17.2 19.4-50.7 31.4-86c11.8-34.9 23.4-72.8 27.4-98.7c1-5.5 1.5-11.2 1.5-17.1c0-53-43-96-96-96c-21.6 0-41.6 7.2-57.6 19.2C335.1 20.1 297.9 0 256 0zM64 384v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384H416v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64z"
						></path></svg
					>
					Company
					<svg
						class="icon w-4 h-4"
						viewBox="0 0 320 512"
						focusable="false"
						id="icon_chevron-right"
						role="img"
						aria-hidden="true"
						aria-label="icon_chevron-right"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
						></path></svg
					>
				</div>
			</div>
		</div>
	</div> -->
</header>
<button type="button" id="mobile-nav-toggle" class="" title="Toggle navigation"
	><div class="juiceburger" data-svelte-h="svelte-rwh6lr"><span></span> <span></span></div></button
>
<div class="backdrop-overlay {activeNav ? 'is-open' : ''}" aria-hidden="true"></div>

<style>
	#site-header {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 30;
		padding-top: 3rem;
		padding-bottom: 1.25rem;
		--tw-text-opacity: 1;
		color: rgb(0 0 0 / var(--tw-text-opacity));
		transition:
			transform 0.2s ease,
			color 0.2s ease;
		will-change: transform;
	}
	#site-header.scrolled {
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
		transform: translateY(-2rem);
	}
	#site-header.is-transparent {
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
	}
</style>
