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
              <h2>Table #</h2>
          </div>

          <div className='table-box'>
            <button type="click" class="return-btn" id="btn"><a href='/'>Return to tables</a></button>
          </div>

          <div className='table-box'>
              <h2>Restaurant Name's Menu:</h2>

              <span id="menu-list">
                  {
                      loading === false ? menus.filter(menu => menu.isOrdered===false).map(menu => {
                          return (
                              <p>{menu.menuText} - {menu.menuPrice} 
                              <button type="click" class="btn-menu" id="add-btn" onClick={() => handleSubmit(menu._id, true) }>Add to items ordered</button>
                              </p>
                          )
                      }) : ''
                  }
              </span>

              

          </div>

          <div className='table-box'>
              <h2>Items Ordered:</h2>

              <div>
                  <span id="items-added">
                  {
                      loading === false ? menus.filter(menu => menu.isOrdered===true).map(menu => {
                          return (
                            <p>{menu.menuText} - {menu.menuPrice} 
                              <button type="click" class="btn-ordered" id="add-btn" onClick={() => handleSubmit(menu._id, false) }>Remove</button>
                              </p>
                          ) 
                      }) : ''
                  }
                  </span>
              </div>

              <button type="click" class="btn-checkout" id="checkout-btn">Checkout Table!</button>
          </div>

         


      </div>
  );
};

export default TableSetUp;