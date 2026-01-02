import css from './PricingSection.module.css';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  BsFillHouseFill,
  BsShopWindow,
  BsCheck2,
  BsFillPersonFill,
  BsPuzzleFill,
  BsCameraVideo,
  BsInfinity,
  BsHandIndex,
  BsCaretRightSquare,
} from 'react-icons/bs';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

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

const tariffs = [
  {
    name: 'Start',
    textColor: 'textBlue',
    headerIcon: <BsFillHouseFill />,
    postsQuantity: '1 СТО',
    price: 990,
    features: [
      { name: 'AI‑відео', status: false, quantity: 0, icon: <BsCameraVideo /> },
      {
        name: 'CRM / Облік / Склади',
        status: true,
        quantity: 2,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Інтеграція - ',
        subName: 'постачальники',
        status: true,
        quantity: 3,
        icon: <BsPuzzleFill />,
      },
      {
        name: 'Додаток механіка',
        status: true,
        quantity: 2,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Додаток клієнта',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      { name: 'Аналітика', status: true },
      { name: 'WEB розширення', status: false },
    ],
  },
  {
    name: 'Full',
    textColor: 'textBlue',
    headerIcon: <BsShopWindow />,
    postsQuantity: '1 - 3 пости',
    price: 2990,
    features: [
      { name: 'AI‑відео', status: true, quantity: 4, icon: <BsCameraVideo /> },
      {
        name: 'CRM / Облік / Склади',
        status: true,
        quantity: 4,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Інтеграція - ',
        subName: 'постачальники',
        status: true,
        quantity: 10,
        icon: <BsPuzzleFill />,
      },
      {
        name: 'Додаток механіка',
        status: true,
        quantity: 6,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Додаток клієнта',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      { name: 'Аналітика', status: true },
      { name: 'WEB розширення', status: true },
    ],
  },
  {
    name: 'Profi',
    textColor: 'textPurple',
    headerIcon: <BsShopWindow />,
    postsQuantity: '4 - 8 пости',
    price: 4390,
    features: [
      { name: 'AI‑відео', status: true, quantity: 10, icon: <BsCameraVideo /> },
      {
        name: 'CRM / Облік / Склади',
        status: true,
        quantity: 8,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Інтеграція - ',
        subName: 'постачальники',
        status: true,
        quantity: 20,
        icon: <BsPuzzleFill />,
      },
      {
        name: 'Додаток механіка',
        status: true,
        quantity: 20,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Додаток клієнта',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      { name: 'Аналітика', status: true },
      { name: 'WEB розширення', status: true },
    ],
  },
  {
    name: 'Maximal',
    textColor: 'textBlue',
    headerIcon: <BsShopWindow />,
    postsQuantity: 'от 9 постов',
    price: 4390,
    features: [
      { name: 'AI‑відео', status: true, quantity: -1, icon: <BsCameraVideo /> },
      {
        name: 'CRM / Облік / Склади',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Інтеграція - ',
        subName: 'постачальники',
        status: true,
        quantity: -1,
        icon: <BsPuzzleFill />,
      },
      {
        name: 'Додаток механіка',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Додаток клієнта',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      { name: 'Аналітика', status: true },
      { name: 'WEB розширення', status: true },
    ],
  },
  {
    name: 'Network',
    textColor: 'textBlue',
    headerIcon: <BsFillHouseFill />,
    postsQuantity: 'від 3 СТО',
    price: 5290,
    features: [
      { name: 'AI‑відео', status: true, quantity: -1, icon: <BsCameraVideo /> },
      {
        name: 'CRM / Облік / Склади',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Інтеграція - ',
        subName: 'постачальники',
        status: true,
        quantity: -1,
        icon: <BsPuzzleFill />,
      },
      {
        name: 'Додаток механіка',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Додаток клієнта',
        status: true,
        quantity: -1,
        icon: <BsFillPersonFill />,
      },
      { name: 'Аналітика', status: true },
      { name: 'WEB розширення', status: true },
    ],
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
  const scrollerRef = useRef(null);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSwitch = () => {
    setIsYear(!isYear);
  };

  const [isYear, setIsYear] = useState(false);

  const scrollByCard = (direction = 1) => {
    if (!scrollerRef.current) return;

    const card = scrollerRef.current.querySelector(`.${css.cardWrapper}`);
    if (!card) return;

    const gap = 10; // має відповідати gap у CSS
    const scrollAmount = card.offsetWidth + gap;

    scrollerRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkButtons = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;

      // Якщо скрол більше 0, можна йти назад
      setCanScrollLeft(scrollLeft > 0);

      // Якщо поточний скрол + ширина контейнера менше загальної ширини контенту — можна йти вперед
      // Використовуємо -1 для запобігання похибок округлення пікселів
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkButtons(); // Перевірка при першому рендері
    window.addEventListener('resize', checkButtons); // На випадок зміни розміру екрана
    return () => window.removeEventListener('resize', checkButtons);
  }, [tariffs]);

  return (
    <section id="pricing" className={css.section}>
      <div className={css.sectionWrapper}>
        <div className={css.tariffsWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={css.headerWrapper}
          >
            {/* <h2 className={css.header}>💼 Тариф "Все включено"</h2> */}
            <h2 className={css.header}>Тарифи</h2>
            <div className={css.line}></div>
            <p className={css.headerText}>
              {/* Камери вже враховано у тарифі без доплат. */}
              Все включено: камери, CRM, додатки, підтримка. Безкоштовний тест:
              14 днів, без картки.
            </p>
            <div className={css.toggleWithTextWrapper}>
              <p className={css.rightText}>Раз на місяць</p>
              <label className={css.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={isYear}
                  onChange={toggleSwitch}
                />
                <span className={css.slider} />
              </label>
              <p className={css.rightText}>за рік</p>
              <p className={css.discount}>20% знижка</p>
            </div>
          </motion.div>
          {/* <div className={css.cardsWrapper}>
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
        </div> */}
          <div className={css.cardsWrapper}>
            <button
              type="button"
              className={css.arrow}
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollLeft}
            >
              <MdArrowBackIos />
            </button>
            <div
              className={css.scrollWrapper}
              ref={scrollerRef}
              onScroll={checkButtons}
            >
              {tariffs.map((tariff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${css.cardWrapper} ${
                    tariff.name === 'Profi' && css.profi
                  }`}
                >
                  <div className={`${css.stringWrapper} ${css.topString}`}>
                    <h3
                      className={` ${css[tariff.textColor]} ${css.cardHeader}`}
                    >
                      {tariff.name}
                    </h3>
                    <div className={css.rightHeaderWrapper}>
                      <p>{tariff.headerIcon}</p>
                      <p>{tariff.postsQuantity}</p>
                    </div>
                  </div>
                  <div className={`${css.stringWrapper} ${css.secondString}`}>
                    {tariff?.name === 'Start' && (
                      <div
                        className={`${css.paymentInfoWrapper} ${css.baseline}`}
                      >
                        <p className={css.price}>₴0</p>
                        <p className={css.paymentInfo}>/ 14 днів</p>
                      </div>
                    )}
                    <div className={css.paymentInfoWrapper}>
                      {isYear && tariff?.name !== 'Start' && (
                        <p className={css.fullPrice}>
                          ₴{Number(tariff?.price).toLocaleString('uk-UA')}
                        </p>
                      )}
                      {tariff?.name !== 'Start' && (
                        <p className={css.price}>
                          ₴
                          {!isYear
                            ? Number(tariff?.price).toLocaleString('uk-UA')
                            : Number(tariff?.price) * 0.8}
                        </p>
                      )}
                      {tariff?.name !== 'Start' && isYear ? (
                        <p className={css.paymentInfo}>/міс за локацію</p>
                      ) : tariff?.name !== 'Start' ? (
                        <p className={css.paymentInfo}>/міс за локацію</p>
                      ) : (
                        <p className={css.paymentInfo}></p>
                      )}
                    </div>
                  </div>
                  <div className={css.listWrapper}>
                    {tariff.features.map((feature, index) => (
                      <div className={css.listString} key={index}>
                        <BsCheck2
                          className={`${css.checkIcon} ${
                            feature.status === true
                              ? css.trueCheckIcon
                              : css.falseCheckIcon
                          }`}
                        />
                        <p
                          className={`${css.listText} ${
                            feature.status === true
                              ? css.trueListText
                              : css.falseListText
                          }`}
                        >
                          {feature.name}
                          {feature?.subName && (
                            <span className={css.suppliers}>
                              {feature?.subName}
                            </span>
                          )}
                        </p>
                        {feature.status === true &&
                          feature.name !== 'Аналітика' &&
                          feature.name !== 'WEB розширення' && (
                            <div className={css.quantityWrapper}>
                              <p className={css.listIcon}>{feature.icon}</p>
                              <p className={css.quantityText}>
                                {feature.quantity !== -1 ? (
                                  feature.quantity
                                ) : (
                                  <BsInfinity className={css.infinityIcon} />
                                )}
                              </p>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                  <div className={`${css.stringWrapper} ${css.thirdString}`}>
                    <p className={css.suppliers}>Apps — iOS/Android</p>
                    <p className={css.paymentInfo}>скоро</p>
                  </div>
                  <a
                    className={`${
                      tariff.name === 'Profi' ? css.btnGradient : css.btnBlue
                    } ${css.cardBtn}`}
                    href="https://forms.gle/oShc79zDeNqAyQ5p8"
                    target="_blank"
                  >
                    {tariff.name === 'Start' ? (
                      <BsCaretRightSquare />
                    ) : (
                      <BsHandIndex />
                    )}
                    {tariff.name === 'Start'
                      ? 'Протестувати'
                      : `Обрати ${tariff.name}`}
                  </a>
                </motion.div>
              ))}
            </div>
            <button
              type="button"
              className={css.arrow}
              onClick={() => scrollByCard(1)}
              disabled={!canScrollRight}
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
        {/* <motion.div
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
        </motion.div> */}
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
