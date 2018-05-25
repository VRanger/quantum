import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, active }) => {
  const isActive = active ? 'active' : '';

  return (
    <React.Fragment>
      <li className={isActive}>
        <p>{title}</p>
        <div style={{ position: 'relative', top: -60 }}>s</div>
      </li>
    </React.Fragment>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  // icon: PropTypes.string,
  active: PropTypes.bool,
};

Item.defaultProps = {
  active: false,
};

export default Item;
