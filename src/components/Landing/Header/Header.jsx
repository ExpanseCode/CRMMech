import { useState } from 'react';
import logo from '../../../assets/logo.png';
import css from './Header.module.css';
import Popup from './Popup/Popup';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={css.wrapper}>
      <img src={logo} alt="logo" className={css.logo} />

      <ul className={css.list}>
        <li className={css.item}>
          <a href="problems" className={css.link}>
            Проблеми
          </a>
        </li>
        <li className={css.item}>
          <a href="opportunities" className={css.link}>
            Можливості
          </a>
        </li>
        <li className={css.item}>
          <a className={css.link} onClick={() => setIsActive(true)}>
            Модулі
          </a>
          {isActive && <Popup />}
        </li>
        <li className={css.item}>
          <a href="prices" className={css.link}>
            Тарифи
          </a>
        </li>
        <li className={css.item}>
          <a href="feedback" className={css.link}>
            Відгуки
          </a>
        </li>
        <li className={css.item}>
          <a href="FQA" className={css.link}>
            FQA
          </a>
        </li>
      </ul>
      <div className={css.btnBox}>
        <a
          href="https://app.crmmech.com/"
          target="blank"
          className={css.enterLink}
        >
          Вхід в систему
        </a>
        <a href="free-test" className={css.freeTestLink}>
          Безкоштовний тест
        </a>
      </div>
    </nav>
  );
}
