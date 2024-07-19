// import Image from "next/image";
// import styles from "./page.module.css";
import { Fragment } from "react";

import FetcApi from "@/components/FetchApi/FetchApi";
import FetchCatproducts from "@/components/FetchProCats/FetchCatproducts";

export default function Home() {
  return (
    <Fragment>
      <div>{/* <FetcApi /> */}</div>
      <div>
        <FetchCatproducts />
      </div>
    </Fragment>
  );
}
