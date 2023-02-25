import { createContext } from "react";

const data = createContext();

export const Provider = ({ children }) => {
	const dataBase = {
		navbarData: [
			{ title: "Отели", link: "#hotels" },
			{ title: "Турпакеты", link: "#tours" },
			{ title: "Страны", link: "#offers" },
			{ title: "Офисы продаж", link: "/" },
			{ title: "Отзывы", link: "#reviews" },
		],
		navbarPhone: "+999 90 547-48-94",

		banner: {
			cities: [
				{ supTitle: "Калифорния, США", title: "Лос Анджелес", id: "LA" },
				{ supTitle: "Великобритания", title: "Лондон", id: "LON" },
			],
			searchBarItems: [
				{ title: "Локация", ctaText: "Выберите локацию...", id: "location" },
				{ title: "Занятия", ctaText: "Прыжки с высоты", id: "amusements" },
				{ title: "Дата", ctaText: "Выбрать дату", id: "date" },
			],
			breadCrumpLinks: [
				{ title: "Instagram", link: "/" },
				{ title: "Facebook", link: "/" },
				{ title: "YouTube", link: "/" },
			],
		},

		hotels: {
			title: ["Лучшие отели"],
			subtitle: ["Смотреть все отели"],

			hotelCards: [
				{
					image: "/hotels_card_1.png",
					title: "Redac Gateway Hotel",
					location: "Лос Анджелес",
					rating: "5 / 5",
					review: "Отлично",
					reviewNum: "(374 отзыва)",
					price: "$ 264",
					id: "Redac",
				},
				{
					image: "/hotels_card_2.png",
					title: "Adominos Lux",
					location: "Чикаго",
					rating: "5 / 5",
					review: "Отлично",
					reviewNum: "(374 отзыва)",
					price: "$ 264",
					id: "Adominos",
				},
				{
					image: "/hotels_card_3.png",
					title: "Tosmanian Hotel",
					location: "Лос Анджелес",
					rating: "5 / 5",
					review: "Отлично",
					reviewNum: "(374 отзыва)",
					price: "$ 264",
					id: "Tosmanian",
				},
				{
					image: "/hotels_card_4.png",
					title: "Koh-Panghan",
					location: "Лос Анджелес",
					rating: "5 / 5",
					review: "Отлично",
					reviewNum: "(374 отзыва)",
					price: "$ 264",
					id: "Koh-Panghan",
				},
				{
					image: "/hotels_card_4.png",
					title: "Koh-Panghan",
					location: "Лос Анджелес",
					rating: "5 / 5",
					review: "Отлично",
					reviewNum: "(374 отзыва)",
					price: "$ 264",
					id: "Koh-Panghan",
				},
			],
		},
		choice: {
			title: ["Выбор большинства"],

			photoCards_big: [
				{ title: "Египет", image: "/choice_img_1.png", id: "egypt" },
				{ title: "Нидерланды", image: "/choice_img_2.png", id: "netherlands" },
			],
			photoCards_small: [
				{ title: "Турция", image: "/choice_img_3.png", id: "turkiye" },
				{ title: "Мальдивы", image: "/choice_img_4.png", id: "maldives" },
				{ title: "ОАЭ", image: "/choice_img_5.png", id: "uae" },
			],
			photoCards_mobile_1: [
				{ title: "Египет", image: "/choice_img_1.png", id: "turkiye" },
				{ title: "Турция", image: "/choice_img_3.png", id: "turkiye" },
				{ title: "Мальдивы", image: "/choice_img_4.png", id: "maldives" },
			],
			photoCards_mobile_2: [
				{ title: "Нидерланды", image: "/choice_img_2.png", id: "netherlands" },
				{ title: "Мальдивы", image: "/choice_img_4.png", id: "maldives" },
				{ title: "ОАЭ", image: "/choice_img_5.png", id: "uae" },
			],
		},

		tours: {
			title: ["Популярные туры"],

			tourTypes: [
				{
					image: "/tours_img_1.png",
					title: "Отдых у моря",
					subtitle: "14 отелей",
				},
				{
					image: "/tours_img_2.png",
					title: "Отдых у моря",
					subtitle: "7 отелей",
				},
				{
					image: "/tours_img_3.png",
					title: "Шоппинг туры",
					subtitle: "26 отелей",
				},
				{
					image: "/tours_img_4.png",
					title: "Экстремальные туры",
					subtitle: "5 отелей",
				},
				{
					image: "/tours_img_5.png",
					title: "Гастро туры",
					subtitle: "27 отелей",
				},
				{
					image: "/tours_img_6.png",
					title: "Романтические туры",
					subtitle: "48 отелей",
				},
				{
					image: "/tours_img_1.png",
					title: "Отдых у моря",
					subtitle: "14 отелей",
				},
				{
					image: "/tours_img_2.png",
					title: "Отдых у моря",
					subtitle: "7 отелей",
				},
				{
					image: "/tours_img_3.png",
					title: "Шоппинг туры",
					subtitle: "26 отелей",
				},
				{
					image: "/tours_img_4.png",
					title: "Экстремальные туры",
					subtitle: "5 отелей",
				},
				{
					image: "/tours_img_5.png",
					title: "Гастро туры",
					subtitle: "27 отелей",
				},
				{
					image: "/tours_img_6.png",
					title: "Романтические туры",
					subtitle: "48 отелей",
				},
			],
		},
		offers: {
			title: ["Выгодные предложения"],
			subtitle: ["Смотреть все предложения"],

			offerCards: [
				{
					id: "berlin",
					image: "./offers_img_1.png",
					title: "Берлин",
					location: "Европа",
					offerType_1: "Культура",
					offerType_2: "Развлечения",
					price: "$700",
					descr:
						"Столица Германии не может похвастаться многочисленными старинными зданиями — к сожалению, в ходе Второй мировой войны Берлин сильно пострадал. Зато здесь много интересных музеев различной направленности и художественных галерей, среди которых вы точно найдёте что-то...",
					mobile_descr:
						"Столица Германии не может похвастаться многочисленными старинными зданиями — к сожалению, в ходе Второй мировой войны Берлин сильно пострадал. Зато здесь много интересных музеев различной направленности и...",
					buttonText: "Подробнее",
				},
				{
					id: "hong-kong",
					image: "./offers_img_2.png",
					title: "Гонг-Конг",
					location: "Азия",
					offerType_1: "Культура",
					offerType_2: "Развлечения",
					price: "$849",
					descr:
						"Столица Германии не может похвастаться многочисленными старинными зданиями — к сожалению, в ходе Второй мировой войны Берлин сильно пострадал. Зато здесь много интересных музеев различной направленности и художественных галерей, среди которых вы точно найдёте что-то...",
					mobile_descr:
						"Столица Германии не может похвастаться многочисленными старинными зданиями — к сожалению, в ходе Второй мировой войны Берлин сильно пострадал. Зато здесь много интересных музеев различной направленности и...",
					buttonText: "Подробнее",
				},

				{
					id: "sanfran",
					image: "./offers_img_3.png",
					title: "Сан-Франциско",
					location: "Северная Америка",
					offerType_1: "Культура",
					offerType_2: "Развлечения",
					price: "$539",
					descr:
						"Столица Германии не может похвастаться многочисленными старинными зданиями — к сожалению, в ходе Второй мировой войны Берлин сильно пострадал. Зато здесь много интересных музеев различной направленности и художественных галерей, среди которых вы точно найдёте что-то...",
					mobile_descr:
						"Столица Германии не может похвастаться многочисленными старинными зданиями — к сожалению, в ходе Второй мировой войны Берлин сильно пострадал. Зато здесь много интересных музеев различной направленности и...",
					buttonText: "Подробнее",
				},
			],
		},
		news: {
			title: ["Новости туризма"],
			newsCards: [
				{
					image: "/news_img_1.png",
					title: "Небольшой волшебный водопад на Бали",
					descr:
						"Незаметно для многих, Бали изобилует захватывающими дух водопадами, которые различаются по высоте, ярусам и каскадам, а некоторые даже спрятаны в великолепных местах, о которых мало кто знает",
				},
				{
					image: "/news_img_2.png",
					title: "Тихий и спокойный парк на краю восточной Германии",
					descr:
						"Парк восхищает своим разнообразием и осенним буйством красок.Ощущение, что попали в фантастический мир: нежные крокусы (конец октября!) рядом с жёсткими колючками кактусов, цветущей юккой и",
				},
				{
					image: "/news_img_3.png",
					title: "Незаурядные японские улочки прямо как в кино",
					descr:
						"Самый привлекательный с туристической точки зрения - традиционный японский квартал Гион, который был обустроен в Киото еще в 656 году. Здесь расположено множество традиционных деревянных",
				},
				{
					image: "/news_img_4.png",
					title: "Высотки Чикаго и прилегающий пляж",
					descr:
						"Nulla a elit sed sem luctus tincidunt eget id ex. Donec faucibus sagittis nunc, sit amet scelerisque orci tincidunt at. Nulla quis blandit augue. Nullam vel nisi odio. Etiam fermentum arcu ligula, vel semper justo auctor non. Orci",
				},
				{
					image: "/news_img_1.png",
					title: "Высотки Чикаго и прилегающий пляж",
					descr:
						"Nulla a elit sed sem luctus tincidunt eget id ex. Donec faucibus sagittis nunc, sit amet scelerisque orci tincidunt at. Nulla quis blandit augue. Nullam vel nisi odio. Etiam fermentum arcu ligula, vel semper justo auctor non. Orci",
				},
			],
		},
		reviews: {
			title: ["Отзывы наших клиентов"],
			subtitle: ["Смотреть все отзывы"],

			reviewCards: [
				{
					clientName: "Фрима Халилова",
					clientImage: "/review_img_1.png",
					clientLocation: "Таиланд",
					clientMark: 5,
					reviewTitle: "Лучший туроператор в Узбекистане",
					reviewText:
						"Добрый день! Хочу поблагодарить туроператора Марину, и всю команду, за замечательный долгожданный отпуск! Я давно ждала когда откроют Тайланд, и моя мечта сбылась...",
				},
				{
					clientName: "Андреа Абдуллаева",
					clientImage: "/review_img_2.png",
					clientLocation: "Турция",
					clientMark: 5,
					reviewTitle: "Отличный отдых и куча эмоций",
					reviewText:
						"Обратилась в данное агентство, чтобы выбрать тур в Турцию. Спасибо Наталье, быстро помогла определиться с выбором, было предоставлено несколько вариантов по...",
				},
				{
					clientName: "Настасья Хлодникова",
					clientImage: "/review_img_3.png",
					clientLocation: "ОАЭ",
					clientMark: 5,
					reviewTitle: "Высший пилотаж - залог успеха",
					reviewText:
						"Слетали в декабре в ОАЭ, поездка была спонтанной и тур нам турагент подобрал очень оперативно. Отель соответствовал всем нашим запросам и даже превысил...",
				},
				{
					clientName: "Настасья Хлодникова",
					clientImage: "/review_img_3.png",
					clientLocation: "ОАЭ",
					clientMark: 5,
					reviewTitle: "Высший пилотаж - залог успеха",
					reviewText:
						"Слетали в декабре в ОАЭ, поездка была спонтанной и тур нам турагент подобрал очень оперативно. Отель соответствовал всем нашим запросам и даже превысил...",
				},
			],
		},
		footer: {
			descr: [
				"Tripo - это современный ответ на групповые путешествия. Мы создали одноранговую социальную сеть для одиноких путешественников, чтобы они могли встречаться с другими искателями приключений, планировать, бронировать и делиться удивительными впечатлениями с помощью единой платформы.",
			],

			linksColumnHeader_1: ["Наше агенство"],
			linksColumn_1: [
				{ title: "О компании", link: "/" },
				{ title: "Сервисы", link: "/" },
				{ title: "Туризм", link: "/" },
				{ title: "Оплата", link: "/" },
			],

			linksColumnHeader_2: ["Полезные ссылки"],

			linksColumn_2: [
				{ title: "Туры", link: "/" },
				{ title: "Страны", link: "/" },
				{ title: "Горячие путевки", link: "/" },
				{ title: "Оплата", link: "/" },
			],
			linksColumnHeader_3: ["Полезные ссылки"],

			paymentMethods: [
				{ image: "/footer_img_1.png", link: "/" },
				{ image: "/footer_img_2.png", link: "/" },
				{ image: "/footer_img_3.png", link: "/" },
			],
			copyrightText: ["2022 © tripo.uz"],

			footerBottom: [
				{ title: "Пользовательское соглашение", link: "/" },
				{ title: "Конфединциальность", link: "/" },
				{ title: "Карта сайта", link: "/" },
			],
		},
	};

	return <data.Provider value={dataBase}>{children}</data.Provider>;
};

export default data;
