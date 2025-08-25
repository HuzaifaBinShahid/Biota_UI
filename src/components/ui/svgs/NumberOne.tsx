import React from "react";

type NumberOneProps = React.SVGProps<SVGSVGElement>;

const NumberOne: React.FC<NumberOneProps> = ({ fill = "white", ...props }) => {
  return (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.36364 0L0 4.35484L3.18864 7.67406L4.36728 6.45173L4.36364 13.3548H1.09091V17.4194L1.63636 18H12V13.9355L11.4545 13.3548H8.72727V0.580645L8.18182 0H4.36364ZM4.91406 3.92771L2.643 6.28296L0.789635 4.3627L4.57933 0.580645H7.63636V13.9355H10.9091V16.8387H1.63636V13.9355H4.90879L4.91406 3.92771Z"
        fill={fill}
      />
    </svg>
  );
};

export default NumberOne;
