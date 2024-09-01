<script>
	// import Header from '../components/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		width: 100%;
		margin: 0 auto;
	}
</style>
