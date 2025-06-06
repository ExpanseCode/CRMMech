import {
  Video,
  Smartphone,
  ClipboardList,
  Link,
  Database,
  Zap,
} from 'lucide-react';
import css from './ListOfExtraFeatures.module.css';
import { motion } from 'framer-motion';

export default function ListOfExtraFeatures(params) {
  const additionalFeatures = [
    {
      icon: Smartphone,
      title: 'Деталізація по кожному авто',
      description:
        'AUDI A6 CA7414CB показує марку, модель та номер. Вся інформація структурована та доступна одним кліком',
      color: '#2563eb',
    },
    {
      icon: Database,
      title: 'Кнопки швидких дій',
      description:
        "Кнопки 'Статус' та 'Інфо' дають миттєвий доступ до повної інформації про авто та поточні роботи",
      color: '#9333ea',
    },
    {
      icon: ClipboardList,
      title: 'Візуальні індикатори',
      description:
        'Кольорові мітки та статуси показують етап роботи - чи авто на діагностиці, в ремонті або готове до видачі',
      color: '#16a34a',
    },
    {
      icon: Zap,
      title: 'Миттєва інформація про пост',
      description:
        "Бачите який пост зайнятий: '1пл. 16г. 1хв.' - номер поста та точний час роботи",
      color: '#ea580c',
    },
    {
      icon: Link,
      title: 'Хронологія подій',
      description:
        'Повна історія: коли заїхало авто (14:21 23.05.2025), скільки часу в роботі, які етапи пройшло',
      color: '#dc2626',
    },
    {
      icon: Video,
      title: 'Централізований контроль',
      description:
        'Вся інформація про автомобілі, пости та роботи в одному екрані - ніяких переходів між програмами',
      color: '#4f46e5',
    },
  ];

  return (
    <ul className={css.list}>
      {additionalFeatures.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.02 }}
          className={css.item}
        >
          {/* <li key={index} className={css.item}> */}
          <div
            style={{ backgroundColor: `${item.color}` }}
            className={css.iconBox}
          >
            <item.icon className={css.icon} />
          </div>
          <p className={css.title}>{item.title}</p>
          <p className={css.descr}>{item.description}</p>
          {/* </li> */}
        </motion.div>
      ))}
    </ul>
  );
}
