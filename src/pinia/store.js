import {defineStore} from "pinia";

export const useWishListStore = defineStore('wishListStore', {
    state:() => ({
        Catigories: [
            {
                title: 'БЮДЖЕТНО И ОЧЕНЬ НУЖНО',
                article: 'wishesBudget',
                key: 'budget'
            },
            {
                title: 'ТВОРЧЕСТВО И ВСЕ ДЕЛА',
                article: 'wishesArt',
                key: 'art'
            },
            {
                title: 'БЮТИ ШТУКОВИНЫ',
                article: 'wishesBeauty',
                key: 'beauty'
            },
            {
                title: 'ХОМ СВИТ ХОМ',
                article: 'wishesHome',
                key: 'home'
            },
            {
                title: 'НАСТОЛЬНЫЕ ИГРЫ',
                article: 'wishesGame',
                key: 'game'
            },
            {
                title: 'НЕ ЗНАЮ ЗАЧЕМ, НО НАДО',
                article: 'wishesZachem',
                key: 'zachem'
            },
            {
                title: 'ЕСЛИ У ВАС БОГАТЫЙ НЕ ТОЛЬКО ВНУТРЕННИЙ МИР...',
                article: 'wishesDorogo',
                key:'dorogo'
            }

        ],
        wishesAll: [
            {
                image: 'socks.jpg',
                name: 'Носки (!)',
                about: 'Высокие. С рисункам и без. Много не бывает. Носки!',
                article: 'w_b1',
                available: 'true',
                key: 'budget'
            },
            {
                image: 'zacolca.jpg',
                name: 'Заколочки',
                about: 'Крабики и просто заколки разных форм',
                article: 'w_b2',
                available: 'true',
                key: 'budget'
            },
            {
                image: 'povyazka.jpg',
                name: 'Повязка',
                about: 'Комментариев нет... Понимания зачем тоже...',
                article: 'w_b3',
                available: 'true',
                key: 'budget'
            },
            {
                image: 'tea.jpg',
                name: 'Чай зеленый',
                about: 'Лучше в пакетиках, со вкусами там всякими...',
                article: 'w_b4',
                available: 'true',
                key: 'budget'
            },

        ],
        wishesArt: [
            {
                image: 'clay.jpg',
                name: 'Голубая глина',
                about: 'Обычная глина для лепки и дальнейшего обжига.',
                article: 'w_a1',
                available: 'true'
            },
            {
                image: 'glaz.jpg',
                name: 'Глазурь для керамики',
                about: 'Разноцветная и прозрачная (!). Пищевая.',
                article: 'w_a2',
                available: 'true'
            },
            {
                image: 'stek.jpg',
                name: 'Стеки для глины',
                about: 'Отдельно или набором - без конкретики.',
                article: 'w_a3',
                available: 'true'
            },
            {
                image: 'butter.jpg',
                name: 'Масленка для красок',
                about: 'Для масляных красок. Да, есть и такое.',
                article: 'w_a4',
                available: 'true'
            }
        ],
        wishesBeauty: [
            {
                image: 'RAD.jpg',
                name: 'Карандаш RAD',
                about: 'Цвета: red, orange, white. Их правда нет в наличии...',
                article: 'w_bu1',
                available: 'true'
            },
            {
                image: 'ollin.jpg',
                name: 'Спрей для волос',
                about: 'Несмываемая штука для волос. Вот так.',
                article: 'w_a2',
                available: 'true'
            },
            {
                image: 'palette.jpg',
                name: 'Палетка от Revolution',
                about: 'Серия Heart breakers. Версия Sweetheart.',
                article: 'w_a4',
                available: 'true'
            },
            {
                image: 'curl.jpg',
                name: 'Мусс для укладки',
                about: 'Ollin Professional Мусс для укладки волос Curl Hair',
                article: 'w_a3',
                available: 'true'
            }
        ],
        wishesHome: [
            {
                image: 'tefal.jpg',
                name: 'Сковорода',
                about: 'Диаметр 24-26 см, антипригарная...',
                article: 'w_h1',
                available: 'true'
            },
            {
                image: 'tarelka.jpg',
                name: 'Тарелочки',
                about: 'Неглубокие, до 25 см диаметром или меньше...',
                article: 'w_h2',
                available: 'true'
            },
            {
                image: 'flower.jpg',
                name: 'Гипсофила',
                about: '1-3 веточки. Другие цветы обречены на смерть.',
                article: 'w_h3',
                available: 'true'
            },
            {
                image: 'tazik.jpg',
                name: 'Тазик',
                about: 'Нет, ну а что. Вечно забываю купить',
                article: 'w_h4',
                available: 'true'
            }
        ],
        wishesZachem: [
            {
                image: 'kovrickformouse.jpg',
                name: 'Коврик для мыши',
                about: 'Logitech Desk Mat Studio, XL, темно-розовый',
                article: 'w_z1',
                available: 'true'
            },
            {
                image: 'yoga.jpg',
                name: 'Коврик для йоги (!)',
                about: 'Чтобы коврик был не только у мыши...',
                article: 'w_z2',
                available: 'true'
            },
            {
                image: 'roll.jpg',
                name: 'Ролик массажный',
                about: 'Да, я жертва рекламы. Да, он будет пылиться и что???',
                article: 'w_z3',
                available: 'true'
            },
            {
                image: 'falafel.jpg',
                name: 'Блокнот Falafel',
                about: 'В точку, формат А5, дизайн любой :)',
                article: 'w_z4',
                available: 'true'
            }
        ],
        wishesGame: [
            {
                image: 'imaginarium.jpg',
                name: 'Имаджинариум',
                about: 'Это база. Пополняем коллекцию игр.',
                article: 'w_g1',
                available: 'true'
            },
            {
                image: 'monopoly.jpg',
                name: 'Монополия',
                about: 'Игра, чтобы со всеми разругаться :)',
                article: 'w_g2',
                available: 'true'
            },
            {
                image: 'karkasson.jpg',
                name: 'Каркассон',
                about: 'Я играла, мне понравилось. Хочу еще.',
                article: 'w_g3',
                available: 'true'
            },
            {
                image: 'manchkin.jpeg',
                name: 'Манчкин',
                about: 'Классическая версия для начала - еще  не играла.',
                article: 'w_g4',
                available: 'true'
            }
        ],
        wishesDorogo: [
            {
                image: 'bad.jpg',
                name: 'Кровать двуспальная',
                about: 'Красиво жить не запретишь.',
                article: 'w_d1',
                available: 'true'
            },
            {
                image: 'matras.jpg',
                name: 'Матрас',
                about: 'Какая кровать без матраса...',
                article: 'w_d2',
                available: 'true'
            },
            {
                image: 'molbert.jpg',
                name: 'Мольберт',
                about: 'Ну это уже чисто для интерьера. Красиво же.',
                article: 'w_d3',
                available: 'true'
            },
            {
                image: 'keyboard.jpg',
                name: 'Клавиатура',
                about: 'Моя за 200 рублей уже не вывозит...',
                article: 'w_d4',
                available: 'true'
            }
        ]
    })
})

export var useWishListFull =  {
    state:() => ({
        Item: {
            article: "",
            name: "",
            user_id: null
        },
        User: {
            id: null,
            ip: "",
            cookie_user: ""
        }
    })
}