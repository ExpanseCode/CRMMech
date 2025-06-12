import Footer from "../../components/AllModules/Footer/Footer.jsx";
import Header from "../../components/AllModules/Header/Header.jsx";
import ListOfModules from "../../components/AllModules/ListOfModules/ListOfModules.jsx";
import OtherFunctions from "../../components/AllModules/OtherFunctions/OtherFunctions.jsx";
import WhatYouGet from "../../components/AllModules/WhatYouGet/WhatYouGet.jsx";
import css from "./AllModulesPage.module.css";

export default function AllModulesPage() {
  return (
    <div className={css.mainContainer}>
      <Header />
      <div className={css.wrapper}>
        <ListOfModules />
        <OtherFunctions />
        <WhatYouGet />
        <Footer />
      </div>
    </div>
  );
}
