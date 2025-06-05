import { UserCheck, TrendingUp, Wrench, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WhoItsForSection.module.css';

const userTypes = [
  {
    icon: UserCheck,
    title: 'Власники',
    description: 'Повний контроль та фінансова прозорість',
  },
  {
    icon: TrendingUp,
    title: 'Менеджери',
    description: 'Легке планування та звітність',
  },
  {
    icon: Wrench,
    title: 'Механіки',
    description: 'Трекінг робіт та справедлива KPI-оплата',
  },
  {
    icon: Car,
    title: 'Клієнти',
    description: 'Оновлення в реальному часі та цифрова історія',
  },
];

export default function WhoItsForSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Для кого створено CRMmech</h2>
          <p className={styles.subtitle}>
            Рішення, яке підходить кожному учаснику процесу автосервісу
          </p>
        </motion.div>

        <div className={styles.grid}>
          {userTypes.map((userType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <userType.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{userType.title}</h3>
              <p className={styles.cardDescription}>{userType.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
