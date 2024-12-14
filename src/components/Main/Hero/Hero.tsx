import Slogan from './Slogan/Slogan';
import ButtonAction from '../../common/ButtonAction/ButtonAction';
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

          <ButtonAction
            name='оставить заявку'
            size='xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
