import { IconProps } from "@/interfaces/shared-interfaces";

export default function UpArrow({ ...props }: IconProps) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5_777)">
        <path
          d="M12.0801 7.66943L7.38281 2.97217V13.1284H6.62109V2.97217L1.92383 7.66943L1.39062 7.11084L7.00195 1.49951L12.6133 7.11084L12.0801 7.66943Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_777">
          <rect width="13" height="13" fill="currentColor" transform="matrix(1 0 0 -1 0.5 13.8901)" />
        </clipPath>
      </defs>
    </svg>
  );
}
