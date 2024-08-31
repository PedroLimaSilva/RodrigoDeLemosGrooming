<script>
	import { page } from '$app/stores';
</script>

<header class="Navigation glass">
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
	</ul>
</header>

<style>
	.Navigation {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		--background: rgba(255, 255, 255, 0.7);
	}
	.Navigation.glass {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	ul a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	ul li[aria-current='page'] > a {
		color: var(--color-theme-1);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
