<script>
	export let data;

	const sections = data.sections;
</script>

<svelte:head>
	<title>{data.name}</title>
	<meta name="description" content="Rodrigo de Lemos - Dog Grooming" />
</svelte:head>

{#if sections && sections.length}
	{#each sections as section}
		<section
			style={`
			background-image: url('${section.background}');
			min-height: ${100 / sections.length}vh;
		`}
		>
			<h1>{section.header}</h1>
		</section>
	{/each}
{:else}
	<p>No sections found.</p>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-position: center;
		background-size: cover;
	}

	h1 {
		width: 100%;
	}
</style>
