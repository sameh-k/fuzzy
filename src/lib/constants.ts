import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p3.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p5.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p6.png",
  },
];

export const plans = [
  { id: 1, name: "Hobby", price: "$0", border: "dark:border-white/[0.2]" },
  { id: 2, name: "Pro Plan", price: "$29", border: "dark:border-[#E2CBFF]" },
  { id: 3, name: "Unlimited", price: "$99", border: "dark:border-white/[0.2]" },
];

export const menuOptions = [
  { name: "Dashboard", Component: Home, href: "/dashboard" },
  { name: "Workflows", Component: Workflows, href: "/workflows" },
  { name: "Settings", Component: Settings, href: "/settings" },
  { name: "Connections", Component: Category, href: "/connections" },
  { name: "Billing", Component: Payment, href: "/billing" },
  { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];
