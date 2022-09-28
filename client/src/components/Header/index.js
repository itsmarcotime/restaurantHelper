import React from 'react';

function Header() {

    const categories = [
        { name: "lobby", description: "This will display table setup"},
        { name: "menu", description: "This will display restaunts personal menu"},
        { name: "about", description: "about the application"},
        { name: "contact", description: "contact the creators"}
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

  return (
    <header>
        <nav>
            <ul>
                <li>
                    <a href='#lobby'>
                        Restaunt Name goes here
                    </a>
                </li>

                {categories.map((category) => (
                    <li
                        key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                ))}

            </ul>
        </nav>
    </header>
  );
}

export default Header;