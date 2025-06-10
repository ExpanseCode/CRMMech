import css from './ProblemsSection.module.css';
import {
  AlertTriangle,
  Clock,
  TrendingDown,
  Users,
  Eye,
  PhoneCall,
} from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function ProblemsSection() {
  const problems = [
    {
      icon: Clock,
      title: 'Майстри не дотримуються графіка',
      description:
        'Неможливо відстежити реальний час роботи. Клієнти чекають, терміни зриваються, репутація страждає.',
      impact: 'До 30% втрати часу щодня',
      styleClass: 'cardRed',
      color: 'text-red-600',
      iconBgClass: 'problemRed',
      borderColor: 'borderRed',
    },
    {
      icon: Eye,
      title: 'Немає прозорості в роботі персоналу',
      description:
        'Ви не знаєте, хто і що робить прямо зараз. Контроль тільки по результату, коли вже пізно щось змінити.',
      impact: 'Втрата контролю над процесами',
      styleClass: 'cardOrange',
      color: 'text-orange-600',
      iconBgClass: 'problemOrange',
      borderColor: 'borderOrange',
    },
    {
      icon: TrendingDown,
      title: 'Важко контролювати якість обслуговування',
      description:
        'Скарги клієнтів, браковані роботи, повторні звернення. Якість падає, а ви дізнаєтесь останніми.',
      impact: 'Зниження задоволеності клієнтів',
      styleClass: 'cardPurple',
      color: 'text-purple-600',
      iconBgClass: 'problemPurple',
      borderColor: 'borderPurple',
    },
    {
      icon: Users,
      title: 'Неефективна зарплатна система',
      description:
        'Платите однаково за різну продуктивність. Хороші майстри демотивовані, слабкі — розслаблені.',
      impact: 'Відтік кращих кадрів',
      styleClass: 'cardBlue',
      color: 'text-blue-600',
      iconBgClass: 'problemBlue',
      borderColor: 'borderBlue',
    },
    {
      icon: PhoneCall,
      title: 'Постійні дзвінки та уточнення',
      description:
        'Цілий день телефонуєте майстрам: «Ти почав? Встигаєш? Коли закінчиш?» Замість управління — пожежне гасіння.',
      impact: 'Стрес та виснаження керівника',
      styleClass: 'cardIndigo',
      color: 'text-indigo-600',
      iconBgClass: 'problemIndigo',
      borderColor: 'borderIndigo',
    },
    {
      icon: AlertTriangle,
      title: 'Втрата прибутку через неефективність',
      description:
        "Прості простої, переробки, скарги — все це з'їдає ваш прибуток. А ви навіть не знаєте, де саме втрачаєте гроші.",
      impact: 'До 40% втрати потенційного прибутку',
      styleClass: 'cardRedDark',
      color: 'text-red-700',
      iconBgClass: 'problemDarkRed',
      borderColor: 'borderRedDark',
    },
  ];

  return (
    <section id="problems" className={css.problems}>
      <div className={css.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={css.sectionHeader}
        >
          <h2 className={css.title}>😤 Знайомі проблеми вашого автосервісу?</h2>
          <p className={css.sectionSubtitle}>
            Ці болі відчуває кожен власник СТО. Але є рішення, яке допоможе
            позбутися цього хаосу раз і назавжди.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className={css.gridContainer}>
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={clsx(css.card, css[problem.styleClass])}
            >
              <div
                className={clsx(
                  css.problemIconWrapper,
                  css[problem.iconBgClass]
                )}
              >
                <problem.icon  className={clsx(
                  css.problemIcon,
                  css[problem.iconBgClass]
                )}/>
              </div>
              <div>
                <h3 className={css.problemTitle}>{problem.title}</h3>
                <p className={css.problemText}>{problem.description}</p>
              </div>
              <div
                className={clsx(
                  css.problemDescription,
                  css[problem.iconBgClass]
                )}
              >
                <p  className={clsx(
                  css.problemDescriptionText,
                  css[problem.iconBgClass]
                )}>
                  💸 {problem.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className={css.problemBottomContainer}
        >
          <h3 className={css.problemTitleBottom}>
            🔥 Досить терпіти цей хаос!
          </h3>
          <p className={css.problemBottomText}>
            CRMmech вирішує ВСІ ці проблеми автоматично. Дивіться, як ваш
            автосервіс перетворюється на ефективну <br/>машину прибутку.
          </p>
          <div className={css.problemBottomTry}>
            ⬇️ Дізнайтесь, як це працює ⬇️
          </div>
        </motion.div>
      </div>
    </section>
  );
}
