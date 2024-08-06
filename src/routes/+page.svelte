<script lang="ts">
	import { page } from '$app/stores';
	import { HOST_URL, variationOptions } from '$lib';
	import { cartItems, openCheckoutSidebar } from '$lib/runes/global.svelte';
	const cartItem = cartItems();
	let selectedQuantity = $state('1');
</script>

<header class="section section-photo-hero theme-dark">
	<div class="overlay-image">
		<img
			class="h-full w-full object-cover"
			src="https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75"
			alt="hummingbird zoomed"
			sizes="(min-width: 2560px) 2560px, 100vw"
			srcset="https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/ZjJt8UMTzAJOCeGZ_Hummingbird_2500x1800Zoomed.jpg?auto=format%2Ccompress&amp;q=75&amp;width=2560 2560w"
			draggable="true"
			loading="lazy"
		/>
	</div>
	<div class="container relative z-10 flex flex-col justify-center items-start">
		<img
			class="block mb-4 md:mb-14 w-32 h-32 shrink-0 object-contain"
			src="../assets/images/lemy-organic.webp?auto=format%2Ccompress&amp;q=75"
			alt="hummingbird badge logo"
			width="96"
			height="96"
			sizes="(min-width: 150px) 150px, 100vw"
			srcset="../assets/images/lemy-organic.webp?auto=format%2Ccompress&amp;q=75&amp;width=150 150w"
			draggable="true"
			loading="eager"
		/>
		<h1 class="title text-4xl md:text-5xl lg:text-7xl max-w-[900px]">
			Lemy
			<br /><span class="text-light-green">Essential Oil By You</span>
		</h1>
		<div class="photo-hero-body"><p>Tinh Dầu Tinh Khiết Từ Thiên Nhiên Dành Riêng Cho Bạn</p></div>
		<div class="flex max-xs:flex-col flex-wrap gap-5 mt-16">
			<a href="/gioi-thieu" class="button button-primary"
				><span>Vì sao chúng tôi làm tinh dầu</span>
				<svg
					class="icon fill-current icon w-4 h-4"
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
</header>
<section class="section section-split theme-light minimum-height">
	<div class="container grid max-md:grid-rows-2 md:grid-cols-2">
		<div
			class="flex flex-col justify-center md:pr-20 max-md:row-start-2 max-md:pt-16 max-md:col-start-2"
		>
			<img
				class="block mb-12 h-24 w-24 object-contain"
				src="https://goodnature.cdn.prismic.io/goodnature/0cdffe7d-b9f0-407f-811e-3e81bac8d25a_Goodnature+Cold+Pressed+Badge_light+brown.svg?q=75"
				alt=""
				width="96"
				height="96"
				sizes="(min-width: 150px) 150px, 100vw"
				srcset="https://goodnature.cdn.prismic.io/goodnature/0cdffe7d-b9f0-407f-811e-3e81bac8d25a_Goodnature+Cold+Pressed+Badge_light+brown.svg?q=75&amp;width=150 150w"
				draggable="true"
				loading="lazy"
			/>
			<h2 id="commercial-juicers" class="title text-4xl sm:text-5xl">Tinh Dầu Đơn Hương</h2>
			<div class="mt-6 text-storm space-y-4 rich-text">
				<p>
					Khám phá mùi hương nguyên bản từ những nguyên liệu tinh túy, mang đến sự thư giãn và tinh
					thần sảng khoái. Không pha trộn, không hóa chất – chỉ một mùi hương thuần khiết từ thiên
					nhiên.
				</p>
			</div>
			<div class="mt-12 flex justify-start flex-wrap gap-6">
				<a href="/products" class="button button-primary"
					><span>Xem sản phẩm</span>
					<svg
						class="icon fill-current icon w-4 h-4"
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
		<div
			class="absolute overflow-hidden bottom-1/2 inset-x-0 top-0 md:bottom-0 custom-filter md:left-1/2"
		>
			<img
				class="object-cover h-full w-full"
				src="https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75"
				alt="Green Goodnature M-1 in a juice bar"
				sizes="(min-width: 2560px) 2560px, 100vw"
				srcset="https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/e2094f23-62e4-4d79-b0c4-62b8cadc99e5_goodnature-m1-green-juice-bar-3.jpg?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w"
				draggable="true"
				loading="lazy"
			/>
		</div>
	</div>
</section>
<section class="section section-split theme-light">
	<div class="container grid max-md:grid-rows-2 md:grid-cols-2">
		<div class="flex flex-col justify-center md:pl-20 max-md:row-start-2 max-md:pt-16 col-start-2">
			<h2 id="juice-business-consulting" class="title text-4xl sm:text-5xl">
				Tư vấn lựa chọn Tinh dầu
			</h2>
			<div class="mt-6 text-storm space-y-4 rich-text">
				<p>
					Tinh dầu không chỉ mang lại hương thơm dễ chịu mà còn có tác dụng tốt cho sức khỏe và tinh
					thần. Để giúp bạn lựa chọn loại tinh dầu phù hợp nhất, hãy liên hệ trực tiếp với chúng
					tôi.
				</p>
			</div>
			<div class="mt-12 flex justify-start flex-wrap gap-6">
				<a href="/consulting" class="button button-primary"
					><span>Tư vấn cho tôi</span>
					<svg
						class="icon fill-current icon w-4 h-4"
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
		<div
			class="absolute overflow-hidden bottom-1/2 inset-x-0 top-0 md:bottom-0 custom-filter md:right-1/2"
		>
			<img
				class="object-cover h-full w-full"
				src="https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75"
				alt="girl holding bottle of juice"
				sizes="(min-width: 2560px) 2560px, 100vw"
				srcset="https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/767bcc81-699d-4b02-8083-f24e2b1c8cb5_372674199_1007224863956418_4682982675131639921_n.jpg?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w"
				draggable="true"
				loading="lazy"
			/>
		</div>
	</div>
</section>
<section class="section theme-light undefined">
	<div class="container">
		<h2 id="proud-members-of-the-goodnature-family" class="title text-3xl text-center">
			Khách hàng và đối tác của chúng tôi
		</h2>
		<div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:mt-16">
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75"
					alt="logo"
					width="198"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/84b87f70-5bb0-43a8-a265-3cd170e495d5_clieant+logo+brown_southern+pressed+juicery.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75"
					alt="logo"
					width="287"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/415c84b2-3ff6-4c60-8188-629c30a53e16_clieant+logo+brown_pressed+juicery.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75"
					alt="logo"
					width="415"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/a8eb4c5b-4c3e-4834-a58b-cef9b67d8b0a_clieant+logo+brown_martinelli%27s.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75"
					alt="logo"
					width="289"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/be80b191-dc15-4d84-af41-a4d93b0773b9_clieant+logo+brown_evolution+fresh.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75"
					alt="logo"
					width="386"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/38cc9647-14f8-4a18-a2ac-97e419295f4d_clieant+logo+brown_erewhon.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75"
					alt="logo"
					width="127"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/7a8abd35-aa9a-4efe-9f56-46bdfe1cd9dd_clieant+logo+brown_moon+juice.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75"
					alt="logo"
					width="406"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/e6d1d16f-0ec4-4afc-b97a-bd159842046c_clieant+logo+brown_cafe+gratitude.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75"
					alt="logo"
					width="267"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/48c3827c-caff-4b8a-b7e6-8885a68cbc9a_clieant+logo+brown_four+seasions.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75"
					alt="logo"
					width="129"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/0623d79a-a0cd-4820-a911-66c2b98c1ca2_clieant+logo+brown_jk+juices.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75"
					alt="logo"
					width="138"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/dcd44eac-d971-41c8-9300-c92d070df11a_clieant+logo+brown_suja+organic.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75"
					alt="logo"
					width="230"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/d3e9cc16-195f-4f41-93aa-16844f344dc5_clieant+logo+brown_virtue+cider.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
			<div
				class="col-span-1 flex justify-center py-8 border-r border-light-green nth-child-2n:border-transparent md:nth-child-2n:border-light-green md:nth-child-3n:border-transparent md:nth-child-6n:border-none lg:nth-child-3n:border-light-green lg:nth-child-6n:border-transparent odd:pr-2 even:pl-2"
			>
				<img
					class="max-h-[65px] w-full px-8 fill-current object-contain"
					src="https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75"
					alt="logo"
					width="322"
					height="130"
					sizes="(min-width: 2560px) 2560px, 100vw"
					srcset="https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75&amp;width=512 512w, https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75&amp;width=768 768w, https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75&amp;width=1024 1024w, https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75&amp;width=1920 1920w, https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75&amp;width=2560 2560w, https://goodnature.cdn.prismic.io/goodnature/41cd2441-27ec-4ca7-b8b2-4d7cec8de6b4_clieant+logo+brown_beak+and+skiff+1911.svg?q=75&amp;width=2560 2560w"
					draggable="true"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>
<section class="section section-quote theme-light">
	<div class="embla svelte-1ktycq9">
		<div class="embla__container svelte-1ktycq9" style="transform: translate3d(0px, 0px, 0px);">
			<div class="container embla__slide svelte-1ktycq9">
				<blockquote
					class="bg-white p-12 sm:p-20 flex max-lg:flex-col justify-between lg:items-end lg:gap-x-24"
				>
					<div class="max-w-4xl">
						<svg
							class="icon text-light-green w-10 h-10"
							viewBox="0 0 448 512"
							focusable="false"
							id="icon_quote-left"
							role="img"
							aria-hidden="true"
							aria-label="icon_quote-left"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
							></path></svg
						>
						<h2 id="the-best-in-the-game" class="title text-2xl sm:text-3xl mt-6">
							Tinh khiết thật sự
						</h2>
						<div class="text-gray-400 mt-8">
							<p>
								Mình rất khắt khe về chất lượng, nhưng khi dùng sản phẩm của Lemy thì hoàn toàn tin
								tưởng. Sản phẩm rất thuần khiết, phù hợp với mình.
							</p>
						</div>
						<div class="flex items-center gap-3 mt-9 flex-wrap">
							<img
								class="max-h-[60px] max-w-[150px] rounded-full"
								src="https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75"
								alt="Headshot of Amanda Chantel Bacon"
								sizes="(min-width: 2560px) 2560px, 100vw"
								srcset="https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/ef50ac9e-3ca2-4fd8-bac4-daa51df4b123_amanda-chantel-bacon-headshot.png?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w"
								draggable="true"
								loading="lazy"
							/>
							<div class="text-gray-400 max-sm:text-sm">
								<p>Nhung Anna, Giám đốc sáng tạo</p>
							</div>
						</div>
					</div>
					<div class="max-lg:mt-12">
						<a href="/testimonials" class="button button-primary"
							><span>Xem thêm phản hồi</span>
							<svg
								class="icon fill-current icon w-4 h-4"
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
				</blockquote>
			</div>
		</div>
	</div>
</section>
<section class="theme-white pt-24 pb-24">
	<div class="container flex items-start gap-x-12">
		<div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
			{#each $page.data.products.items.slice(0, 4) as product}
				<div>
					<div class="product-card min-h-full">
						<a
							href="/products/{product.slug}"
							id={product.id}
							class="flex-1 group pb-2 w-full h-full }"
							><div
								class="bg-gray-200 group-hover:opacity-90 transition-opacity duration-300 mb-8 aspect-square stack w-full h-full relative"
							>
								<img
									width="800"
									height="800"
									srcset="{HOST_URL}/api/files/{product.collectionName}/{product.id}/{product
										.product_image[0]}"
									alt={product.name}
									class="object-cover absolute top-0 left-0 h-full w-full"
									loading="lazy"
									sizes="100vw"
									style=""
								/>
								<img
									width="800"
									height="800"
									srcset="{HOST_URL}/api/files/{product.collectionName}/{product.id}/{product
										.product_image[1]}"
									alt={product.name}
									class="object-cover aspect-square opacity-0 transition-opacity duration-300 transform hover:opacity-100 h-full w-full"
									loading="lazy"
									sizes="100vw"
									style=""
								/>
								<span
									class="inline-flex items-center px-4 py-1.5 rounded-full rounded-tl-none text-xs font-medium bg-berry text-white absolute top-0"
									>Sale</span
								>
							</div></a
						>
						<h3 class="text-2xl title">{product.name}</h3>
						<div class="flex flex-row justify-between w-full">
							<div class="flex flex-row gap-2 justify-start mb-2">
								{#each product.expand.category_id as category}
									<div class="flex mt-2">
										<span class="bg-violet-100 text-violet-900 p-0.5 px-1 text-xs rounded"
											>{category.name}</span
										>
									</div>
								{/each}
							</div>
							<div class="text-[12px] mt-2"><span>Còn hàng</span></div>
						</div>
						<div class="flex justify-between items-center mb-4 w-full">
							<div class="flex items-center gap-4 text-xl text-storm justify-center w-full">
								<!-- <p class="line-through title">$102.50</p> -->
								{#if product.expand.product_items_via_product_id.length == 1}
									<p class="title !text-berry">
										{product.expand.product_items_via_product_id[0].price.toLocaleString('vi-VN', {
											style: 'currency',
											currency: 'VND'
										})}
									</p>
								{:else}
									<p class="title !text-berry">Giá theo size</p>
								{/if}
							</div>
						</div>
						<div class="w-full justify-center">
							<div class="flex flex-row justify-center h-11">
								<label for="quantity" class="sr-only">Quantity</label>
								<select
									onchange={(e) => {
										selectedQuantity = e.currentTarget.value;
									}}
									name="quantity"
									id="quantity"
									class="w-20 text-sm"
									><option value="1">1</option><option value="2">2</option><option value="3"
										>3</option
									><option value="4">4</option><option value="5">5</option><option value="6"
										>6</option
									><option value="7">7</option><option value="8">8</option><option value="9"
										>9</option
									><option value="10">10</option><option value="11">11</option><option value="12"
										>12</option
									><option value="13">13</option><option value="14">14</option><option value="15"
										>15</option
									><option value="16">16</option><option value="17">17</option><option value="18"
										>18</option
									><option value="19">19</option><option value="20">20</option></select
								>
								{#if product.expand.product_items_via_product_id.length == 1}
									<button
										onclick={() => {
									let productCart: CartItem = {
										SKU: product.expand.product_items_via_product_id[0].SKU,
										price: parseInt(product.expand.product_items_via_product_id[0].price),
										quantity: parseInt(selectedQuantity),
										product: product,
										variationOption: variationOptions.filter((option) => option.id == product.expand.product_items_via_product_id[0].expand.product_config_via_product_items_id.variation_option_id)[0].value
									}
									if ( !cartItem.cartProducts.find((item) => item.SKU === productCart.SKU)) {
										cartItem.addToCart(productCart)
									} else {
										cartItem.updateProductQuantity(product.expand.product_items_via_product_id[0].SKU, parseInt(selectedQuantity))
									}						
									openCheckoutSidebar.value = true
									selectedQuantity = '1'
								}}
										id="add_to_cart"
										class="button button-primary button-primary button-add-cart rounded-l-none"
										>+ Thêm vào giỏ <svg
											class="icon icon w-4 h-4 text-light-green"
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
										></button
									>
								{:else}
									<a
										href="/products/{product.slug}"
										id="add_to_cart"
										class="button button-primary button-primary button-add-cart rounded-l-none"
										>Xem chi tiết <svg
											class="icon icon w-4 h-4 text-light-green"
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
										></a
									>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- <section class="section section-card-grid theme-dark">
		<div class="container px-6 lg:px-8">
			<div
				class="grid gap-12 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 items-stretch grid-cols-1 lg:grid-cols-3"
			>
				<div class="card relative justify-between">
					<div>
						<div class="card-image mb-8 aspect-square custom-filter" style="">
							<img
								class="h-full w-full object-center object-cover"
								src="https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;w=2000&amp;h=2000&amp;q=75"
								alt=""
								sizes="(min-width: 2560px) 2560px, 100vw"
								srcset="https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;h=2000&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;h=2000&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;h=2000&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;h=2000&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;h=2000&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/f54a82c7-9911-4ef4-9cfe-fe40ad482ff6_hand+reaching+for+juice+bottles.jpg?auto=compress%2Cformat&amp;rect=24%2C0%2C2000%2C2000&amp;h=2000&amp;q=75&amp;width=2560 2560w"
								draggable="true"
								loading="lazy"
							/>
						</div>
						<h3 id="commercial-juicing-blog" class="text-3xl title false">
							Commercial Juicing Blog
						</h3>
						<p
							id="hundreds-of-free-articles-about-how-to-start-and-operate-a-successful-juice-business-"
							class="leading-relaxed max-md:text-sm text-gray-500 mt-6 false"
						>
							Hundreds of free articles about how to start and operate a successful juice business.
						</p>
					</div>
					<a href="/blog" class="card-overlay-link">
						<span class="sr-only">[object Object]</span></a
					>
					<span
						class="button button-primary -ml-1 mt-8 self-start justify-self-end pointer-events-none"
						>Got to Blog <svg
							class="icon fill-current icon w-4 h-4"
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
						></span
					>
				</div>
				<div class="card relative justify-between">
					<div>
						<div class="card-image mb-8 aspect-square custom-filter" style="">
							<img
								class="h-full w-full object-center object-cover"
								src="https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75"
								alt="two glasses of cold pressed green juice made with mint, pineapple, green apple and cucumber on a white surface"
								sizes="(min-width: 2560px) 2560px, 100vw"
								srcset="https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/YzM4MWFkMTEtMTg2NC00MTBkLWEzYzItNzE2YWMzOTdkOTll_golden-sweet-green-juice-recipe-square.jpg?auto=compress%2Cformat&amp;q=75&amp;width=2560 2560w"
								draggable="true"
								loading="lazy"
							/>
						</div>
						<h3 id="free-juice-and-smoothie-recipes" class="text-3xl title false">
							Free Juice and Smoothie Recipes
						</h3>
						<p
							id="our-original-chef-created-juice-recipes-are-guaranteed-to-be-delicious-and-nutritious-"
							class="leading-relaxed max-md:text-sm text-gray-500 mt-6 false"
						>
							Our original chef-created juice recipes are guaranteed to be delicious and nutritious.
						</p>
					</div>
					<a href="/recipes" class="card-overlay-link">
						<span class="sr-only">[object Object]</span></a
					>
					<span
						class="button button-primary -ml-1 mt-8 self-start justify-self-end pointer-events-none"
						>Go to Recipes <svg
							class="icon fill-current icon w-4 h-4"
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
						></span
					>
				</div>
				<div class="card relative justify-between">
					<div>
						<div class="card-image mb-8 aspect-square custom-filter" style="">
							<img
								class="h-full w-full object-center object-cover"
								src="https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;w=667&amp;h=667&amp;q=75"
								alt="Moon Juice shop - inside"
								sizes="(min-width: 2560px) 2560px, 100vw"
								srcset="https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;h=667&amp;q=75&amp;width=512 512w, https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;h=667&amp;q=75&amp;width=768 768w, https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;h=667&amp;q=75&amp;width=1024 1024w, https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;h=667&amp;q=75&amp;width=1920 1920w, https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;h=667&amp;q=75&amp;width=2560 2560w, https://images.prismic.io/goodnature/MmJlNDc5NmUtY2UzZi00NzNlLWEzNGUtYzE3MGY2ZWVhNjFj_moon-juice-cold-pressed-juicer-2529.jpg?auto=compress%2Cformat&amp;rect=201%2C0%2C667%2C667&amp;h=667&amp;q=75&amp;width=2560 2560w"
								draggable="true"
								loading="lazy"
							/>
						</div>
						<h3 id="juice-business-consulting" class="text-3xl title false">
							Juice Business Consulting
						</h3>
						<p
							id="goodnature-has-helped-hundreds-of-juice-bars-juice-delivery-and-wholesale-juice-businesses-startup-and-scale-"
							class="leading-relaxed max-md:text-sm text-gray-500 mt-6 false"
						>
							Goodnature has helped hundreds of juice bars, juice delivery, and wholesale juice
							businesses startup and scale.
						</p>
					</div>
					<a href="/consulting" class="card-overlay-link">
						<span class="sr-only">[object Object]</span></a
					>
					<span
						class="button button-primary -ml-1 mt-8 self-start justify-self-end pointer-events-none"
						>Get Consulting <svg
							class="icon fill-current icon w-4 h-4"
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
						></span
					>
				</div>
			</div>
		</div>
	</section> -->
<section class="section theme-light text-center">
	<div class="container">
		<div class="flex flex-col justify-center">
			<h2 id="let-s-talk" class="title text-4xl sm:text-5xl">Tư vấn</h2>
			<div class="mt-6 text-storm space-y-4 rich-text">
				<p>Bạn cần nói chuyện với bộ phận chăm sóc khách hàng?</p>
			</div>
			<div class="mt-12 flex justify-center flex-wrap gap-6">
				<a href="https://m.me/249847884884471" target="_blank" class="button button-primary"
					><span>Chat với chúng tôi</span>
					<svg
						class="icon fill-current icon w-4 h-4"
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
</section>
