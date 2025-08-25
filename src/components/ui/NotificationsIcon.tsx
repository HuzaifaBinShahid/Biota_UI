import React from "react";

type NotificationIconProps = React.SVGProps<SVGSVGElement>;

const NotificationIcon: React.FC<NotificationIconProps> = (props) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.75"
        y="0.75"
        width="43.5"
        height="43.5"
        rx="21.75"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M28.0676 20.1633V19.6C28.0676 16.5072 25.5604 14 22.4676 14C19.3748 14 16.8676 16.5072 16.8676 19.6V20.1633C16.8676 20.8393 16.6675 21.5001 16.2926 22.0626L15.3737 23.4409C14.5344 24.6999 15.1751 26.4111 16.6349 26.8092C20.4536 27.8507 24.4816 27.8507 28.3004 26.8092C29.7601 26.4111 30.4009 24.6999 29.5616 23.4409L28.6427 22.0626C28.2677 21.5001 28.0676 20.8393 28.0676 20.1633Z"
        stroke="#111B21"
        strokeWidth="1.5"
      />
      <circle cx="27.4004" cy="16" r="2.5" fill="#FD434F" stroke="white" />
      <path
        d="M18.8672 27.6C19.3912 28.9982 20.8052 30 22.4672 30C24.1292 30 25.5432 28.9982 26.0672 27.6"
        stroke="#111B21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotificationIcon;
