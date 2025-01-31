import { createContext } from 'react';

const ModalContext = createContext({
  changeModalVisibility: {
    contactWithUs: () => {},
    callMeBack: () => {},
  },
});

export default ModalContext;
