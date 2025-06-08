import css from './FAQSection.module.css';
import { motion } from 'framer-motion';
import ListOfAccordions from './ListOfAccordions/ListOfAccordions';

export default function FAQSection() {
  return (
    <section id="faq" className={css.section}>
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // className="text-center mb-16"
        >
          <div className={css.titleBox}>
            <h2 className={css.title}>Часті запитання</h2>
            <p className={css.description}>
              Відповіді на найпоширеніші питання про CRMmech
            </p>
          </div>
        </motion.div>
        <ListOfAccordions />
      </div>
    </section>
  );
}
