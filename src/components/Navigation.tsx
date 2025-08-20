import { IconHome, IconList, IconCalendar, IconUser } from '@tabler/icons-react';

const menuItems = [
  { label: "Home", href: "#home", icon: <IconHome /> },
  { label: "Transactions", href: "#transactions", icon: <IconList />},
  { label: "Calendar", href: "#calendar", icon: <IconCalendar />},
  { label: "Profile", href: "#profile", icon: <IconUser />},
];

export default function Navigation() {
  return (
    <nav className="
      flex md:flex-col md:w-56 md:h-auto bg-white w-full
      md:relative fixed bottom-0 right-0 w-full md:top-auto md:left-auto md:justify-start justify-around
      border-t border-gray-200 md:border-t-0 md:border-r shadow-sm"
    >
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="py-3 px-4 text-center md:text-left hover:bg-gray-100 transition-colors"
        >
          <div className="flex flex-row gap-2">
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </div>
        </a>
      ))}
    </nav>
  );
};
