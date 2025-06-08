import styles from './Footer.module.css';
import { Car, Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { PiYoutubeLogo } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Car className={styles.carIcon} />
              </div>
              <span className={styles.logoText}>CRMmech</span>
            </div>
            <p className={styles.description}>
              AI-автоматизація для українських автосервісів. Повний контроль
              бізнесу в одній системі.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>
                <FiFacebook className={styles.socialIcon} />
              </a>
              <a
                href="https://www.instagram.com/crmmech/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a
                href="https://www.linkedin.com/company/crm-mech/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className={styles.socialIcon} />
              </a>
              <a
                href="https://youtu.be/w_XSB5hDMyo"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiYoutubeLogo className={styles.socialYoutube} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Продукт</h4>
            <ul className={styles.list}>
              <li>
                <a href="#features" className={styles.link}>
                  Можливості
                </a>
              </li>
              <li>
                <a href="#pricing" className={styles.link}>
                  Ціни
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Інтеграції
                </a>
              </li>
              <li>
                <a href="/api-docs" className={styles.link}>
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Контакти</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                +38 (068) 550-42-02
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                forbludov@gmail.com
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                Харків, Україна
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2024 CRMmech. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
