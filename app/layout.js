import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import layout from "./layout.module.css";
import logo from "../public/Struktor Logo.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Struktor Jesuc",
  description: "Struktor D.O.O.",
};

export default function RootLayout({ children }) {
  const navList = [
    [`Glavna Strana`, `/`],
    [`O Nama`, `/o_nama`],
    [`Usluge`, `/usluge`],
    [`Projekti`, `/projekti`],
    [`Kontakt`, `/kontakt`],
  ];

  function generateList(list) {
    let output = [];

    list.forEach((el) => {
      output.push(
        <li>
          <Link href={`${el[1]}`} className={layout.navLink}>
            {el[0]}
          </Link>
        </li>
      );
    });

    return output;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={layout.navBar}>
          <div className={layout.logoContainer}>
            <Image
              src={logo}
              className={layout.logo}
              alt="Struktor Logo"
              sizes="25vw"
            />
            <span className={layout.struktor}>
              STRUKTOR JEŠIĆ
              <br />
              D.O.O.
            </span>
          </div>
          <ul className={layout.navList}>{generateList(navList)}</ul>
        </nav>
        {children}
        <div className={layout.contact}>
          <ul className={layout.contactList}>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="https://goo.gl/maps/2dAo958ro8GGewjv5"
              >
                Kancelarija: Francuska 1, 31210 Požega
              </a>
            </li>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="https://goo.gl/maps/HyxMYUgTsTJRPqjF8"
              >
                Betonska Baza: Godovički put
              </a>
            </li>
            <li>
              {" "}
              <a className={layout.contactDetail} href="struktor.com">
                struktor.com
              </a>
            </li>
          </ul>{" "}
          <ul className={layout.contactList}>
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151555">
                Tel.: 060/715-15-55
              </a>
            </li>{" "}
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151552">
                Tel.: 060/715-15-52
              </a>
            </li>{" "}
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151550">
                Tel.: 060/715-15-50
              </a>
            </li>
          </ul>{" "}
        </div>
      </body>
    </html>
  );
}
