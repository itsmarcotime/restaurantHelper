import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {QUERY_MENU} from '../utils/queries';
import { UPDATE_ORDER } from '../utils/mutations';

const TableSetUp = () => {

    const [UpdateOrder] = useMutation(UPDATE_ORDER);
    const { loading, data } = useQuery(QUERY_MENU);
    const menus = data?.menus || []
    console.log(menus);

    async function handleSubmit(id, value) {
        
        await UpdateOrder({
            variables:{
                updateOrderId:id, 
                value:value
            }
        })
        window.location.assign("/tableSetUp")
    }

  return (
      <div className='setup-container'>

          <div className='table-box full-width'>
              <h3>Table # here</h3>
          </div>

          <div className='table-box'>
              Restaurant Name's Menu:

              <span id="menu-list">
                  {
                      loading === false ? menus.filter(menu => menu.isOrdered===false).map(menu => {
                          return (
                              <p>{menu.menuText} - {menu.menuPrice} 
                              <button type="click" class="btn" id="add-btn" onClick={() => handleSubmit(menu._id, true) }>Add to items ordered</button>
                              </p>
                          )
                      }) : ''
                  }
              </span>

              

          </div>

          <div className='table-box'>
              Items Ordered:

              <div>
                  <span id="items-added">
                  {
                      loading === false ? menus.filter(menu => menu.isOrdered===true).map(menu => {
                          return (
                            <p>{menu.menuText} - {menu.menuPrice} 
                              <button type="click" class="btn" id="add-btn" onClick={() => handleSubmit(menu._id, false) }>Add to items ordered</button>
                              </p>
                          ) 
                      }) : ''
                  }
                  </span>
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