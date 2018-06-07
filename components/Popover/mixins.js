import Colors from '../Colors';

const ARROW_SIZE = '8px';
const CORNER_ARROW_DISTANCE = 25;

const skins = {
  p2p: Colors.P2P['500'],
};

const upDownBorders = `
  border-left: ${ARROW_SIZE} solid transparent;
  border-right: ${ARROW_SIZE} solid transparent;
  left: 50%;
  transform: translateX(-50%);
`;

const sideBorders = `
  border-top: ${ARROW_SIZE} solid transparent;
  border-bottom: ${ARROW_SIZE} solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;

export default {
  arrow({ place }) {
    const positions = {
      bottom: `
        ${upDownBorders}
        border-bottom: ${ARROW_SIZE} solid;
        border-bottom-color: inherit;
        top: -${ARROW_SIZE};
      `,
      top: `
        ${upDownBorders}
        border-top: ${ARROW_SIZE} solid;
        border-top-color: inherit;
        bottom: -${ARROW_SIZE};
      `,
      left: `
        ${sideBorders}
        border-left: ${ARROW_SIZE} solid;
        border-left-color: inherit;
        right: -${ARROW_SIZE};
      `,
      right: `
        ${sideBorders}
        border-right: ${ARROW_SIZE} solid;
        border-right-color: inherit;
        left: -${ARROW_SIZE};
      `,
      'top-left': `
        ${upDownBorders}
        border-top: ${ARROW_SIZE} solid;
        border-top-color: inherit;
        bottom: -${ARROW_SIZE};

        right: ${CORNER_ARROW_DISTANCE}px;
        transform: translateX(50%);
        left: auto;
      `,
      'top-right': `
        ${upDownBorders}
        border-top: ${ARROW_SIZE} solid;
        border-top-color: inherit;
        bottom: -${ARROW_SIZE};

        left: ${CORNER_ARROW_DISTANCE}px;
        transform: translateX(-50%);
      `,
    };

    return positions[place];
  },

  position({
    place, popoverHeight, popoverWidth, childrenWidth,
  }) {
    const positions = {
      top: `top: -${popoverHeight + 15}px; left: 50%; margin-left: -${Math.floor(popoverWidth / 2)}px;`,
      right: `right: -${popoverWidth + 15}px; top: 50%; margin-top: -${Math.floor(popoverHeight / 2)}px;`,
      left: `left: -${popoverWidth + 15}px; top: 50%; margin-top: -${Math.floor(popoverHeight / 2)}px;`,
      'top-left': `top: -${popoverHeight + 15}px; left: ${Math.floor(childrenWidth / 2) + CORNER_ARROW_DISTANCE}px; margin-left: -${popoverWidth}px;`,
      'top-right': `top: -${popoverHeight + 15}px; left: -${Math.floor(childrenWidth / 2) + CORNER_ARROW_DISTANCE}px; margin-left: 100%;`,
    };

    return positions[place] || positions.top;
  },

  visibility({ show }) {
    return (show
      ? `
        opacity: 1;
        visibility: visible;
      `
      : `
        opacity: 0;
        visibility: hidden;
      `
    );
  },

  skin({ skin: name }) {
    return (skins[name]
      ? `
        border-color: ${skins[name]};
        background-color: ${skins[name]};
        color: ${Colors.WHITE};
      `
      : `
        border-color: ${Colors.WHITE};
        background-color: ${Colors.WHITE};
      `
    );
  },

  title({ title: text }) {
    return (text
      ? `border-bottom: 1px solid ${Colors.GREY['50']};`
      : 'padding-bottom: 0;'
    );
  },

  justifyTitle({ title: text }) {
    return text ? 'space-between' : 'flex-end';
  },

  ribbonPadding({ ribbon }) {
    return ribbon && 'padding-top: 30px;';
  },
};