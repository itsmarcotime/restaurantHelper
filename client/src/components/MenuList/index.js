import React from 'react';

const MenuList = ({ thoughts, title }) => {
// make sure to look at this in modules..


    // if (!thoughts.length) {
    //     return <h3>No items in your menu...</h3>;
    // }

    // return (
    //     <div>
    //         <h3>{title}</h3>
    //         {thoughts &&
    //             thoughts.map(thought => (
    //                 <div key={thought._id} className="card mb-3">
    //                     <p className='card-header'>
    //                         {thought.username}
    //                         thought on {thought.createdAt}
    //                     </p>
    //                     <div className='card-body'>
    //                         <p>{thought.thoughtText}</p>
    //                         <p className='mb-0'>
    //                             Reactions: {thought.reactionCount} || Click to{' '}
    //                             {thought.reactionCount ? 'see' : 'start '} the discussion!
    //                         </p>
    //                     </div>
    //                 </div>
    //             ))}
    //     </div>
    // );
};

export default MenuList;