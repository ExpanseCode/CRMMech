import css from './PricingSection.module.css';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Start',
    posts: '1–3',
    cameras: 'до 2',
    priceUah: '2 900',
    description: 'СТО з 1–2 майстрами',
    benefit: 'Ідеальний старт для малого СТО',
    borderColor: 'borderGreen',
    bgColor: 'bgGreen',
    textColor: 'textGreen',
    buttonColor: 'btnGreen',
    planId: 'start',
  },
  {
    name: 'Pro',
    posts: '4–7',
    cameras: 'до 4',
    priceUah: '3 700',
    description: 'Середнє СТО',
    benefit: 'Оптимальне співвідношення ціни і якості',
    borderColor: 'borderBlue',
    bgColor: 'bgBlue',
    textColor: 'textBlue',
    buttonColor: 'btnBlue',
    recommended: true,
    planId: 'pro',
  },
  {
    name: 'Max',
    posts: '8–13',
    cameras: 'до 6',
    priceUah: '5 500',
    description: 'Багатопостові або преміальні',
    benefit: 'Максимальна ефективність для великих СТО',
    borderColor: 'borderPurple',
    bgColor: 'bgPurple',
    textColor: 'textPurple',
    buttonColor: 'btnPurple',
    planId: 'max',
  },
  {
    name: 'Profi',
    posts: '14+',
    cameras: 'до 10',
    priceUah: '7 500',
    description: 'Мережі, франшизи, філії',
    benefit: 'Корпоративні рішення та індивідуальний підхід',
    borderColor: 'borderGray',
    bgColor: 'bgGray',
    textColor: 'textGray',
    buttonColor: 'btnGray',
    planId: 'profi',
  },
];

const allFeatures = [
  '✅ CRM + планувальник',
  '✅ Відеоаналітика з камер',
  '✅ Розпізнавання машинозаїздів',
  '✅ Облік часу роботи майстрів',
  '✅ KPI та зарплатна аналітика',
  '✅ Мобільний додаток для механіків',
  '✅ Техпідтримка та оновлення',
];

export default function PricingSection() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className={css.section}>
      <div className={css.sectionWrapper}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={css.headerWrapper}
        >
          <h2 className={css.header}>💼 Тариф "Все включено"</h2>
          <p className={css.headerText}>
            Камери вже враховано у тарифі без доплат.
          </p>
        </motion.div>
        <div className={css.cardsWrapper}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${css.cardWrapper} ${css[plan.borderColor]}`}
            >
              {plan.recommended && (
                <div className={css.popular}>
                  <Star className={css.star} />
                  Популярний
                </div>
              )}
              <div className={`${css[plan.bgColor]} ${css.cardContentWrapper}`}>
                <h3 className={` ${css[plan.textColor]} ${css.cardHeader}`}>
                  {plan.name}
                </h3>
                <p className={css.cardFirstText}>{plan.posts} постів</p>
                <p className={css.cardSecondText}>{plan.cameras} камер</p>

                <p className={css.price}>
                  {plan.priceUah} грн
                  <span className={css.currency}>/міс</span>
                </p>

                <p className={css.cardThirdText}>{plan.description}</p>
                <p className={css.italicText}>{plan.benefit}</p>
              </div>
              <a
                className={`${css[plan.buttonColor]} ${css.cardBtn}`}
                href="https://forms.gle/oShc79zDeNqAyQ5p8"
                target="_blank"
              >
                {plan.name === 'Profi'
                  ? '📞 Отримати індивідуальну пропозицію'
                  : '⚡ Замовити'}
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={css.tariffsCompoundWrapper}
        >
          <h3 className={css.tariffsCompoundHeader}>
            📦 Усі тарифи включають:
          </h3>
          <div className={css.tariffsCompoundList}>
            {allFeatures.map((feature, index) => (
              <p key={index} className={css.feature}>
                {feature}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={css.whyPostsSection}
        >
          <h3 className={css.tariffsCompoundHeader}>
            🧠 Чому ми рахуємо пости, а не камери?
          </h3>
          <div className={css.whyPostsTextWrapper}>
            <p className={css.textCenterBold}>
              Тому що саме пост — це ваша точка прибутку
            </p>
            <p className={css.textCenter}>
              CRMmech рахує, скільки машин заїхало, скільки часу реально
              працював майстер, і де втрачається прибуток.
            </p>
            <p className={`${css.textCenter} ${css.whyPostsBottomText}`}>
              🎯 Ви платите не "за залізо", а за результат — ефективність
              кожного робочого місця.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={css.noHiddenFeesSection}
        >
          <h3 className={css.tariffsCompoundHeader}>
            💸 Ніяких прихованих платежів:
          </h3>
          <div className={css.noHiddenFeesSectionTextWrapper}>
            <div className={css.noHiddenFeesSectionLeftTextWrapper}>
              <p className={css.cross}>❌</p>
              <p className={css.noHiddenFeesSectionText}>
                Без доплат за камери
              </p>
              <p className={css.noHiddenFeesSectionText}>
                Без платної інтеграції
              </p>
            </div>
            <div className={css.noHiddenFeesSectionLeftTextWrapper}>
              <div className={css.check}>✅</div>
              <p className={css.noHiddenFeesSectionText}>
                Все включено — просто підключайтесь і працюйте
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className={css.readyToStartSection}
        >
          <h3 className={css.readyToStartSectionHeader}>📞 Готові почати?</h3>
          <p className={css.readyToStartSectionFirstString}>
            Залиште заявку, і ми{' '}
            <strong>безкоштовно підключимо тестову камеру</strong> на один пост.
          </p>
          <p className={css.readyToStartSectionSecondString}>
            Протестуйте CRMmech на своєму СТО — <strong>без ризику</strong>.
          </p>

          <button
            // onClick={() => scrollToSection('cta')}
            className={css.readyToStartSectionBtn}
          >
            🔘 Замовити тестове підключення
            <ArrowRight className={css.arrow} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
