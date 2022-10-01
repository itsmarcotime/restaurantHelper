import React from 'react';

function MenuList () {

    return (
        <div className='divbox'>
            <div className='input-container'>
                <h4>Add to Menu Here:</h4>

                <input type="text" placeholder="Add food or drink here!" id="food-input"
                    class="form-input" />

                <input type="text" placeholder="Add the price to the item!" id="search-form"
                    class="form-input" />

                <button type="submit" class="btn" id="submit-menu-item">Add item to menu!</button>
            </div>

            <div className='menu-box'>
                <h4>Here is your menu:</h4>
                <span id="menu-list"></span>
            </div>
        </div>
    );
};

export default MenuList;