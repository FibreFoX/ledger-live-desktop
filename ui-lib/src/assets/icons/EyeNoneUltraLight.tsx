import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function EyeNoneUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0721 21.648L21.6481 21.072L2.92805 2.352L2.35205 2.928L6.40805 6.984C4.75205 8.256 3.31205 10.032 2.40005 12C4.29605 16.08 8.28005 19.152 12.0001 19.152C13.6561 19.152 15.3601 18.528 16.9201 17.496L21.0721 21.648ZM3.31205 12C4.17605 10.224 5.47205 8.688 6.98405 7.56L9.43205 10.008C9.00005 10.56 8.76005 11.256 8.76005 12C8.76005 13.8 10.2001 15.24 12.0001 15.24C12.7441 15.24 13.4401 15 13.9921 14.568L16.3441 16.92C14.9281 17.856 13.4641 18.336 12.0001 18.336C8.66405 18.336 5.16005 15.72 3.31205 12ZM9.33605 5.328L9.96005 5.976C10.6321 5.76 11.3281 5.64 12.0001 5.64C15.3361 5.64 18.8161 8.28 20.6881 12C20.1601 13.032 19.5361 13.968 18.7921 14.808L19.3681 15.384C20.2561 14.376 21.0241 13.224 21.6001 12C19.7041 7.92 15.7201 4.848 12.0001 4.848C11.1121 4.848 10.2001 5.016 9.33605 5.328ZM9.55205 12C9.55205 11.448 9.72005 10.968 10.0081 10.584L13.4161 13.992C13.0081 14.28 12.5281 14.448 12.0001 14.448C10.6321 14.448 9.55205 13.368 9.55205 12Z"
        fill={color}
      />
    </svg>
  );
}

export default EyeNoneUltraLight;