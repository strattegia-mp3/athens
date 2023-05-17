import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-[#F3F3F3] px-10 py-1">
      <Link href="/">
        <Image src={logo} width={70} alt="Logo of Athens" />
      </Link>
      <div className="block md:hidden" onClick={() => {}}>
        <button onClick={handleMenuOpen}>
          <BiMenu>
            <Menu isOpen={menuOpen} onClose={handleMenuOpen}>
              <Link href="/">Home</Link>
              <Link href="/">Docs</Link>
              <Link href="/">Ranking</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Forum</Link>
            </Menu>
          </BiMenu>
        </button>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Link href="/">
          <span className="ml-6 text-lg no-underline hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition duration-275 ease-in-out">
            Home
          </span>
        </Link>
        <Link href="/docs">
          <span className="ml-6 text-lg no-underline hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition duration-275 ease-in-out">
            Docs
          </span>
        </Link>
        <Link href="/ranking">
          <span className="ml-6 text-lg no-underline hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition duration-275 ease-in-out">
            Ranking
          </span>
        </Link>
        <Link href="/blog">
          <span className="ml-6 text-lg no-underline hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition duration-275 ease-in-out">
            Blog
          </span>
        </Link>
        <Link href="/forum">
          <span className="ml-6 text-lg no-underline hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition duration-275 ease-in-out">
            Forum
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <Link href="/register">
          <span className="ml-4 pr-2 text-lg no-underline border-r border-solid border-black hover:text-emerald-500 transition duration-275 ease-in-out">
            Registrar
          </span>
        </Link>
        <Link href="/login">
          <span className="ml-2 text-lg no-underline hover:text-emerald-500 transition duration-275 ease-in-out">
            Entrar
          </span>
        </Link>
      </div>
    </nav>
  );
}
