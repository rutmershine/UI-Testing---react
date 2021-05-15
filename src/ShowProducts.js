import React, { useState } from 'react';

const products = [
    {
        name: 'bread',
        category: 'pastries',
        price: 4
    },
    {
        name: 'milk',
        category: 'milky',
        price: 5
    },
    {
        name: 'cheese',
        category: 'milky',
        price: 3
    },
    {
        name: 'tomato',
        category: 'vegetables',
        price: 2
    },
    {
        name: 'butter',
        category: 'milky',
        price: 2
    },
    {
        name: 'bigCheese',
        category: 'milky',
        price: 7
    },
];

export default function ShowProducts(props) {
    const [showExpensive, setShowExpensive] = useState(true);

    let countProdsFromCat = 0;
    return (<>
        <ul>
            {products.map((p) => {
                countProdsFromCat = props.selectedCategory === p.category ? countProdsFromCat + 1 : countProdsFromCat;
                return props.selectedCategory === p.category && (p.price < 4 || showExpensive) ?
                    (<li>
                        name: {p.name}, category: {p.category}, price: {p.price}.
                    </li>) : '';
            })}
        </ul>
        {countProdsFromCat > 1 ? (<span id="many">בקטגוריה {props.selectedCategory} מוצרים רבים<br></br></span>) : ''}

        <button onClick={() => setShowExpensive(false)}>הסתר פריטים שמחירם יקר</button>
    </>
    );
}