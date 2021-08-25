import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXAltMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5121 21.8399H20.8801V2.15991H13.6801V8.75991L8.97612 4.05591L3.12012 9.88791L13.5121 20.3039V21.8399ZM5.66412 9.88791L8.97612 6.59991L18.7201 16.3439C19.2961 16.9199 19.5121 17.4959 19.5121 18.0959C19.5121 19.4159 18.4801 20.4479 17.1601 20.4479C16.5601 20.4479 15.9601 20.2079 15.4081 19.6559L5.66412 9.88791ZM15.0481 5.85591C15.0481 4.63191 16.0321 3.64791 17.3041 3.64791C18.5041 3.64791 19.4881 4.63191 19.4881 5.85591C19.4881 6.95991 18.5041 8.08791 17.3041 8.08791C16.0561 8.06391 15.0481 6.95991 15.0481 5.85591ZM15.8881 18.0959C15.8881 18.7679 16.4401 19.3679 17.1601 19.3679C17.8561 19.3679 18.4081 18.7679 18.4081 18.0959C18.4081 17.3999 17.8561 16.8479 17.1601 16.8479C16.4401 16.8479 15.8881 17.3999 15.8881 18.0959ZM16.0321 5.85591C16.0321 6.50391 16.5601 7.12791 17.3041 7.10391C18.0001 7.12791 18.5521 6.52791 18.5521 5.85591C18.5281 5.15991 18.0001 4.60791 17.3041 4.58391C16.5841 4.58391 16.0321 5.15991 16.0321 5.85591Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoXAltMedium;