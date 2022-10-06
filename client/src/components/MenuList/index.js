import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { ADD_MENU, REMOVE_MENU } from '../../utils/mutations';

function MenuList() {
    const [AddMenu] = useMutation(ADD_MENU);
    const { loading, data } = useQuery(QUERY_MENU);
    const menus = data?.menus || []
    console.log(menus);
    const [RemoveMenu] = useMutation(REMOVE_MENU);

    const [formData, setFormData] = useState({
        menuText: "", 
        menuPrice: 0
    });

    async function handleSubmit() {
        console.log(formData);
        const {data} = await AddMenu({
            variables: {
                menuText: formData.menuText,
                menuPrice: parseFloat(formData.menuPrice)
            }
        }) 
        window.location.reload();
    };

    async function handleRemove(id) {
        console.log(id);
        const {data} = await RemoveMenu({
            variables: {
                removeMenuId:id
            }
        }) 
        window.location.reload();
    }



    return (
        <div className='divbox'>
            <div className='input-container'>
                <h4>Add to Menu Here:</h4>

                <input type="text" placeholder="Add food or drink here!" id="food-input"
                    value={formData.menuText} class="form-input" onChange={(event) => setFormData({...formData, menuText: event.target.value})}/>

                <input type="text" placeholder="Add the price to the item!" id="search-form"
                    value={formData.menuPrice} class="form-input" onChange={(event) => setFormData({...formData, menuPrice: event.target.value})}/>

                <button type="submit" class="btn-input" id="submit-menu-item" onClick={handleSubmit}>Add item to menu!</button>
            </div>

            <div className='menu-box'>
                <h4>Here is your menu:</h4>

                <span id="menu-list">
                    {
                        loading === false ? menus.map(menu => {
                            return (
                                <p>{menu.menuText} - {menu.menuPrice} 
                                 <button type="click" class="btn-remove" id="remove-btn" onClick={() => handleRemove(menu._id)}>Remove item</button>

                                </p>
                            )
                        }) : ''
                    }
                </span>

                <button type="click" class="btn-update" id="update-btn">Update item</button>

               
            </div>
        </div>
    );
};

export default MenuList;