<script lang="ts">
	import { page } from '$app/stores';
	import ZoomImage from '$lib/Components/zoomImage.svelte';
	import { cartItems, openCheckoutSidebar } from '$lib/runes/global.svelte';
	import { toast } from 'svelte-sonner';
	const productDetail: Product = $derived($page.data.productDetail);
	const getVariationOptions = (data: Product): VariationOption[] => {
		const variationOptions: VariationOption[] = [];
		data.expand.category_id?.forEach((category) => {
			category.expand?.variation_via_category_id?.forEach((variation) => {
				variation.expand.variation_option_via_variation_id?.forEach((option) => {
					variationOptions.push(option);
				});
			});
		});
		return variationOptions;
	};
	const variationOptions = $derived.by(() => getVariationOptions(productDetail));
	let selectedVariation = $state('');
	let selectedVariationsName = $state('');
	let selectedQuantity = $state('1');
	let priceSelected = $derived.by(() => {
		let price: number | string | null = 'Chọn dung tích!';
		if (selectedVariation) {
			productDetail.expand.product_items_via_product_id.forEach((product) => {
				if (
					product.expand.product_config_via_product_items_id.variation_option_id ==
					selectedVariation
				) {
					price = product.price;
				}
			});
		}
		return price;
	});
	let SKU = $derived.by(() => {
		let SKU: string | null = '';
		if (selectedVariation) {
			productDetail.expand.product_items_via_product_id.forEach((product) => {
				if (
					product.expand.product_config_via_product_items_id.variation_option_id ==
					selectedVariation
				) {
					SKU = product.SKU;
				}
			});
		}
		console.log('🚀 ~ SKU ~ SKU:', SKU);
		return SKU;
	});
	const cartItem = cartItems();
</script>

<section class="section pt-32 md:pt-40 theme-light">
	<div class="container items-center gap-2 text-sm flex-wrap mb-2 hidden xl:flex">
		<a href="/san-pham">Sản phẩm</a>
		<p class="flex items-center gap-2 whitespace-nowrap">
			<svg
				class="icon w-3 h-3"
				viewBox="0 0 320 512"
				focusable="false"
				id="icon_slash-forward"
				role="img"
				aria-hidden="true"
				aria-label="icon_slash-forward"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M312.2 2.3c7.6 4.5 10 14.4 5.5 22l-288 480c-4.5 7.6-14.4 10-22 5.5s-10-14.4-5.5-22l288-480c4.5-7.6 14.4-10 22-5.5z"
				></path></svg
			> <span>{productDetail.name}</span>
		</p>
	</div>
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-start container theme-white py-8">
		<!-- <div class="col-span-4 order-1 theme-white">
				<p class="lg:hidden text-md text-storm">{productDetail.name}</p>
				<div class="flex flex-col-reverse max-sm:hidden relative">
					<div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
						<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
							{#each productDetail.product_image as image, index }
							<button
							onclick="{() => (activeTabImage = index)}"
							id="tabs-1-tab-1"
							class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none"
							aria-controls="tabs-1-panel-1"
							role="tab"
							type="button"
							><span class="sr-only">Angled view</span>
							<span class="absolute inset-0 rounded-md overflow-hidden"
								><img
									width="1280"
									height="720"
									srcset="{HOST_URL}/api/files/{productDetail.collectionName}/{productDetail.id}/{image}"
									alt="{productDetail.name}"
									class="w-full h-full object-center object-contain"
									loading="lazy"
									sizes="100vw"
									style=""
								/></span
							>
							<span
								class="absolute inset-0 rounded-sm ring-2 ring-storm ring-opacity-10 ring-offset-2 pointer-events-none"
								aria-hidden="true"
							></span>
						</button>
							{/each}
						</div>
					</div>
					<div class="w-full aspect-square bg-gray relative sm:rounded-lg">
						<div
							id="tabs-1-panel-1"
							aria-labelledby="tabs-1-tab-1"
							role="tabpanel"
							tabindex="0"
							style="position: relative;"
						>
							<div class="sm:rounded-lg overflow-hidden relative">
								<img
									width="1280"
									height="720"
									srcset="{HOST_URL}/api/files/{productDetail.collectionName}/{productDetail.id}/{productDetail.product_image[activeTabImage]}"
									alt=""
									class="w-full h-full object-center object-cover bg-[#e7e7e7]"
									loading="lazy"
									sizes="100vw"
									style=""
								/>
							</div>
							<iframe
								style="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
								aria-hidden="true"
								tabindex="-1"
								src="about:blank"
							></iframe>
						</div>
					</div>
					<iframe
						style="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
						aria-hidden="true"
						tabindex="-1"
						src="about:blank"
					></iframe>
				</div>
				<div class="overflow-hidden sm:hidden">
					<div class="flex gap-x-5" style="transform: translate3d(0px, 0px, 0px);">
						{#each productDetail.product_image as image }
						<img
							width="1280"
							height="720"
							srcset="{HOST_URL}/api/files/{productDetail.collectionName}/{productDetail.id}/{image}"
							alt=""
							class="w-full aspect-square object-center object-cover sm:rounded-lg bg-[#e7e7e7] shrink-0"
							loading="lazy"
							sizes="100vw"
							style=""
						/>
						{/each}
					</div>
				</div>
				<div class="flex justify-center mt-4 gap-x-0.5 sm:hidden">
					<button class="p-2 inline-flex"
						><span class="sr-only">go to image 1 in image carousel</span>
						<span class="w-2.5 h-2.5 rounded-full bg-gray-900"></span>
					</button><button class="p-2 inline-flex"
						><span class="sr-only">go to image 2 in image carousel</span>
						<span class="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
					</button>
				</div>
			</div> -->
		<ZoomImage {productDetail} />
		<div class="col-span-3 order-last theme-white">
			<div class="flex flex-col gap-8 text-center pt-6">
				<div class="flex gap-x-4 items-center text-eerie m-auto">
					<p class="tracking-tight text-2xl" id="priceShown">
						{(priceSelected as unknown as number).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
					</p>
				</div>
				<div class="flex flex-col gap-2">
					<div class="grid grid-cols-4 gap-2">
						{#each variationOptions as variation}
							<button
								class="border p-2 border-smoke text-sm text-eerie {selectedVariation ===
								variation.id
									? 'bg-gray-light'
									: ''}"
								onclick={() => {
									selectedVariation = variation.id;
									selectedVariationsName = variation.value;
								}}>{variation.value}</button
							>
						{/each}
					</div>
				</div>
				<div class="flex items-end gap-x-8">
					<div class="w-full justify-center">
						<div class="flex flex-row justify-center h-11">
							<label for="quantity" class="sr-only">Quantity</label>
							<select
								bind:value={selectedQuantity}
								name="quantity"
								id="quantity"
								class="w-20 text-sm"
								><option selected value="1">1</option><option value="2">2</option><option value="3"
									>3</option
								><option value="4">4</option><option value="5">5</option><option value="6">6</option
								><option value="7">7</option><option value="8">8</option><option value="9">9</option
								><option value="10">10</option><option value="11">11</option><option value="12"
									>12</option
								><option value="13">13</option><option value="14">14</option><option value="15"
									>15</option
								><option value="16">16</option><option value="17">17</option><option value="18"
									>18</option
								><option value="19">19</option><option value="20">20</option></select
							>
							<button
								onclick={() => {
										if (priceSelected == 'Chọn dung tích!') {
											toast.info('Vui lòng chọn dung tích!')
											return
										}
										let product: CartItem = {
											SKU: SKU,
											price: parseInt(priceSelected),
											quantity: parseInt(selectedQuantity),
											product: productDetail,
											variationOption: selectedVariationsName
										}
										if ( !cartItem.cartProducts.find((item) => item.SKU === product.SKU)) {
											cartItem.addToCart(product)
										} else {
											cartItem.updateProductQuantity(SKU, parseInt(selectedQuantity))
										}						
										openCheckoutSidebar.value = true
									}}
								id="add_to_cart"
								class="button button-primary button-primary button-add-cart rounded-l-none"
								>Thêm vào giỏ <svg
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
						</div>
					</div>
				</div>
				<div class="m-auto">
					<h3 class="text-xl text-eerie title">Chi tiết vận chuyển</h3>
					<ul class="m-auto max-w-[250px] pl-2">
						<li>
							<div class="max-w-sm py-2 gap-2 text-sm">
								<div class="grid grid-cols-2">
									<div class="flex flex-row gap-4">
										<h3 class="!text-storm sm:block">Giá ship</h3>
									</div>
									<span class="text-eerie text-sm text-left max-w-[150px]"
										>Miễn PHÍ cho tổng giá trị đơn hàng trên 500.000đ.</span
									>
								</div>
							</div>
						</li>
						<li>
							<div class="max-w-sm py-2 gap-2 text-sm">
								<div class="grid grid-cols-2">
									<div class="flex flex-row gap-4">
										<h3 class="!text-storm sm:block">Giao hàng</h3>
									</div>
									<span class="text-eerie text-sm text-left max-w-[150px]">Toàn quốc</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="-mt-8">
					<div class="bg-gray-light text-eerie px-4 py-3 mt-10" role="alert">
						<p class="font-bold text-left">Ghi chú</p>
						<p class="text-sm text-left">Giá trên chưa bao gồm thuế và phí vận chuyển.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-5 order-2 theme-white">
			<div class="text-charcoal">
				<h1 class="text-3xl tracking-tight font-serif mt-9">
					{productDetail.name}
				</h1>
				<div class="flex space-x-2 items-center w-full mt-2"></div>
				<div class="flex flex-row gap-2 justify-start mt-11">
					{#each productDetail.expand.category_id as category}
						<span class="bg-violet-100 text-violet-900 p-2 text-xs rounded">{category.name}</span>
					{/each}
				</div>
				<p class="rich-text text-gray-700 mt-11">{@html productDetail.description}</p>
			</div>
		</div>
	</div>
</section>
