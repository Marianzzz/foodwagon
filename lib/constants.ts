import { MapPin, ConciergeBell, CreditCard, Donut } from "lucide-react";

export const deals = [
  {
    id: 1,
    discount: 15,
    title: "Грейс Вейдж",
    day: 6,
    photo: "/15.png",
  },
  {
    id: 2,
    discount: 10,
    title: "Грейс Вейдж",
    day: 6,
    photo: "/10.png",
  },
  {
    id: 3,
    discount: 25,
    title: "Грейс Вейдж",
    day: 7,
    photo: "/25.png",
  },
  {
    id: 4,
    discount: 20,
    title: "Грейс Вейдж",
    day: 8,
    photo: "/20.png",
  },
];

export const instructions = [
  {
    title: "Вибирай локацію",
    description: "Оберіть місце, куди буде доставлена ваша їжа.",
    icon: MapPin,
  },
  {
    title: "Вибирай замовлення",
    description: "Перегляньте сотні меню, щоб вибрати свою улюблену страву.",
    icon: ConciergeBell,
  },
  {
    title: "Предоплата",
    description:
      "Це швидко, безпечно та просто. Виберіть кілька способів оплати.",
    icon: CreditCard,
  },
  {
    title: "Насолоджуйся їжею",
    description: "Їжа готується та доставляється прямо до вашого дому.",
    icon: Donut,
  },
];

export const popularItems = [
  {
    photo: "/cheeseburger.png",
    name: "Сирний бургер",
    place: "Burger Arena",
    price: "170грн",
  },
  {
    photo: "/toffescake.png",
    name: "Ірисковий торт",
    place: "Top Sticks",
    price: "164грн",
  },
  {
    photo: "/dancake.png",
    name: "Млинці",
    place: "Cake World",
    price: "80грн",
  },
  {
    photo: "/crispysandwitch.png",
    name: "Запечений бутерброд",
    place: "Fastfood Dine",
    price: "123грн",
  },
  {
    photo: "/thaisoup.png",
    name: "Тайський суп",
    place: "Foody man",
    price: "114грн",
  },
];

export const featuredRestaurans = [
  {
    photo: "/Food-World.png",
    discount: 20,
    title: "FoodWorld",
    rating: 46,
    logo: "/logo-restaurants/foodworld.png",
    status: "close",
  },
  {
    photo: "/Pizzahub.png",
    discount: 15,
    title: "Pizzahub",
    rating: 40,
    logo: "/logo-restaurants/pizzahub.png",
    status: "close",
  },
  {
    photo: "/Donuts-hut.png",
    discount: 10,
    title: "Donuts hut",
    rating: 20,
    logo: "/logo-restaurants/donutshut.png",
    status: "open",
  },
  {
    photo: "/Subway.png",
    discount: 15,
    title: "Subway",
    rating: 50,
    logo: "/logo-restaurants/subway.png",
    status: "open",
  },
  {
    photo: "/Ruby-tuesday.png",
    discount: 10,
    title: "Ruby Tuesday",
    rating: 26,
    logo: "/logo-restaurants/rubytuesday.png",
    status: "open",
  },
  {
    photo: "/kuakata-fried-chicken.png",
    discount: 25,
    title: "Kuakata Fried Chicken",
    rating: 53,
    logo: "/logo-restaurants/kfc.png",
    status: "open",
  },
  {
    photo: "/kuakata-fried-chicken.png",
    discount: 10,
    title: "Red Square",
    rating: 45,
    logo: "/logo-restaurants/redsquer.png",
    status: "open",
  },
  {
    photo: "/TacoBell.png",
    discount: 10,
    title: "Taco Bell",
    rating: 35,
    logo: "/logo-restaurants/tacobell.png",
    status: "open",
  },
];

export const food = [
  {
    photo: "/food/pizza.png",
    title: "Піца",
  },
  {
    photo: "/food/burger.png",
    title: "Бургер",
  },
  {
    photo: "/food/noodles.png",
    title: "Локшина",
  },
  {
    photo: "/food/sub-sandwich.png",
    title: "Сендвіч",
  },
  {
    photo: "/food/chowmein.png",
    title: "Чоу-мейн",
  },
  {
    photo: "/food/steak.png",
    title: "Стейк",
  },
];

export const cards = [
  {
    title: "Найкращі пропозиції",
    name: "Хрусткі сендвічі",
    text: "Насолоджуйтесь великими сендвічами. Ідеальний шматок сендвіча.",
    photo: "/cards/sandwiches.png",
    reverse: false,
  },
  {
    title: "Святкуйте вечірки зі",
    name: "Cмаженою куркою",
    text: "Придбайте найкращу смажену курку з пікантним лимонно-чилі смаком. Перегляньте найкращі пропозиції щодо смаженої курки.",
    photo: "/cards/fried-chicken.png",
    reverse: true,
  },
  {
    title: "Хочете поїсти гарячої та гострої",
    name: "Піци?",
    text: "Об’єднайтеся з другом та насолоджуйтесь гарячими та хрусткими піца-попсами. Спробуйте з найкращими пропозиціями.",
    photo: "/cards/pizza.png",
    reverse: false,
  },
];
export const cities = [
  "Сан-Франциско",
  "Маямі",
  "Сан-Дієго",
  "Іст-Бей",
  "Лонг-Біч",
  "Лос-Анджелес",
  "Вашингтон",
  "Сіетл",
  "Портленд",
  "Нашвілл",
  "Нью-Йорк",
  "Орандж-Каунті",
  "Атланта",
  "Шарлотт",
  "Денвер",
  "Чикаго",
  "Фінікс",
  "Лас-Вегас",
  "Сакраменто",
  "Оклахома-Сіті",
  "Колумбус",
  "Нью-Мексико",
  "Альбукерке",
  "Сакраменто",
  "Новий Орлеан",
];
export const menuSections = [
  {
    title: "Компанія",
    links: ["Про нас", "Команда", "Кар'єра", "Блог"],
  },
  {
    title: "Контакти",
    links: ["Допомога & Підтримка", "Партнерство", "Приєднуйся до нас"],
  },
  {
    title: "Правова інформація",
    links: [
      "Правила & умови",
      "Повернення коштів & скасування",
      "Політика конфіденційності",
      "Політика cookie",
    ],
  },
]