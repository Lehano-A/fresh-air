import React from 'react';
import ButtonAction, {
  ButtonProps,
} from '../../common/ButtonAction/ButtonAction';

interface ButtonMenuProps {
  handleOnClick: ButtonProps['handleOnClick'];
}
function ButtonMenu({ handleOnClick }: ButtonMenuProps) {
  return (
    <ButtonAction
      size='xs'
      layout='navigation-menu'
      outerBgColor='white'
      innerBgColor='white'
      handleOnClick={handleOnClick}
    />
  );
}

export default ButtonMenu;
