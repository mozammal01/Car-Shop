import { IconProps } from "@/interfaces/shared-interfaces";

export default function ExploreArrowIcon({ ...props }: IconProps) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.6111 0.699951H5.05557C4.84061 0.699951 4.66667 0.873894 4.66667 1.08885C4.66667 1.30381 4.84061 1.47775 5.05557 1.47775H12.6723L0.113941 14.0362C-0.0379804 14.1881 -0.0379804 14.4342 0.113941 14.5861C0.189884 14.662 0.289415 14.7 0.38891 14.7C0.488405 14.7 0.5879 14.662 0.663879 14.5861L13.2222 2.02765V9.64442C13.2222 9.85938 13.3961 10.0333 13.6111 10.0333C13.8261 10.0333 14 9.85938 14 9.64442V1.08885C14 0.873894 13.826 0.699951 13.6111 0.699951Z"
        fill="currentColor"
      />
    </svg>
  );
}
