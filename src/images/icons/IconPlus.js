import * as React from 'react';
const IconPlus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#54ADFF'}
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
    />
  </svg>
);
export default IconPlus;
