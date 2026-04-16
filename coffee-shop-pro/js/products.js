const products = [
    // КАВА (20 позицій)
    {
        id: 1,
        title: "Еспресо Класік",
        category: "coffee",
        price: 45,
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500",
        desc: "Ідеальний баланс смаку та енергії."
    },
    {
        id: 2,
        title: "Подвійний Еспресо",
        category: "coffee",
        price: 55,
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500",
        desc: "Подвійний заряд для важкого ранку."
    },
    {
        id: 3,
        title: "Американо",
        category: "coffee",
        price: 45,
        img: "https://surl.li/rkghhw",
        desc: "Еспресо з додаванням гарячої води."
    },
    {
        id: 4,
        title: "Капучино",
        category: "coffee",
        price: 60,
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500",
        desc: "Класика з ніжною молочною пінкою."
    },
    {
        id: 5,
        title: "Лате",
        category: "coffee",
        price: 65,
        img: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500",
        desc: "Більше молока, менше кави.      "
    },
    {
        id: 6,
        title: "Флет Вайт",
        category: "coffee",
        price: 70,
        img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500",
        desc: "Насичений кавовий смак з тонкою пінкою."
    },
    {
        id: 7,
        title: "Раф Кава",
        category: "coffee",
        price: 75,
        img: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=500",
        desc: "Збиті вершки з ванільним цукром."
    },
    {
        id: 8,
        title: "Раф Лаванда",
        category: "coffee",
        price: 80,
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500",
        desc: "Ніжний квітковий присмак."
    },
    {
        id: 9,
        title: "Мокачино",
        category: "coffee",
        price: 75,
        img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500",
        desc: "Кава з гарячим шоколадом."
    },
    {
        id: 10,
        title: "Айс Лате",
        category: "coffee",
        price: 70,
        img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500",
        desc: "Холодна кава з льодом для спеки."
    },
    {
        id: 11,
        title: "Еспресо Тонік",
        category: "coffee",
        price: 80,
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
        desc: "Освіжаючий, гіркий, ідеальний."
    },
    {
        id: 12,
        title: "Бамбл Кава",
        category: "coffee",
        price: 85,
        img: "https://surl.li/imoeur",
        desc: "Еспресо з апельсиновим соком і карамеллю."
    },
    {
        id: 13,
        title: "Глясе",
        category: "coffee",
        price: 75,
        img: "https://surl.li/kfjwub",
        desc: "Чорна кава з кулькою морозива."
    },
    {
        id: 14,
        title: "Лате Макіато",
        category: "coffee",
        price: 65,
        img: "https://images.unsplash.com/photo-1599398054066-846f28917f38?w=500",
        desc: "Шарувата кава: молоко, еспресо, піна."
    },
    {
        id: 15,
        title: "Карамельний Макіато",
        category: "coffee",
        price: 70,
        img: "https://surl.li/zwqcce",
        desc: "Солодкий, з карамельним сиропом."
    },
    {
        id: 16,
        title: "Кава по-Віденськи",
        category: "coffee",
        price: 70,
        img: "https://surl.li/zevsin",
        desc: "З шапкою збитих вершків."
    },
    {
        id: 17,
        title: "Кортадо",
        category: "coffee",
        price: 60,
        img: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=500",
        desc: "Еспресо і молоко 1:1."
    },
    {
        id: 18,
        title: "Лунго",
        category: "coffee",
        price: 45,
        img: "https://surl.li/hlieta",
        desc: "Довгий еспресо, більше кофеїну."
    },
    {
        id: 19,
        title: "Гарбузовий Лате",
        category: "coffee",
        price: 85,
        img: "https://blog.eva.ua/wp-content/uploads/2024/11/10-try-bazovyh-reczepty-smachnogo-garbuzovogo-late.jpg",
        desc: "Осінній хіт з прянощами."
    },
    {
        id: 20,
        title: "Фільтр Кава",
        category: "coffee",
        price: 50,
        img: "https://gemini.ua/wp-content/uploads/2025/05/sho-take-filtr-kava-i-yak-yiyi-gotuvati.jpg",
        desc: "Альтернативне заварювання, чистий смак."
    },

    //  ДЕСЕРТИ (17 позицій) 
    {
        id: 21,
        title: "Чізкейк Нью-Йорк",
        category: "dessert",
        price: 90,
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
        desc: "Класичний сирний десерт."
    },
    {
        id: 22,
        title: "Шоколадний Фондан",
        category: "dessert",
        price: 95,
        img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500",
        desc: "Кекс з рідкою шоколадною серединкою."
    },
    {
        id: 23,
        title: "Тирамісу",
        category: "dessert",
        price: 95,
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
        desc: "Італійський десерт з маскарпоне."
    },
    {
        id: 24,
        title: "Наполеон",
        category: "dessert",
        price: 85,
        img: "https://i.pinimg.com/1200x/c5/22/1f/c5221f8441ec7f5eb14bd4f1eb2f30f2.jpg",
        desc: "Листкове тісто та заварний крем."
    },
    {
        id: 25,
        title: "Медовик",
        category: "dessert",
        price: 80,
        img: "https://i.pinimg.com/736x/77/44/34/774434a5dfaf85cbba46c765f39efad3.jpg",
        desc: "Домашній смак з медовими коржами."
    },
    {
        id: 26,
        title: "Еклер",
        category: "dessert",
        price: 60,
        img: "https://i.pinimg.com/736x/45/39/dc/4539dcc87c7c4a436fb5d0048b9696ea.jpg",
        desc: "Заварне тісто з ніжним кремом."
    },
    {
        id: 27,
        title: "Макарун (сет 3 шт)",
        category: "dessert",
        price: 90,
        img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500",
        desc: "Французьке мигдальне печиво."
    },
    {
        id: 28,
        title: "Брауні з вишнею",
        category: "dessert",
        price: 75,
        img: "https://i.pinimg.com/736x/49/da/1a/49da1ae195ad2ac5cbc855fa6bbcca67.jpg",
        desc: "Вологий шоколадний бісквіт."
    },
    {
        id: 29,
        title: "Круасан з мигдалем",
        category: "dessert",
        price: 70,
        img: "https://i.pinimg.com/736x/d8/34/f2/d834f21690ec64049878af4e5b59d55a.jpg",
        desc: "Хрусткий круасан з горіховою начинкою."
    },
    {
        id: 30,
        title: "Сіннабон",
        category: "dessert",
        price: 80,
        img: "https://surl.li/yyttjp",
        desc: "Булочка з корицею та кремом."
    },
    {
        id: 31,
        title: "Ягідний Тарт",
        category: "dessert",
        price: 85,
        img: "https://i.pinimg.com/1200x/5c/65/92/5c65921d354b18a8a5214de88e204ab6.jpg",
        desc: "Пісочна основа з свіжими ягодами."
    },
    {
        id: 32,
        title: "Панкейки з кленовим сиропом",
        category: "dessert",
        price: 90,
        img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500",
        desc: "Американські млинці на сніданок."
    },
    {
        id: 33,
        title: "Віденські Вафлі",
        category: "dessert",
        price: 95,
        img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500",
        desc: "Ніжний, повітряний десерт з хрусткою скоринкою."
    },
    {
        id: 34,
        title: "Павлова",
        category: "dessert",
        price: 100,
        img: "https://i.pinimg.com/736x/08/ec/91/08ec911ebc666dd64b9d771b45583dad.jpg",
        desc: "Повітряне безе з фруктами."
    },
    {
        id: 35,
        title: "Пончик (Донат)",
        category: "dessert",
        price: 50,
        img: "https://i.pinimg.com/736x/8b/da/13/8bda139ce6f3832d87f35f72a02017bb.jpg",
        desc: "Глазурований пончик з посипкою."
    },
    {
        id: 36,
        title: "Штрудель з яблуком",
        category: "dessert",
        price: 80,
        img: "https://i.pinimg.com/736x/11/8d/0a/118d0a9e21a0973c1338c46f774e5a3b.jpg",
        desc: "Гарячий рулет з яблуками та корицею."
    },
    {
        id: 37,
        title: "Вишневий афін",
        category: "dessert",
        price: 55,
        img: "https://i.pinimg.com/736x/be/94/9a/be949a4f0a6cf9b27058e5c9dab39004.jpg",
        desc: "Пухкий кекс з ягодами."
    },

    // Для дітей(10 позицій) 
    {
        id: 38,
        title: "Какао з маршмелоу",
        category: "kids",
        price: 55,
        img: "https://i.pinimg.com/1200x/a1/3b/7d/a13b7d0b951104d4f1c52c510b5c9181.jpg",
        desc: "Улюблений напій дітей."
    },
    {
        id: 39,
        title: "Гарячий Шоколад",
        category: "kids",
        price: 65,
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500",
        desc: "Густий, солодкий шоколад."
    },
    {
        id: 40,
        title: "Бебічіно",
        category: "kids",
        price: 40,
        img: "https://e-c.storage.googleapis.com/res/a1735774-cd64-48d6-82d5-c7f0f9a116ad/original",
        desc: "Збите молоко (без кави) з сиропом."
    },
    {
        id: 41,
        title: "Мілкшейк Кіт-Кат",
        category: "kids",
        price: 75,
        img: "https://i.pinimg.com/1200x/7d/bd/51/7dbd5160ae9dc76fd87f9ebb988210bf.jpg",
        desc: "Молочний коктейль з кіт-катом."
    },
    {
        id: 42,
        title: "Мілкшейк Полуничний ",
        category: "kids",
        price: 75,
        img: "https://i.pinimg.com/1200x/51/46/7d/51467dde8b2ef37029f69d411cb7699b.jpg",
        desc: "Рожевий коктейль з полуницею."
    },
    {
        id: 43,
        title: "Мілкшейк Шоколадний",
        category: "kids",
        price: 75,
        img: "https://i.pinimg.com/1200x/9d/9e/d4/9d9ed4d3993a4c66dca26c8538ddd5ff.jpg",
        desc: "Супер шоколадний смак."
    },
    {
        id: 44,
        title: "Мілкшейк Oreo",
        category: "kids",
        price: 85,
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
        desc: "Коктейль з печивом Oreo."
    },
    {
        id: 45,
        title: "Сік Апельсиновий (Фреш)",
        category: "kids",
        price: 80,
        img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500",
        desc: "Свіжовижатий апельсин."
    },
    {
        id: 46,
        title: "Сік Яблучний",
        category: "kids",
        price: 40,
        img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500",
        desc: "Натуральний яблучний сік."
    },
    {
        id: 47,
        title: "Ягідний Смузі",
        category: "kids",
        price: 85,
        img: "https://negolodaj.com/wp-content/uploads/2019/07/Smuzi-dlya-detej.jpg",
        desc: "Корисний мікс з лісових ягід."
    },
    // СНЕКИ (20 позицій) 
    {
        id: 48,
        title: "Картопля Фрі",
        category: "snacks",
        price: 50,
        img: "https://i.pinimg.com/1200x/2f/07/ac/2f07acdb438093512cdbc4366dfaf983.jpg",
        desc: "Хрустка золотиста картопля з сіллю."
    },
    {
        id: 49,
        title: "Картопля по-селянськи",
        category: "snacks",
        price: 55,
        img: "https://i.pinimg.com/736x/31/2b/16/312b16f5d3ec0dd55dd53ca82bc91e31.jpg",
        desc: "Скибочки картоплі з часником та зеленню."
    },
    {
        id: 50,
        title: "Гамбургер Класік",
        category: "snacks",
        price: 90,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        desc: "Яловича котлета, огірок, соус."
    },
    {
        id: 51,
        title: "Чізбургер",
        category: "snacks",
        price: 95,
        img: "https://i.pinimg.com/736x/07/e0/0c/07e00c8d3f7104a899dea150f03c4f34.jpg",
        desc: "Класичний бургер з сиром Чеддер."
    },
    {
        id: 52,
        title: "Дабл Чізбургер",
        category: "snacks",
        price: 130,
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
        desc: "Подвійна котлета, подвійний сир."
    },
    {
        id: 53,
        title: "Чікенбургер",
        category: "snacks",
        price: 90,
        img: "https://i.pinimg.com/736x/7e/d8/54/7ed854215c249e3a3b3619e0da1ae217.jpg",
        desc: "Бургер з хрусткою курочкою."
    },
    {
        id: 57,
        title: "Піца Пепероні",
        category: "snacks",
        price: 150,
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
        desc: "Гостра піца з ковбасками."
    },
    {
        id: 58,
        title: "Піца Маргарита",
        category: "snacks",
        price: 130,
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
        desc: "Томати, моцарела, базилік."
    },
    {
        id: 59,
        title: "Піца 4 Сири",
        category: "snacks",
        price: 160,
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        desc: "Моцарела, пармезан, дорблю, чеддер."
    },
    {
        id: 60,
        title: "Піца Карбонара",
        category: "snacks",
        price: 155,
        img: "https://surl.li/oqhpqu",
        desc: "Вершковий соус, бекон, яйце."
    },
    {
        id: 61,
        title: "Шаурма Куряча",
        category: "snacks",
        price: 95,
        img: "https://i.pinimg.com/736x/c1/ab/19/c1ab1953c33a873804dac5a1a38a3e88.jpg",
        desc: "Класична шаурма з куркою та овочами."
    },
    {
        id: 62,
        title: "Шаурма XL",
        category: "snacks",
        price: 120,
        img: "https://i.pinimg.com/736x/39/11/40/391140246aac532c8fc0f91d984f0f18.jpg",
        desc: "Велика порція м'яса та подвійний сир."
    },
    {
        id: 63,
        title: "Цезар Рол",
        category: "snacks",
        price: 100,
        img: "https://i.pinimg.com/736x/71/0f/52/710f5207d99263ee51fa974899289269.jpg",
        desc: "Курочка, салат, пармезан в лаваші."
    },
    {
        id: 64,
        title: "Курячі Нагетси (6 шт)",
        category: "snacks",
        price: 60,
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500",
        desc: "Хрустке куряче філе в паніровці."
    },
    {
        id: 65,
        title: "Цибулеві кільця",
        category: "snacks",
        price: 55,
        img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500",
        desc: "Смажені кільця цибулі до пива чи коли."
    },
    {
        id: 66,
        title: "Клаб-сендвіч",
        category: "snacks",
        price: 85,
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
        desc: "Тостовий хліб, шинка, сир, овочі."
    },
    {
        id: 67,
        title: "Паніні з куркою",
        category: "snacks",
        price: 75,
        img: "https://i.pinimg.com/736x/06/0f/dc/060fdccb6d72b7ef45ef43cbf008b1a6.jpg",
        desc: "Італійський гарячий бутерброд."
    }
];

export default products;