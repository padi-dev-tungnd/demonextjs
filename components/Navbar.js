import Link from "next/link";
import { useState } from "react";
import { BiHomeAlt, BiUser, BiInfoCircle, BiMenu } from "react-icons/bi";

const items = [
  {
    id: 1,
    label: "Home",
    icon: <BiHomeAlt size="1.5rem" />,
    href: "/",
    active: true,
  },
  {
    id: 2,
    label: "User",
    icon: <BiUser size="1.5rem" />,
    href: "/user",
  },
  {
    id: 3,
    label: "About",
    icon: <BiInfoCircle size="1.5rem" />,
    href: "/about",
  },
];

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  return (
    <nav className="md:col-span-1 bg-cyan-200">
      <div className="mx-4 flex justify-between items-center md:block">
        <h4 className="uppercase font-bold py-4 border-b border-primary md:text-right">
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size="1.5rem"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
      </div>

      <div className={`mx-4 my-2 ${isOpenMenu ? "" : "hidden"} md:block`}>
        {items.map((item) => (
          <Link href={item.href} key={item.id} passHref>
            <div
              className={`flex p-2 justify-end items-center cursor-pointer ${
                isActive === item.label && "bg-primary text-white"
              }`}
              onClick={() => setIsActive(item.label)}
            >
              <h3 className="mr-2">{item.label}</h3>
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
