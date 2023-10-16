import styles from "./initialPage.module.scss";
import Banner from "../../components/Banner";

import Menu from "components/Menu";
import Header from "components/Header";
import Footer from "components/Footer";
import Galery from "components/Galery";
import Popular from "components/Popular";

export default function InitialPage() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Menu />
        <Banner />
      </div>
      <div className={styles.galery}>
        <Galery />
        <Popular /> 
      </div>
      <Footer />
    </>
  );
}
