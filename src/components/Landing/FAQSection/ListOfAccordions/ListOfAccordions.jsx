import css from './ListOfAccordions.module.css';
import { ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ListOfAccordions(params) {
  const faqItems = [
    {
      question: 'Як формується ціна за постами?',
      answer:
        'Пост — це ваше робоче місце, де працює механік. Саме тут відбувається основна робота та створюється прибуток. Ціна залежить від кількості постів: 1-3 пости — 2900 грн/міс, 4-7 постів — 3700 грн/міс, 8-13 постів — 5500 грн/міс. Все включено без доплат.',
    },
    {
      question: 'Що включено в абонплату?',
      answer:
        'Усі тарифи включають: CRM-систему, відеоаналітику з камер, розпізнавання машинозаїздів, облік часу роботи майстрів, KPI та зарплатну аналітику, мобільний додаток для механіків, техпідтримку та оновлення. Камери вже враховані у тарифі.',
    },
    {
      question: 'Чи працює з моїми поточними камерами?',
      answer:
        'Так, CRMmech працює з більшістю IP-камер. Якщо ваші камери не підходять, ми пропонуємо оренду професійних Reolink-камер всього за 15 €/міс. Наші фахівці проведуть безкоштовний аудит вашого обладнання.',
    },
    {
      question: 'Що таке безкоштовне тестове підключення?',
      answer:
        "Ми безкоштовно підключаємо тестову камеру на один пост вашого СТО. Ви зможете протестувати всі можливості CRMmech — відеоаналітику, облік часу, звіти KPI — без жодних ризиків та зобов'язань.",
    },
    {
      question: 'Чи є прихована плата за камери чи інтеграції?',
      answer:
        'Ні! Жодних прихованих платежів. Камери вже включені у тариф, усі функції CRM, звіти та мобільний додаток — все включено в абонплату. Доплачуєте тільки за опціональні послуги: оренду додаткових камер (15 €/міс).',
    },
    {
      question: 'Як швидко можна почати працювати?',
      answer:
        'Тестове підключення займає 1-2 дні. Повне налаштування системи для вашого СТО — від 3 до 7 днів залежно від кількості постів. Навчання персоналу входить у вартість підключення.',
    },
    {
      question: 'Підходить для невеликого СТО?',
      answer:
        'Абсолютно! Тариф Start (2900 грн/міс) спеціально для невеликих СТО з 1-3 постами. Ви отримуєте повний функціонал системи за доступною ціною. Можете почати з стартового тарифу та масштабуватися по мірі зростання бізнесу.',
    },
    {
      question: 'Чи є знижки для мереж та франшиз?',
      answer:
        "Так, для СТО з 14+ постами діє тариф Profi (7500 грн/міс). Також пропонуємо спеціальні умови для мереж, франшиз та філій. Зв'яжіться з нами для розрахунку індивідуальних умов.",
    },
  ];

  const [openItem, setOpenItem] = useState(null);

  const AccordionTrigger = React.forwardRef(
    ({ children, isOpen, ...props }, forwardedRef) => (
      //   <Accordion.Header className="AccordionHeader">
      <AccordionPrimitive.Trigger
        className={css.accordionTrigger}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDown
          className={`${css.accordionChevron} ${isOpen && css.rotated}`}
          aria-hidden
        />
      </AccordionPrimitive.Trigger>
      //   </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <AccordionPrimitive.Content
        className={css.accordionContent}
        {...props}
        ref={forwardedRef}
      >
        <div className={css.accordionContentText}>{children}</div>
      </AccordionPrimitive.Content>
    )
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <AccordionPrimitive.Root
        className={css.accordionRoot}
        type="single"
        // defaultValue="item-1"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        {faqItems.map((item, index) => (
          <AccordionPrimitive.Item
            key={index}
            value={`item-${index}`}
            className={css.item}
          >
            <AccordionTrigger isOpen={openItem === `item-${index}`}>
              <p className={css.question}>{item.question}</p>
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </motion.div>
  );
}
