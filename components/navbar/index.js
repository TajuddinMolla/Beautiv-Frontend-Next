import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/navbar/Search.png";
import CartIcon from "../../assets/images/navbar/Shopping-Bag.png";
import SginIcon from "../../assets/images/navbar/Male.png";

export default function Navbar() {
  return (
    <>
      <header
        className={`${styles.navbarMainHeight} fixed top-0 left-0 right-0 flex items-center justify-center shadow-lg`}
      >
        <div
          className={`${styles.maxWidth} w-full flex items-center justify-between px-4`}
        >
          <div>
            <Image src={Logo} alt="Picture of the author" />
          </div>
          <nav>
            <ul className="flex items-center justify-between gap-x-8">
              <li>New</li>
              <li>Categories</li>
              <li>Offers</li>
              <li>Brands</li>
            </ul>
          </nav>
          <div className="flex items-center justify-between gap-x-8">
            <Image
              className={styles.navbarIconWidthHeight}
              src={SearchIcon}
              alt="Search icon"
            />
            <Image
              className={styles.navbarIconWidthHeight}
              src={CartIcon}
              alt="Cart Icon"
            />
            <Image
              className={styles.navbarIconWidthHeight}
              src={SginIcon}
              alt="Sign In"
            />
          </div>
        </div>
      </header>
    </>
  );
}
