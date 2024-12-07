import { createContext } from 'react';

const InnerWidthWindowContext = createContext({
  prevInnerWidth: 0,
  innerWidth: window.innerWidth,
});

export default InnerWidthWindowContext;
