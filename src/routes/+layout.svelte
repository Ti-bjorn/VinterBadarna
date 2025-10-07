<!-- src/routes/+layout.svelte -->
<script>
	import "../app.css";
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<div class="min-h-screen flex flex-col">

	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
