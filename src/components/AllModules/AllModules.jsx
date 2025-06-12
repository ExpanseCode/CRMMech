import Header from './Header/Header';
import ListOfModules from './ListOfModules/ListOfModules';
import css from './AllModules.module.css';
import OtherFunctions from './OtherFunctions/OtherFunctions';
import WhatYouGet from './WhatYouGet/WhatYouGet';
import Footer from './Footer/Footer';

export default function AllModules(params) {
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
