import React from 'react';
import ButtonAction, {
  ButtonActionProps,
} from '../../common/ButtonAction/ButtonAction';

interface ButtonMenuProps {
  handleOnClick: ButtonActionProps['handleOnClick'];
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
