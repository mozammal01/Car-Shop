import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavButton } from "@/interfaces/shared-interfaces";
import Link from "next/link";

export default function DropdownMenuPage({children, navButton, label, href, menuItem1, menuItem2, menuItem3, menuItem4}: NavButton) {
  return (
    <Link href={href}>
      <DropdownMenu>
      <DropdownMenuTrigger>{navButton}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{menuItem1}</DropdownMenuItem>
        <DropdownMenuItem>{menuItem2}</DropdownMenuItem>
        <DropdownMenuItem>{menuItem3}</DropdownMenuItem>
        <DropdownMenuItem>{menuItem4}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </Link>
  );
}
