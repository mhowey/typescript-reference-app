import MenuItem from "../components/menu/MenuItem";
import { mockContent } from "@root/content/mockContent";
export default function NavMenu(props: { isOpen: boolean }) {
  return mockContent.map((item: any) => {
    return (
      <MenuItem
        key={item.slug}
        item={{
          url: item.url,
          label: item.label,
          slug: item.slug,
        }}
      />
    );
  });
}
