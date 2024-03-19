import SocialMedia from "./socialMedia/SocialMedia"

const Advertising = () => {
    return (
        <div className="todo__advertising">
            <SocialMedia value="Yandex Директ поможет создать объявления и покажет рекламу тем, кому она интересна." services="Реклама товаров и услуг"  price="Оплата за результат."/>
            <SocialMedia value="Реклама ВКонтакте поможет найти клиентов." services="97 миллионов активных пользователей в месяц" price="500 рублей достаточно для запуска рекламы."/>
      </div>
    )
}
export default Advertising