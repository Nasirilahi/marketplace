import {IconFonts} from '../../constants';

export type AddToCartTinyButtonTypes = UIProps & CallbackProps;

interface UIProps {
  currentItemsInCart: number;
  addIcon?: IconFonts;
  removeIcon?: IconFonts;
  isDesktop?: boolean;
}

interface CallbackProps {
  onAdd: () => void;
  onDisabledAdd?: () => void;
  onRemove: () => void;
}
