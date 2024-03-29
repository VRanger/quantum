import React from 'react';
import PropTypes from 'prop-types';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Assessment from '@material-ui/icons/Assessment';
import Check from '@material-ui/icons/Check';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Clear from '@material-ui/icons/Clear';
import Close from '@material-ui/icons/Close';
import ContactPhone from '@material-ui/icons/ContactPhone';
import CreditCard from '@material-ui/icons/CreditCard';
import DateRange from '@material-ui/icons/DateRange';
import Done from '@material-ui/icons/Done';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Error from '@material-ui/icons/Error';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToApp from '@material-ui/icons/ExitToApp';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Info from '@material-ui/icons/Info';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Lock from '@material-ui/icons/Lock';
import Markunread from '@material-ui/icons/Markunread';
import Menu from '@material-ui/icons/Menu';
import MenuBook from '@material-ui/icons/MenuBook';
import Payment from '@material-ui/icons/Payment';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import Person from '@material-ui/icons/Person';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Receipt from '@material-ui/icons/Receipt';
import Search from '@material-ui/icons/Search';
import Share from '@material-ui/icons/Share';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';
import Home from '@material-ui/icons/Home';
import Accessible from '@material-ui/icons/Accessible';
import AccessTime from '@material-ui/icons/AccessTime';
import SwapVert from '@material-ui/icons/SwapVert';

import { theme } from '../shared';
import icons from '../shared/icons';

const { baseFontSize } = theme;

const sizes = {
  small: baseFontSize, // 16
  medium: baseFontSize * 1.5, // 24
  large: baseFontSize * 2, // 32
};

const Icon = ({ name, skin, size, ...props }) => {
  const components = {
    access_time: AccessTime,
    accessible_forward: AccessibleForward,
    accessible: Accessible,
    add: Add,
    arrow_drop_down: ArrowDropDown,
    arrow_drop_up: ArrowDropUp,
    assessment: Assessment,
    check_box_outline_blank: CheckBoxOutlineBlank,
    check_box: CheckBox,
    check_circle: CheckCircle,
    check: Check,
    clear: Clear,
    close: Close,
    contact_phone: ContactPhone,
    credit_card: CreditCard,
    date_range: DateRange,
    done: Done,
    emoji_people: EmojiPeople,
    error: Error,
    exit_to_app: ExitToApp,
    expand_less: ExpandLess,
    expand_more: ExpandMore,
    favorite_border: FavoriteBorder,
    home: Home,
    info: Info,
    keyboard_arrow_down: KeyboardArrowDown,
    keyboard_arrow_left: KeyboardArrowLeft,
    keyboard_arrow_right: KeyboardArrowRight,
    keyboard_arrow_up: KeyboardArrowUp,
    lock: Lock,
    markunread: Markunread,
    menu_book: MenuBook,
    menu: Menu,
    payment: Payment,
    perm_device_information: PermDeviceInformation,
    person: Person,
    radio_button_checked: RadioButtonChecked,
    radio_button_unchecked: RadioButtonUnchecked,
    receipt: Receipt,
    search: Search,
    share: Share,
    star_border: StarBorder,
    star_half: StarHalf,
    star: Star,
    swap_vert: SwapVert,
    verified_user: VerifiedUser,
    visibility_off: VisibilityOff,
    visibility: Visibility,
    warning: Warning,
  };

  if (!components[name]) return <span>{name}</span>;

  const SelectedIcon = components[name];

  return (
    <SelectedIcon
      {...props}
      style={{ color: skin, fontSize: sizes[size], maxWidth: sizes[size] }}
      data-qtm-preloader="icon"
    >
      {name}
    </SelectedIcon>
  );
};

Icon.defaultProps = {
  style: {},
  skin: '',
  size: 'medium',
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
  style: PropTypes.instanceOf(Object),
  skin: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
