import { useEffect, useRef, useState } from 'react';
import logo from '../../../assets/logo.png';
import css from './Header.module.css';
import Popup from './Popup/Popup';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu/MobileMenu';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const wrapperPopupRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsModulesOpen(false);
  };

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
    <div className={css.header}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className={css.wrapper}>
          <img src={logo} alt="logo" className={css.logo} />
          <ul className={css.list}>
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
          <button
            className={css.mobMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={css.mobMenuIcon} />
            ) : (
              <Menu className={css.mobMenuIcon} />
            )}
          </button>{' '}
        </nav>{' '}
      </motion.nav>
      {isMobileMenuOpen && <MobileMenu scrollToSection={scrollToSection} />}
    </div>
  );
}
