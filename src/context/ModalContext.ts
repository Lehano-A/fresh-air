import { createContext } from 'react';

const ModalContext = createContext({
  changeVisibility: {
    contactWithUs: () => {},
    callMeBack: () => {},
  },
});

export default ModalContext;
