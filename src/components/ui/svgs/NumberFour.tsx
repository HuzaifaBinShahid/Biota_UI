import * as React from "react";

const NumberFour = ({
  fill = "#7E7B76",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="13"
    height="18"
    viewBox="0 0 13 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.565217 14.5161H6.78261V17.4194L7.34783 18H11.3043V14.5161H13V10.4516L12.4348 9.87097H11.3043V0.580645L10.7391 0H6.78261L0 9.96654V13.9355L0.565217 14.5161ZM6.78261 9.87097H5.38337L6.78261 7.85109V9.87097ZM10.1739 0.580645H7.07711L0.565217 10.1494V13.3548H7.34783V16.8387H10.1739V13.3548H11.8696V10.4516H10.1739V0.580645ZM7.34783 5.2178L3.72219 10.4516H7.34783V5.2178Z"
      fill={fill}
    />
  </svg>
);

export default NumberFour;
