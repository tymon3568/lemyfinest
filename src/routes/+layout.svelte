<script lang="ts">
	import Footer from '$lib/Components/Header/Footer.svelte';
	import Header from '$lib/Components/Header/Header.svelte';
	import SidebarModal from '$lib/Components/checkoutSidebarModal/checkoutSidebarModal.svelte';
	import '../app.css';
	import '../custom.css';
	import { openCheckoutSidebar } from '$lib/runes/global.svelte';
	import { Toaster } from 'svelte-sonner';
</script>

<Header />
<Toaster
	position="bottom-center"
	richColors
	toastOptions={{
		class: 'rounded-sm'
	}}
/>
<main>
	<slot />
</main>
<Footer />
<SidebarModal bind:show={openCheckoutSidebar.value} />
