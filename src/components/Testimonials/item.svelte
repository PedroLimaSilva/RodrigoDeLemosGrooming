<script>
	/**
	 * @type {string}
	 */
	export let image;
	/**
	 * @type {string}
	 */
	export let quote;
	/**
	 * @type {string}
	 */
	export let author;
	/**
	 * @type {'left'|'right'}
	 */
	export let layout;
</script>

<article class={'TestimonialItem ' + layout}>
	<img src={image} alt="" srcset="" />
	<div>
		<h2>
			“{quote}”
		</h2>
		<p>{author}</p>
	</div>
</article>

<style>
	.TestimonialItem {
		padding: 2rem 2rem;
		min-height: 60vh;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-items: center;
		gap: 0;
	}

	h2 {
		font-size: 45px;
	}

	p {
		font-size: 22px;
		font-weight: bold;
	}

	img {
		width: 100%;
		height: auto;
		max-width: 100%;
		border-radius: 42px;
	}

	@media (min-width: 720px) {
		.TestimonialItem {
			grid-template-columns: 1fr 2fr;
			gap: 5vw;
		}

		.right {
			grid-template-columns: 2fr 1fr;
		}

		.right img {
			order: 2;
		}
	}
</style>
