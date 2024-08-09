<script lang="ts">
	import { HOST_URL, MAIN_URL } from '$lib';
	let { productDetail } = $props<{ productDetail: Product }>();
	let activeTabImage = $state(0);
	let mouseX = $state(0);
	let mouseY = $state(0);
	let cx = $state(1);
	let cy = $state(1);
	let zoomLens: HTMLElement = $state()!;
	let zoomResult: HTMLElement = $state()!;
	let imageContainer: HTMLElement = $state()!;
	let img: HTMLImageElement = $state()!;
	let ratio = $state(1);
	let scale = $state(1)!;
	let display = $state('hidden');
	// get div image size
	const getCursorPos = (e: MouseEvent) => {
		const a = imageContainer.getBoundingClientRect();
		const x = e.clientX - a.left;
		const y = e.clientY - a.top;
		return { x, y };
	};
	const moveLens = (e: MouseEvent) => {
		e.preventDefault();
		const pos = getCursorPos(e);
		const lensWidth = zoomLens.offsetWidth / 2;
		const lensHeight = zoomLens.offsetHeight / 2;
		// Calculate the position of the lens
		mouseX = pos.x - lensWidth;
		mouseY = pos.y - lensHeight;
		cx = zoomResult.offsetWidth / imageContainer.offsetWidth;
		cy = zoomResult.offsetHeight / imageContainer.offsetHeight;
		// scale
		scale = imageContainer.offsetWidth / zoomLens.offsetWidth;
		// Prevent the lens from being positioned outside the image
		if (mouseX > imageContainer.offsetWidth - lensWidth * 2)
			mouseX = imageContainer.offsetWidth - lensWidth * 2;
		if (mouseX < 0) mouseX = 0;
		if (mouseY > imageContainer.offsetHeight - lensHeight * 2)
			mouseY = imageContainer.offsetHeight - lensHeight * 2;
		if (mouseY < 0) mouseY = 0;
	};
</script>

<div class="col-span-4 order-1 theme-white">
	<p class="lg:hidden text-md text-storm">{productDetail.name}</p>
	<div class="flex flex-col-reverse max-sm:hidden relative">
		<div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
			<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
				{#each productDetail.product_image as image, index}
					<button
						onclick={() => (activeTabImage = index)}
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
								alt={productDetail.name}
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
				<div
					bind:this={imageContainer}
					onpointermove={(e) => moveLens(e)}
					onpointerdown={(e) => moveLens(e)}
					onpointerenter={() => (display = 'block')}
					onpointerleave={() => (display = 'hidden')}
					role="group"
					class="sm:rounded-sm overflow-hidden relative"
				>
					<img
						bind:this={img}
						width="1280"
						height="720"
						srcset="{HOST_URL}/api/files/{productDetail.collectionName}/{productDetail.id}/{productDetail
							.product_image[activeTabImage]}"
						alt=""
						class="w-full h-full object-center object-cover bg-[#e7e7e7]"
						loading="lazy"
						sizes="100vw"
						style=""
					/>
					<div
						bind:this={zoomLens}
						class="{display} absolute top-0 left-0 h-1/2 aspect-square bg-[url('/assets/images/tile.webp')] max-lg:hidden cursor-crosshair"
						style="transform: translate({mouseX}px, {mouseY}px);"
					></div>
				</div>
			</div>
		</div>
		<div
			bind:this={zoomResult}
			class="{display} absolute top-0 bottom-0 left-full translate-x-6 h-full aspect-square rounded-sm overflow-hidden max-lg:hidden"
		>
			<img
				width="1280"
				height="720"
				srcset="{HOST_URL}/api/files/{productDetail.collectionName}/{productDetail.id}/{productDetail
					.product_image[activeTabImage]}"
				alt={productDetail.name}
				class="object-cover bg-[#e7e7e7] origin-top-left"
				loading="lazy"
				sizes="100vw"
				style=" transform: scale({scale}) translate({-mouseX * cx}px, {-mouseY * cx}px);"
			/>
		</div>
	</div>
	<div class="overflow-hidden sm:hidden">
		<div class="flex gap-x-5" style="transform: translate3d(0px, 0px, 0px);">
			{#each productDetail.product_image as image}
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
</div>
