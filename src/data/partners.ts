import type { IconType } from "react-icons";
import { FaAmazon } from "react-icons/fa6";
import {
  SiBigbasket,
  SiFlipkart,
  SiPaytm,
  SiPhonepe,
  SiSwiggy,
  SiZomato,
} from "react-icons/si";

export type PartnerDef = {
  name: string;
  /** react-icons component when available */
  Icon?: IconType;
  /** Static logo under /public/partners (SVG from Iconify Arcticons set) */
  logoSrc?: string;
};

export const partners: PartnerDef[] = [
  { name: "Flipkart", Icon: SiFlipkart },
  { name: "Amazon", Icon: FaAmazon },
  { name: "Myntra", logoSrc: "/partners/myntra.svg" },
  { name: "Zomato", Icon: SiZomato },
  { name: "Swiggy", Icon: SiSwiggy },
  { name: "Paytm", Icon: SiPaytm },
  { name: "PhonePe", Icon: SiPhonepe },
  { name: "Nykaa", logoSrc: "/partners/nykaa.svg" },
  { name: "Meesho", logoSrc: "/partners/meesho.svg" },
  { name: "BigBasket", Icon: SiBigbasket },
  { name: "Urban Company", logoSrc: "/partners/urban-company.svg" },
  { name: "CRED", logoSrc: "/partners/cred.svg" },
];
