import { useEffect, useRef, useState } from 'react';
import logo from '../../../assets/logo.png';
import css from './Header.module.css';
import Popup from './Popup/Popup';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const wrapperPopupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        wrapperPopupRef.current &&
        !wrapperPopupRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div
            className={`${css.link} ${isActive && css.active}`}
            onClick={() => setIsActive(!isActive)}
          >
            <div className={css.moduleWrapper} ref={wrapperPopupRef}>
              Модулі
              <IoIosArrowDown
                className={`${css.icon} ${isActive && css.rotated}`}
              />
            </div>
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Popup />
              </motion.div>
            )}
          </AnimatePresence>
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
