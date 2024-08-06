<script lang="ts">
	import { page } from '$app/stores';
	import { HOST_URL, variationOptions } from '$lib';
	import { cartItems, openCheckoutSidebar } from '$lib/runes/global.svelte';
	console.log('🚀 ~ $page.data.product:', $page.data.products);
	const cartItem = cartItems();
	let selectedQuantity = $state('1');
	// $inspect('quantity', selectedQuantity);
</script>

<header class="section section-photo-hero theme-dark pb-24 false false">
	<div class="overlay-image absolute inset-0 bg-center bg-cover">
		<img
			width="1280"
			height="720"
			srcset="/_vercel/image?url=https%3A%2F%2Fcdn.raster.app%2Fgoodnature%2Fstock-photos%2FZJ6yMqygYn%3Fixlib%3Djs-3.7.0%26height%3D902%26width%3D1500%26rect%3D0%252C0%252C5184%252C902%26fit%3Dcrop%26compress%3Dfalse%26ar%3D5.747228381374723%26s%3D8780c2b194efb8a200fce57a03d7b48f&amp;w=640&amp;q=70 640w,/_vercel/image?url=https%3A%2F%2Fcdn.raster.app%2Fgoodnature%2Fstock-photos%2FZJ6yMqygYn%3Fixlib%3Djs-3.7.0%26height%3D902%26width%3D1500%26rect%3D0%252C0%252C5184%252C902%26fit%3Dcrop%26compress%3Dfalse%26ar%3D5.747228381374723%26s%3D8780c2b194efb8a200fce57a03d7b48f&amp;w=768&amp;q=70 768w,/_vercel/image?url=https%3A%2F%2Fcdn.raster.app%2Fgoodnature%2Fstock-photos%2FZJ6yMqygYn%3Fixlib%3Djs-3.7.0%26height%3D902%26width%3D1500%26rect%3D0%252C0%252C5184%252C902%26fit%3Dcrop%26compress%3Dfalse%26ar%3D5.747228381374723%26s%3D8780c2b194efb8a200fce57a03d7b48f&amp;w=1024&amp;q=70 1024w,/_vercel/image?url=https%3A%2F%2Fcdn.raster.app%2Fgoodnature%2Fstock-photos%2FZJ6yMqygYn%3Fixlib%3Djs-3.7.0%26height%3D902%26width%3D1500%26rect%3D0%252C0%252C5184%252C902%26fit%3Dcrop%26compress%3Dfalse%26ar%3D5.747228381374723%26s%3D8780c2b194efb8a200fce57a03d7b48f&amp;w=1280&amp;q=70 1280w,/_vercel/image?url=https%3A%2F%2Fcdn.raster.app%2Fgoodnature%2Fstock-photos%2FZJ6yMqygYn%3Fixlib%3Djs-3.7.0%26height%3D902%26width%3D1500%26rect%3D0%252C0%252C5184%252C902%26fit%3Dcrop%26compress%3Dfalse%26ar%3D5.747228381374723%26s%3D8780c2b194efb8a200fce57a03d7b48f&amp;w=1536&amp;q=70 1536w"
			alt="Background image"
			class="object-cover h-full w-full"
			loading="lazy"
			sizes="100vw"
			style=""
		/>
	</div>
	<div class="container relative z-10 flex flex-col gap-6">
		<div class="flex flex-row gap-2">
			<a
				class="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
				data-sveltekit-preload-data=""
				href="/products"
				><svg
					class="icon w-2"
					viewBox="0 0 320 512"
					focusable="false"
					id="icon_chevron-left"
					role="img"
					aria-hidden="true"
					aria-label="icon_chevron-left"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"
					></path></svg
				> Sản phẩm</a
			>
			<span class="flex items-center gap-2 text-white/40"
				><svg
					class="icon w-2"
					viewBox="0 0 320 512"
					focusable="false"
					id="icon_chevron-left"
					role="img"
					aria-hidden="true"
					aria-label="icon_chevron-left"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"
					></path></svg
				> Tinh dầu</span
			>
		</div>
		<h1 class="text-5xl title"><a href="/products">Tinh dầu thiên nhiên</a></h1>
	</div>
</header>
<!-- <section class="section theme-white pt-12 pb-4 sticky top-20 z-20">
	<div class="container flex items-center justify-between gap-2 md:gap-5">
		<button class="button button-tertiary w-28 md:w-40"
			><svg
				class="icon h-4 w-4 text-dark-green max-sm:hidden"
				viewBox="0 0 512 512"
				focusable="false"
				id="icon_filter"
				role="img"
				aria-hidden="true"
				aria-label="icon_filter"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M0 73.7C0 50.7 18.7 32 41.7 32H470.3c23 0 41.7 18.7 41.7 41.7c0 9.6-3.3 18.9-9.4 26.3L336 304.5V447.7c0 17.8-14.5 32.3-32.3 32.3c-7.3 0-14.4-2.5-20.1-7l-92.5-73.4c-9.6-7.6-15.1-19.1-15.1-31.3V304.5L9.4 100C3.3 92.6 0 83.3 0 73.7zM55 80L218.6 280.8c3.5 4.3 5.4 9.6 5.4 15.2v68.4l64 50.8V296c0-5.5 1.9-10.9 5.4-15.2L457 80H55z"
				></path></svg
			> Machine</button
		>
		<form
			class="relative rounded-full h-12 bg-gray-light flex items-center backdrop-blur-md flex-1 max-w-[400px]"
		>
			<label for="recipe-search" class="sr-only">Search products</label>
			<svg
				class="icon h-4 w-4 text-storm ml-5"
				viewBox="0 0 512 512"
				focusable="false"
				id="icon_magnifying-glass"
				role="img"
				aria-hidden="true"
				aria-label="icon_magnifying-glass"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"
				></path></svg
			>
			<input
				type="search"
				placeholder="Search for products..."
				class="input absolute max-md:text-sm max-md:border-0 inset-0 md:inset-x-6 !bg-transparent flex-1 pl-12"
			/>
		</form>
		<label class="ml-auto"
			><span class="sr-only">Sort by</span>
			<select name="" class="text-xs md:text-sm max-md:w-20"
				><option value="none">Sort by... </option><option value="popularity"
					>Popular
				</option><option value="price-asc">Price: Low to High </option><option value="price-desc"
					>Price: High to Low
				</option></select
			></label
		>
	</div>
</section> -->
<section class="theme-white pt-24 pb-24 min-h-[800px]">
	<div class="container flex items-start gap-x-12">
		<!-- <aside class="max-md:inset-x-0 top-48 bottom-0 max-md:z-50 max-md:bg-white md:w-64 md:flex-shrink-0 fixed md:sticky md:top-38 max-md:px-6" style=""><h2 class="title text-xl mb-6">Filter by Machine</h2> <ul class="flex flex-col gap-2"><li><label class="flex items-center gap-3"><input type="radio" name="category" value="m1-parts"> <span class="text-charcoal">M-1 Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="x1-mini-parts"> <span class="text-charcoal">X-1 Mini Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="x1-parts"> <span class="text-charcoal">X-1 Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="x6-parts"> <span class="text-charcoal">X-6 Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="maximizer-parts"> <span class="text-charcoal">Maximizer Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="sx280-parts"> <span class="text-charcoal">SX-280 Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="ct7-parts"> <span class="text-charcoal">CT-7 Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="eg260-parts"> <span class="text-charcoal">EG-260 Grinder Parts</span></label> </li><li><label class="flex items-center gap-3"><input type="radio" name="category" value="parts-and-bags-hummingbird-parts"> <span class="text-charcoal">Hummingbird Parts</span></label> </li></ul></aside> -->
		<div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
			{#each $page.data.products.items as product}
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
