import React from "react";
import Navbar from "../navbar";
import styles from "../../styles/Home.module.scss";


function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${styles.pageBannerTopForAllPage}`}>{children}</main>
    </>
  );
}

export default Layout;
