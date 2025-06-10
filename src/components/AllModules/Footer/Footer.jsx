import css from './Footer.module.css';

export default function Footer() {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Готові спробувати CRMmech?</p>
      <p className={css.descr}>
        Всі модулі працюють разом як єдина система. Замовте демо та подивіться,
        як CRMmech змінить ваш автосервіс.
      </p>
      <div className={css.btnBox}>
        <a
          href="https://forms.gle/oShc79zDeNqAyQ5p8"
          target="_blank"
          className={css.order}
        >
          ⚡ Замовити
        </a>
        <button type="button" className={css.findOutPrices}>
          🎯 Дізнатися ціни
        </button>
      </div>
    </div>
  );
}
