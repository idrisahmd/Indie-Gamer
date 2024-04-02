import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="font-bold font-orbitron text-orange-800 ">
              Indie Gamer
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="/reviews" className="text-orange-800 hover:underline">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-orange-800 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
