import { pagesList } from "@/lib/pages-list";
import { PageItem } from "@/types/page";
import Link from "next/link";

export const GlobalNav = () => {
  return (
    <nav
      role="navigation"
      aria-roledescription="navigation"
      className="h-10 w-full flex items-center gap-2 px-4"
    >
      {pagesList.map((pageItem, index) => (
        <GlobalNavItem item={pageItem} key={index} />
      ))}
    </nav>
  );
};

const GlobalNavItem = ({ item }: { item: PageItem }) => {
  return <Link href={`/${item.slug}`}>{item.name}</Link>;
};
