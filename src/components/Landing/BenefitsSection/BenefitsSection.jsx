export default function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Самостійно розпізнає авто при заїзді',
      description: 'AI автоматично фіксує номер та створює заявку',
    },
    {
      icon: CheckCircle,
      title: 'Створює заявки та контролює кожен пост',
      description: 'Повний контроль завантаженості в реальному часі',
    },
    {
      icon: CheckCircle,
      title: 'Рахує зарплату по KPI — без помилок',
      description: 'Автоматичний розрахунок винагороди за ефективність',
    },
    {
      icon: CheckCircle,
      title: 'Показує в реальному часі, хто працює, а хто створює збитки',
      description: 'Повна прозорість роботи персоналу',
    },
    {
      icon: CheckCircle,
      title: 'Дає повну аналітику прибутку, завантаження і втрат',
      description: 'Усі дані для прийняття правильних рішень',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Що робить CRMmech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Розумна платформа з відеоаналітикою та штучним інтелектом
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <benefit.icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    ✅ {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
