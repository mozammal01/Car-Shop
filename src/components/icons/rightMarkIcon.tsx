import { IconProps } from "@/interfaces/shared-interfaces";

export default function RightMarkIcon({ ...props }: IconProps) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.06953 6.86487L0.475781 4.27112C0.319531 4.11487 0.319531 3.84924 0.475781 3.69299L1.03828 3.13049C1.19453 2.97424 1.44453 2.97424 1.60078 3.13049L3.36641 4.88049L7.11641 1.13049C7.27266 0.974243 7.52266 0.974243 7.67891 1.13049L8.24141 1.69299C8.39766 1.84924 8.39766 2.11487 8.24141 2.27112L3.64766 6.86487C3.49141 7.02112 3.22578 7.02112 3.06953 6.86487Z"
        fill="currentColor"
      />
    </svg>
  );
}
