import React from 'react';

const TableSetUp = () => {
  return (
      <div className='setup-container'>

          <div className='table-box full-width'>
              <h3>Table # here</h3>
          </div>

          <div className='table-box'>
              Restaurant Name's Menu:

              <div>
                  <span id="menu-list"></span>
              </div>
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