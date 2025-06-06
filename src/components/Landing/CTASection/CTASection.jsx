import css from './CTASection.module.css';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Download } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className={css.CTASection}>
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={css.content}
        >
          <h2 className={css.title}>Готові спробувати CRMmech?</h2>
          <p className={css.description}>
            Замовте безкоштовну демонстрацію та подивіться, як CRMmech змінить
            ваш автосервіс
          </p>

          <div className={css.buttonsWrapper}>
            <button
              onClick={() => {
                window.open('https://forms.gle/oShc79zDeNqAyQ5p8', '_blank');
              }}
              size="lg"
              className={css.orderButton}
            >
              <ExternalLink className={css.btnIcon} />
              🚀 Замовити
            </button>

            <a
              href="/CRMmech.pdf"
              download="CRMmech-Презентація.pdf"
              className={css.downloadButton}
            >
              <Download className={css.btnIcon} />
              📄 Завантажити презентацію
            </a>
          </div>

          <ul className={css.featuresList}>
            <li className={css.featureItem}>✅ Безкоштовна демонстрація</li>
            <li className={css.featureItem}>✅ Персональна консультація</li>
            <li className={css.featureItem}>✅ Без зобов'язань</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
