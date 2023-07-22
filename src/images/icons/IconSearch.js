import * as React from 'react';
const IconSearch = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      fill={props.fill || '#54ADFF'}
      d="M19.47 20.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM17.25 10.5a6.75 6.75 0 0 1-6.75 6.75v1.5a8.25 8.25 0 0 0 8.25-8.25h-1.5Zm-6.75 6.75a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm10.03 15.72-4.187-4.188-1.06 1.06 4.187 4.188 1.06-1.06Z"
    />
  </svg>
);
export default IconSearch;
