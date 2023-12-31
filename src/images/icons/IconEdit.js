import * as React from 'react';
const IconEdit = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      fill={props.fill || '#54ADFF'}
      d="m5 15.706-.53-.53a.75.75 0 0 0-.22.53H5ZM15.706 5l.53-.53a.75.75 0 0 0-1.06 0l.53.53ZM19 8.294l.53.53a.75.75 0 0 0 0-1.06l-.53.53ZM8.294 19v.75a.75.75 0 0 0 .53-.22l-.53-.53ZM5 19h-.75c0 .414.336.75.75.75V19Zm6.588-.75a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5ZM5.53 16.236 16.236 5.53l-1.06-1.06L4.47 15.176l1.06 1.06ZM15.176 5.53l3.294 3.294 1.06-1.06-3.294-3.294-1.06 1.06Zm3.294 2.234L7.764 18.47l1.06 1.06L19.53 8.824l-1.06-1.06ZM8.294 18.25H5v1.5h3.294v-1.5ZM5.75 19v-3.294h-1.5V19h1.5Zm6.955-11 3.294 3.295 1.06-1.06-3.293-3.295L12.705 8Zm-1.117 11.75h7v-1.5h-7v1.5Z"
    />
  </svg>
);
export default IconEdit;
