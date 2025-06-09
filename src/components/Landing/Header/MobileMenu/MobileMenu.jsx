import {
  Menu,
  Monitor,
  Calendar,
  Settings,
  Package,
  HelpCircle,
} from 'lucide-react';
import css from './MobileMenu.module.css';
import { motion } from 'framer-motion';

export default function MobileMenu({ scrollToSection }) {
  const pages = [
    {
      icon: <Monitor className={css.icon} />,
      name: 'Моніторинг',
      text: 'Центр управління реальним часом',
    },
    {
      icon: <Calendar className={css.icon} />,
      name: 'Планувальник',
      text: 'Календарна сітка та планування',
    },
    {
      icon: <Settings className={css.icon} />,
      name: 'В роботі',
      text: 'Панель керівника',
    },
    {
      icon: <Package className={css.icon} />,
      name: 'Облік',
      text: 'Аналітика запчастин та продажів',
    },
    {
      icon: <HelpCircle className={css.icon} />,
      name: 'Технічна підтримка',
      text: 'Підтримка з системи',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      // className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg"
    >
      <div className={css.mobMenuWrapper}>
        <ul className={css.navList}>
          <li className={css.item}>
            <div
              className={css.link}
              onClick={() => scrollToSection('problems')}
            >
              Проблеми
            </div>
          </li>
          <li className={css.item}>
            <div
              className={css.link}
              onClick={() => scrollToSection('features')}
            >
              Можливості
            </div>
          </li>
          <li className={css.item}>
            <div className={`${css.link} ${css.active}`}>Модулі</div>

            <ul className={css.pagesList}>
              {pages.map((page, index) => (
                <li key={index} className={css.modulesItem}>
                  <div className={css.iconBox}>{page.icon}</div>
                  <p className={css.pageName}> {page.name}</p>
                </li>
              ))}
            </ul>
          </li>
          <li className={css.item}>
            <div
              className={css.link}
              onClick={() => scrollToSection('pricing')}
            >
              Тарифи
            </div>
          </li>
          <li className={css.item}>
            <div
              className={css.link}
              onClick={() => scrollToSection('feedback')}
            >
              Відгуки
            </div>
          </li>
          <li className={css.item}>
            <div className={css.link} onClick={() => scrollToSection('faq')}>
              FAQ
            </div>
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
          <a
            href="https://forms.gle/oShc79zDeNqAyQ5p8"
            target="_blank"
            className={css.freeTestLink}
          >
            Замовити
          </a>
        </div>
      </div>
    </motion.div>
  );
}
