import css from './WhatYouGet.module.css';

export default function WhatYouGet(params) {
  const options = [
    {
      stats: '100%',
      benefit: 'Прозорість',
      description: 'Хто працює, з ким, скільки часу',
    },
    {
      stats: 'Авто',
      benefit: 'Ефективність',
      description: 'Все автоматизовано — від заявки до зарплати',
    },
    {
      stats: '24/7',
      benefit: 'Контроль',
      description: 'Жодна машина, пост чи працівник не залишаться без уваги',
    },
    {
      stats: '+30%',
      benefit: 'Прибуток',
      description: 'Зниження втрат до -40%, зростання продуктивності +30%',
    },
  ];

  return (
    <div className={css.whatYouGetWrapper}>
      <p className={css.title}>🎯 Що ви отримуєте з CRMmech</p>
      <ul className={css.list}>
        {options.map((option, index) => (
          <li key={index} className={css.listItem}>
            <p className={css.stats}>{option.stats}</p>
            <p className={css.benefit}>{option.benefit}</p>
            <p className={css.description}>{option.description}</p>
          </li>
        ))}
      </ul>
      <div className={css.bottomBox}>
        <p className={css.bottomTitle}>🔐 CRMmech — це не просто CRM</p>
        <p className={css.text}>
          Це інтелектуальна платформа, яка замінює диспетчера, бухгалтера,
          складівника і наглядача — і робить це краще.
        </p>
      </div>
    </div>
  );
}
