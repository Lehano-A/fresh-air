import Slogan from './Slogan/Slogan';
import ButtonAction from '../../common/ButtonAction/ButtonAction';
import CompanyActivities from './CompanyActivities/CompanyActivities';
import Contacts from './Contacts/Contacts';
import { useContext } from 'react';
import ModalContext from '../../../context/ModalContext';

function Hero() {
  const { changeModalVisibility } = useContext(ModalContext);

  return (
    <section className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__info'>
          <Slogan />
          <CompanyActivities />
          <Contacts />

          <ButtonAction
            name='оставить заявку'
            size='xl'
            handleOnClick={changeModalVisibility.callMeBack}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
