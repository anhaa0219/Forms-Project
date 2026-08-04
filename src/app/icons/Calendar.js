import * as React from "react";
export const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#202124"
      d="M10 1.5h-.5v-1h-1v1h-5v-1h-1v1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1Zm0 9H2V5h8v5.5ZM10 4H2V2.5h8V4Z"
    />
  </svg>
);
