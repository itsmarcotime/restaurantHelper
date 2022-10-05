import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_MENU} from '../utils/queries';

const TableSetUp = () => {

    const { loading, data } = useQuery(QUERY_MENU);
    const menus = data?.menus || []
    console.log(menus);

  return (
      <div className='setup-container'>

          <div className='table-box full-width'>
              <h3>Table # here</h3>
          </div>

          <div className='table-box'>
              Restaurant Name's Menu:

              <span id="menu-list">
                  {
                      loading === false ? menus.map(menu => {
                          return (
                              <p>{menu.menuText} - {menu.menuPrice}</p>
                          )
                      }) : ''
                  }
              </span>

              <button type="click" class="btn" id="add-btn">Add to items ordered</button>

          </div>

          <div className='table-box'>
              Items Ordered:

              <div>
                  <span id="items-added"></span>
              </div>

              <button type="click" class="btn" id="checkout-btn">Checkout Table!</button>
          </div>

          <div className='table-box'>
            <button type="click" class="btn" id="checkout-btn"><a href='/'>Return to tables</a></button>
          </div>


      </div>
  );
};

export default TableSetUp;