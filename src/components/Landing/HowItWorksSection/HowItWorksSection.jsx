import clsx from 'clsx';
import css from './HowItWorksSection.module.css';
import { motion } from 'framer-motion';
import {
  Camera,
  FileText,
  Smartphone,
  BarChart3,
  Wallet,
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
} from 'lucide-react';

const automationSteps = [
  {
    icon: Camera,
    emoji: '🎥',
    title: 'Камера фіксує заїзд',
    description: 'Номер авто — розпізнано. Ви вже знаєте, хто приїхав.',
    // color: 'bgGray',
    textColor: 'bgGray',
    mockup: {
      title: '🎥 КАМЕРА',
      content: 'AA1234BC',
      subtitle: 'Розпізнано!',
    },
  },
  {
    icon: FileText,
    emoji: '📝',
    title: 'Заявка створюється автоматично',
    description: 'Клієнт, автомобіль, тип робіт — уже в системі.',
    // color: 'bgBlue',
    textColor: 'textBlue',
    border: 'borderBlue',
    borderBottom: 'titleBlue',
    mockup: {
      title: 'Нова заявка #1234',
      content: 'Honda Civic 2018\nКлієнт: Іван П.\nДіагностика',
    },
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Механік бачить завдання',
    description: 'На телефоні — чітко, без дзвінків і уточнень.',
    // color: 'bgGreen',
    textColor: 'textGreen',
    border: 'borderGreen',
    borderBottom: 'titleGreen',
    mockup: {
      title: '📱 Завдання механіку',
      content: '✓ Діагностика\n⏱️ 1:30 (в роботі)\nМеханік: Петро',
    },
  },
  {
    icon: BarChart3,
    emoji: '📊',
    title: 'Керівник бачить прогрес',
    description: 'Скільки часу витрачено? Що в роботі? Хто ефективний?',
    // color: 'bgPurple',
    textColor: 'textPurple',
    border: 'borderPurple',
    borderBottom: 'titlePurple',
    mockup: {
      title: '📊 KPI Звіт',
      content: 'Час: 1:30\nЕфективність: 95%\nБонус: +150₴',
    },
  },
  {
    icon: Wallet,
    emoji: '💰',
    title: 'Зарплата нараховується автоматично',
    description: 'Ефективність = KPI = Бонус',
    // color: 'bgYellow',
    textColor: 'textYellow',
    border: 'borderYellow',
    borderBottom: 'titleYellow',
    mockup: {
      title: '💰 Автонарахування',
      content: 'Петро: +150₴\nІван: +200₴\nВсього: +350₴',
    },
  },
];

export default function HowItWorksSection() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={css.topTextWrapper}
        >
          <h2 className={css.header}>⚡️ Як CRMmech автоматизує роботу СТО</h2>
          <p className={`${css.topText} ${css.red}`}>
            Раніше ви не знали, хто коли працював.
          </p>
          <p className={`${css.topText} ${css.green}`}>
            Тепер — усе за вас робить система.
          </p>
        </motion.div>
        <div className={css.topSection}>
          {automationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={clsx(css.firstSection, index % 2 === 1 && css.reverse)}
            >
              <div className={css.firstSectionWrapper}>
                <div className={css.firstSectionLeftTopTextWrapper}>
                  <p className={css.dot}> {index + 1}</p>
                  <h3 className={css.firstSectionLeftTopText}>
                    {' '}
                    {step.emoji} {step.title}
                  </h3>
                </div>
                <p className={css.firstSectionLeftBottomText}>
                  {' '}
                  {step.description}
                </p>
              </div>
              <div className={css.firstSectionWrapper}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`${css.rightSideContentWrapper} ${
                    css[step.textColor]
                  } ${css[step.border] || ''}`}
                >
                  {index === 0 ? (
                    <div className={css.rightSideTextWrapper}>
                      <p className={css.cameraText}>{step.mockup.title}</p>
                      <p className={css.carNumber}> {step.mockup.content}</p>
                      <p className={css.rightSideBottomText}>
                        {step.mockup.subtitle}
                      </p>
                    </div>
                  ) : (
                    <div className={`${css[step.textColor]} ${css.cardText}`}>
                      <p className={`${css.title} ${css[step.borderBottom]}`}>
                        {' '}
                        {step.mockup.title}
                      </p>
                      <p className={css.content}>{step.mockup.content}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className={css.bottomSection}
        >
          <h3 className={css.bottomSectionHeader}>
            ✅ Жодного ручного обліку. Жодної плутанини.
          </h3>
          <p className={css.bottomSectionSubHeader}>
            💡 Весь процес — під контролем і без ручної участі
          </p>
          <div className={css.bottomSectionWrapper}>
            <div className={css.bottomSectionCard}>
              <Clock className={css.clock} />
              <h4 className={css.bottomSectionCardTopText}>Економія часу</h4>
              <p className={css.bottomSectionCardBottomText}>
                Ніяких дзвінків і уточнень
              </p>
            </div>
            <div className={css.bottomSectionCard}>
              <BarChart3 className={css.clock} />
              <h4 className={css.bottomSectionCardTopText}>Повний контроль</h4>
              <p className={css.bottomSectionCardBottomText}>
                Бачите все в реальному часі
              </p>
            </div>
            <div className={css.bottomSectionCard}>
              <Users className={css.clock} />
              <h4 className={css.bottomSectionCardTopText}>Мотивація команди</h4>
              <p className={css.bottomSectionCardBottomText}>
                Справедлива зарплата за результат
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
