import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineDesktopWindows } from 'react-icons/md';
import { CiCalendar } from 'react-icons/ci';
import { MdOutlineSettings } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { PiQuestion } from 'react-icons/pi';
import css from './Popup.module.css';

export default function Popup(params) {
  const pages = [
    {
      icon: <MdOutlineDesktopWindows className={css.icon} />,
      name: 'Моніторинг',
      text: 'Центр управління реальним часом',
    },
    {
      icon: <CiCalendar className={css.icon} />,
      name: 'Планувальник',
      text: 'Календарна сітка та планування',
    },
    {
      icon: <MdOutlineSettings className={css.icon} />,
      name: 'В роботі',
      text: 'Панель керівника',
    },
    {
      icon: <BsBoxSeam className={css.icon} />,
      name: 'Облік',
      text: 'Аналітика запчастин та продажів',
    },
    {
      icon: <PiQuestion className={css.icon} />,
      name: 'Технічна підтримка',
      text: 'Підтримка з системи',
    },
  ];
  return (
    <div className={css.wrapper}>
      <div className={css.firstPoint}>
        <div className={css.iconBox}>
          <RxHamburgerMenu className={css.icon} />
        </div>
        <div className={css.textWrapper}>
          <p className={css.pageName}>Всі модулі</p>
          <p className={css.pageText}>Огляд усіх модулів CRMmech</p>
        </div>
      </div>
      <ul className={css.list}>
        {pages?.map((page, index) => (
          <li key={index} className={css.listItem}>
            <div className={css.iconBox}>{page.icon}</div>
            <div className={css.textWrapper}>
              <p className={css.pageName}> {page.name}</p>
              <p className={css.pageText}>{page.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
