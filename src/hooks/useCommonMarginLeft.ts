import { useContext } from 'react';
import CommonMarginLeftContext from '../context/CommonMarginLeftContext';
import InnerWidthWindowContext from '../context/InnerWidthWindowContext';

function useCommonMarginLeft() {
  const commonMarginLeft = useContext(CommonMarginLeftContext);
  const innerWidthWindow = useContext(InnerWidthWindowContext);

  return function setCommonMarginLeft(
    refElement: React.RefObject<HTMLElement>,
    breakpoint: number,
  ) {
    if (refElement.current) {
      const element = refElement.current;

      if (innerWidthWindow >= breakpoint) {
        element.style.marginLeft = commonMarginLeft;
      } else {
        element.style.marginLeft = '0';
      }
    }
  };
}

export default useCommonMarginLeft;
