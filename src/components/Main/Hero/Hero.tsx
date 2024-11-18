import Slogan from './Slogan/Slogan';
import ButtonSubmit from '../../common/ButtonSubmit/ButtonSubmit';
import CompanyActivities from './CompanyActivities/CompanyActivities';
import Contacts from './Contacts/Contacts';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__box'>
        <section className='hero__info'>
          <div>
            <Slogan />
            <CompanyActivities />
            <Contacts />
            <ButtonSubmit
              name='оставить заявку'
              variant='xl'
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
