import { ArrowLeft } from 'lucide-react';
import css from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header(params) {
  const navigate = useNavigate();

  return (
    <div className={css.headerWrapper}>
      <div className={css.headerContainer}>
        <button
          className={css.btnBack}
          onClick={() => {
            navigate('/');
          }}
        >
          <ArrowLeft className={css.arrowIcon} />
          <p className={css.goBack}>Назад на головну</p>
        </button>

        <div className={css.textBox}>
          <p className={css.title}>Модулі CRMmech</p>
          <p className={css.text}>Оберіть модуль для детального огляду</p>
        </div>

        <a
          href="https://forms.gle/oShc79zDeNqAyQ5p8"
          target="_blank"
          className={css.orderBtn}
        >
          <span className={css.icon}>⚡</span> Замовити
        </a>
      </div>
    </div>
  );
}
