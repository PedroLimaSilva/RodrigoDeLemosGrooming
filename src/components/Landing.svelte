<section class="Landing">
	<img src="./Rodrigo_Landing.png" alt="Rodrigo holding a happy Cocker Spaniel" srcset="" />
	<div class="container">
		<h1>Rodrigo De Lemos</h1>
		<p>Dog Grooming Services</p>
		<button>Book an Appointment</button>
	</div>
</section>

<style>
	.Landing {
		min-height: 95vh;
		background: var(--color-theme-1);
		background: linear-gradient(45deg, var(--color-theme-2) 0%, var(--color-theme-1) 100%);
		color: var(--color-text-dark);
		position: relative;
		display: flex;
		align-items: flex-start;
	}

	@media (min-width: 720px) {
		.Landing {
			align-items: flex-end;
		}
	}

	.Landing .container {
		position: relative;
		flex: 1;
	}

	.Landing img {
		position: absolute;
		max-width: 80%;
		max-height: 80%;
		right: 0;
		bottom: 0;
	}

	h1 {
		font-weight: bold;
		font-size: 10vh;
		margin: 0;
		line-height: 1.1em;
	}

	p {
		font-weight: lighter;
		font-size: 2rem;
		line-height: 1em;
		margin: 0.5em 0 1em;
	}
</style>
