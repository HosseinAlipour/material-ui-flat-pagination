import { ReactWrapper } from 'enzyme';
import Button from '@material-ui/core/Button';
import PageButton from '../src/PageButton';

export const findPageButton = (wrapper: ReactWrapper<any>) => {
  return wrapper.find(PageButton);
};

export const findMuiButton = (wrapper: ReactWrapper<any>) => {
  return wrapper.find(Button);
};
