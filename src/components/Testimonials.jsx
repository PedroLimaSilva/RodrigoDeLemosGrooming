import testimonialImage from "../assets/Testimonial.png";

function Item(props) {
  const { align, src, headline, signature } = props;
  return (
    <article className={`TestimonialItem ${align}`}>
      <img src={src} alt="" />
      <div>
        <h2>{headline}</h2>
        <p>{signature}</p>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="Testimonials">
      <div className="container">
        <Item
          align="left"
          src={testimonialImage}
          headline={`“My poodle loves to play in the mud, but Rodrigo can always clean and
          care for his coat”`}
          signature={`Gabriela, and her toy Poodle, Jorge`}
        />
        <Item
          align="right"
          src={testimonialImage}
          headline={`“My poodle loves to play in the mud, but Rodrigo can always clean and
          care for his coat”`}
          signature={`Gabriela, and her toy Poodle, Jorge`}
        />
      </div>
    </section>
  );
}
