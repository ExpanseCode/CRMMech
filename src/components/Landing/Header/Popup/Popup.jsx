import { useNavigate } from 'react-router-dom';
import css from './Popup.module.css';
import {
  Menu,
  Monitor,
  Calendar,
  Settings,
  Package,
  HelpCircle,
} from 'lucide-react';

export default function Popup({}) {
  const pages = [
    {
      icon: <Monitor className={css.icon} />,
      name: 'Моніторинг',
      text: 'Центр управління реальним часом',
      path: '/modules/:monitoring',
    },
    {
      icon: <Calendar className={css.icon} />,
      name: 'Планувальник',
      text: 'Календарна сітка та планування',
      path: '/modules/:planner',
    },
    {
      icon: <Settings className={css.icon} />,
      name: 'В роботі',
      text: 'Панель керівника',
      path: '/modules/:inwork',
    },
    {
      icon: <Package className={css.icon} />,
      name: 'Облік',
      text: 'Аналітика запчастин та продажів',
      path: '/modules/:accounting',
    },
    {
      icon: <HelpCircle className={css.icon} />,
      name: 'Технічна підтримка',
      text: 'Підтримка з системи',
      path: '/modules/:support',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className={css.wrapperPopup}>
      <div
        className={css.firstPoint}
        onClick={() => {
          navigate('/modules');
        }}
      >
        <div className={css.iconBox}>
          <Menu className={css.icon} />
        </div>
        <div className={css.textWrapper}>
          <p className={css.pageName}>Всі модулі</p>
          <p className={css.pageText}>Огляд усіх модулів CRMmech</p>
        </div>
      </div>
      <ul className={css.list}>
        {pages?.map((page, index) => (
          <li
            key={index}
            className={css.listItem}
            onClick={() => {
              navigate(page.path);
            }}
          >
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
