import logo from '../../../assets/logo.png';
import css from './Header.module.css';

export default function Header() {
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
          <a href="modules" className={css.link}>
            Модулі
          </a>
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
      <div>
        <a href="https://app.crmmech.com/" target="blank">
          Вхід в систему
        </a>
        <a href="free-test">Безкоштовний тест</a>
      </div>
    </nav>
  );
}
