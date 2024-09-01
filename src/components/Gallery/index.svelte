<script>
</script>

<section class="Gallery">
	<div class="Gallery-row">
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
	</div>
	<div class="Gallery-row">
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
		<div class="thumbnail">
			<img alt="placeholder" src="placeholder.png" />
		</div>
	</div>
</section>

<style>
	.Gallery {
		padding: 2rem 0;
	}

	.Gallery-row {
		display: flex;
		padding: 0 2rem;
		overflow-x: auto;
		margin-bottom: 2rem;
	}

	.thumbnail {
		height: 40vh;
		width: 30vh;
		min-height: 40vh;
		min-width: 30vh;
		overflow: hidden;
		border-radius: 36px;
		margin-right: 2rem;
	}

	.thumbnail:last-child {
		margin-right: 0;
	}

	.thumbnail img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
</style>
