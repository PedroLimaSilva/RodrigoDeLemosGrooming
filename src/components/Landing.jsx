import LandingImage from '../assets/Rodrigo_Landing.png';

export function Landing() {
  return (
    <section className='Landing h-[95vh] relative flex md:items-end items-start text-(--color-text-dark)'>
      <img
        src={LandingImage}
        alt='Rodrigo holding a happy Cocker Spaniel'
        className='absolute max-h-[80%] max-w-[80%] right-0 bottom-0'
      />
      <div className='container absolute mx-auto max-w-[1080px] inset-0'>
        <h1 className='font-bold text-6xl md:text-8xl my-4'>Rodrigo De Lemos</h1>
        <p className='font-thin text-3xl md:text-5xl mb-16'>Dog Grooming Services</p>
      </div>
      <div className='container absolute mx-auto max-w-[1080px] inset-0'>
        <a className='button absolute bottom-8' href='https://api.whatsapp.com/send?phone=+351935871091'>
          Book an Appointment
        </a>
      </div>
    </section>
  );
}
