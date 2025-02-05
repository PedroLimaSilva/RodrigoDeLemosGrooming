import LandingImage from "../assets/Rodrigo_Landing.png";

export function Landing() {
  return (
    <section className="Landing">
      <img src={LandingImage} alt="Rodrigo holding a happy Cocker Spaniel" />
      <div className="container">
        <h1>Rodrigo De Lemos</h1>
        <p>Dog Grooming Services</p>
        <a className="button" href="tel:+351935871091">
          Book an Appointment
        </a>
      </div>
    </section>
  );
}
