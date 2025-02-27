import testimonialImage from '../assets/Testimonial.png';

function Item(props) {
  const { align, src, headline, signature } = props;
  return (
    <article
      className={`TestimonialItem ${align} min-h-[30vh] p-[2rem] grid grid-cols-1 md:grid-cols-2 items-center`}
    >
      <img src={src} alt='' className='w-full h-auto rounded-2xl mb-6' />
      <div>
        <h2 className='font-bold text-4xl'>{headline}</h2>
        <p className='text-xl'>{signature}</p>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className='Testimonials bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300'>
      <div className='container'>
        <Item
          align='left'
          src={testimonialImage}
          headline={`“My poodle loves to play in the mud, but Rodrigo can always clean and
          care for his coat”`}
          signature={`Gabriela, and her toy Poodle, Jorge`}
        />
        <Item
          align='right'
          src={testimonialImage}
          headline={`“My poodle loves to play in the mud, but Rodrigo can always clean and
          care for his coat”`}
          signature={`Gabriela, and her toy Poodle, Jorge`}
        />
      </div>
    </section>
  );
}
