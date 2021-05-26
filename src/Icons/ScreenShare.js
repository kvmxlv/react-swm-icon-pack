import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ScreenShare = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 16v2m4 2H8m8-9.5H8m8 0l-3 3m3-3l-3-3m7-.5V6a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1v-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M16 10H8m8 0l-3 3m3-3l-3-3m-1 9.5c4 0 7.5-.333 8-.667.5-.333 1-3.166 1-5.833 0-2.667-.5-5.5-1-5.833-.5-.334-4-.667-8-.667s-7.5.333-8 .667C3.5 4.5 3 7.333 3 10c0 2.667.5 5.5 1 5.833.5.334 4 .667 8 .667zm0 0v4m0 0h4m-4 0H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        d="M12 16v4m0 0h4m-4 0H8m8-9.5H8m8 0l-3 3m3-3l-3-3M5 16h14a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path opacity={0.15} d="M4 6a1 1 0 011-1h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V6z" fill={color} />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 16v4m0 0h4m-4 0H8m8-9.5H8m8 0l-3 3m3-3l-3-3M5 16h14a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M12 16v4m0 0h4m-4 0H8m8-9.5H8m8 0l-3 3m3-3l-3-3"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 5H5a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );

  switch (set) {
    case 'broken':
      return <Broken />;
    case 'curved':
      return <Curved />;
    case 'duotone':
      return <Duotone />;
    case 'outline':
      return <Outline />;
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

ScreenShare.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ScreenShare.displayName = 'SvgScreenShare';
export default createIcon(ScreenShare);