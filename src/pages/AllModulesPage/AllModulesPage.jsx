import {
  ArrowLeft,
  Monitor,
  Calendar,
  Settings,
  Package,
  HelpCircle,
} from 'lucide-react';


export default function AllModulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Назад на головну</span>
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Модулі CRMmech
                </h1>
                <p className="text-gray-600 mt-1">
                  Оберіть модуль для детального огляду
                </p>
              </div>
            </div>
            <Button
              onClick={() =>
                window.open('https://forms.gle/oShc79zDeNqAyQ5p8', '_blank')
              }
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              ⚡ Замовити
            </Button>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link key={module.id} href={`/modules/${module.id}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`${module.color} p-6 rounded-t-lg`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur">
                      <module.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-0"
                    >
                      Модуль {index + 1}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {module.title}
                  </h2>
                  <p className="text-white/90 text-sm">{module.description}</p>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {module.targetRole}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {module.businessValue}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Основні функції:
                      </h4>
                      <div className="space-y-1">
                        {module.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-600">
                            {feature}
                          </div>
                        ))}
                        {module.features.length > 3 && (
                          <div className="text-xs text-blue-600 font-medium">
                            +{module.features.length - 3} інших функцій
                          </div>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      Детальніше
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            🔗 Інші функції системи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-lg font-bold mb-3">
                📱 Мобільний додаток для механіків
              </h3>
              <p className="text-gray-300 text-sm">
                Фотофіксація, статуси, чек-листи, VIN-розпізнавання
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-lg font-bold mb-3">💰 Фінансова аналітика</h3>
              <p className="text-gray-300 text-sm">
                Скільки заробив кожен майстер, з якого авто яка маржа
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-lg font-bold mb-3">
                ⚡ Автонарахування зарплат
              </h3>
              <p className="text-gray-300 text-sm">KPI + час = бонус</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-lg font-bold mb-3">
                🔗 Інтеграція з постачальниками
              </h3>
              <p className="text-gray-300 text-sm">
                Замовлення запчастин прямо із заявки
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-lg font-bold mb-3">
                📊 Рейтинг і рекомендації
              </h3>
              <p className="text-gray-300 text-sm">
                Бачите, хто з команди працює ефективніше
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-lg font-bold mb-3">🎯 Що ви отримуєте</h3>
              <p className="text-gray-300 text-sm">
                Прозорість, ефективність, контроль, прибуток
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            🎯 Що ви отримуєте з CRMmech
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Прозорість</div>
              <div className="text-sm opacity-90">
                Хто працює, з ким, скільки часу
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Авто</div>
              <div className="text-lg">Ефективність</div>
              <div className="text-sm opacity-90">
                Все автоматизовано — від заявки до зарплати
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Контроль</div>
              <div className="text-sm opacity-90">
                Жодна машина, пост чи працівник не залишаться без уваги
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+30%</div>
              <div className="text-lg">Прибуток</div>
              <div className="text-sm opacity-90">
                Зниження втрат до -40%, зростання продуктивності +30%
              </div>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-6 backdrop-blur mb-8">
            <p className="text-xl font-bold mb-2">
              🔐 CRMmech — це не просто CRM
            </p>
            <p className="text-lg opacity-90">
              Це інтелектуальна платформа, яка замінює диспетчера, бухгалтера,
              складівника і наглядача — і робить це краще.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Готові спробувати CRMmech?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Всі модулі працюють разом як єдина система. Замовте демо та
            подивіться, як CRMmech змінить ваш автосервіс.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                window.open('https://forms.gle/oShc79zDeNqAyQ5p8', '_blank')
              }
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              ⚡ Замовити
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                🎯 Дізнатися ціни
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
