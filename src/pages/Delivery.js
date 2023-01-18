import React from 'react'

import Categories from '../components/Categories'
import './styles/Delivery.scss'

const Delivery = () => {
  return (
    <div className='page_wrap'>
      <div className="container">
          <div className="grid">
          <Categories/>
          <div className="delivery">
          <h1>Доставка</h1>
          <p>Доставка товаров осуществляется по Москве и Московской области, до подъезда, в любой день недели и время суток. Независимо от выходных и праздничных дней. Осуществляем доставки "по звонку" с возможностью оплаты доставки и материалов на месте. При наличии товара на складе возможна доставка в день заказа!</p>
          <h3>Стоимость доставки</h3>
          <table>
            <thead>
              <tr>
                <td>Вес заказа</td>
                <td>Объем заказа:</td>
                <td>от МКАД до Центра</td>
                <td>Доплата за МКАД:</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>до 150 кг</td>
                <td>до 2 м. куб.</td>
                <td>800 руб</td>
                <td>30 руб / км</td>
              </tr>
              <tr>
                <td>до 1 тонны</td>
                <td>до 6 м. куб.</td>
                <td>1800 руб</td>
                <td>0 руб / км</td>
              </tr>
              <tr>
                <td>до 2 тонны</td>
                <td>до 6 м. куб.</td>
                <td>4500 руб</td>
                <td>30 руб / км</td>
              </tr>
              <tr>
                <td>до 3 тонны</td>
                <td>до 20 м. куб.</td>
                <td>4500 руб</td>
                <td>30 руб / км</td>
              </tr>
              <tr>
                <td>до 5 тонны</td>
                <td>до 20 м. куб.</td>
                <td>4500 руб</td>
                <td>40 руб / км</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>свыше 5 тонны</td>
                <td>Договорная</td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <h3>Условии гозврата</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi, maiores quibusdam exercitationem, soluta sit eligendi vero id aliquam dolor optio cupiditate sed in illum deserunt omnis temporibus, adipisci sunt non reprehenderit itaque. Odit et, vel soluta facilis hic corporis aliquam voluptatum labore repellendus ab. Non consequatur praesentium officiis aspernatur accusantium consectetur officia harum facilis, consequuntur cum voluptatum doloribus quam quis libero ipsam quasi corrupti nobis. Praesentium suscipit id placeat perferendis doloremque, dicta officiis? Labore atque expedita voluptatibus perferendis optio quia vero cumque aliquid exercitationem ipsum dignissimos culpa quo minus placeat officiis magni, totam tempore. At atque aliquam natus omnis?</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Delivery