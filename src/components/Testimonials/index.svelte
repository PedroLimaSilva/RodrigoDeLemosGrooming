<script>
	import Item from './item.svelte';
</script>

<section class="Testimonials">
	<div class="container">
		<Item
      layout={'left'}
			author={'Gabriela, and her toy Poodle, Jorge'}
			image={'/Testimonial.png'}
			quote={'My poodle loves to play in the mud, but Rodrigo can always clean and care for his coat'}
		/>
    <Item
      layout={'right'}
			author={'Gabriela, and her toy Poodle, Jorge'}
			image={'/Testimonial.png'}
			quote={'My poodle loves to play in the mud, but Rodrigo can always clean and care for his coat'}
		/>
	</div>
</section>

<style>
	.Testimonials .container {
		padding: 0;
	}
</style>
