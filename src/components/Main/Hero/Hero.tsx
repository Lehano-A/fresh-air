import Slogan from './Slogan/Slogan';
import ButtonSubmit from '../../common/ButtonSubmit/ButtonSubmit';
import CompanyActivities from './CompanyActivities/CompanyActivities';
import Contacts from './Contacts/Contacts';

function Hero() {
  return (
    <section className='hero mb-100'>
      <div className='hero__wrapper'>
        <div className='hero__info'>
          <Slogan />
          <CompanyActivities />
          <Contacts />

          <ButtonSubmit
            name='оставить заявку'
            variant='xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
