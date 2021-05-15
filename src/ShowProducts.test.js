import React from 'react';
import { render, fireEvent, screen, getAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowProducts from './ShowProducts';


test('check message of many products is appear', () => {
    render(<ShowProducts selectedCategory="milky" />)
    expect(screen.getByText('בקטגוריה milky מוצרים רבים')).toBeInTheDocument();
});

test('check message of many products is not appear', () => {
    render(<ShowProducts selectedCategory="vegetables" />);
    expect(screen.queryByText('בקטגוריה vegetables מוצרים רבים')).not.toBeInTheDocument();
    // The standard getBy methods throw an error when they can't find an element, so if you want to make an assertion that an element is not present in the DOM, you can use queryBy APIs instead:
    // Therefore its wrong: expect(screen.getByText('בקטגוריה vegetables מוצרים רבים')).not.toBeInTheDocument();
});

test('check if the amount of products in milky category is 4', () => {
    render(<ShowProducts selectedCategory="milky" />);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);// the role of li is listitem
    // a link for default roles is https://www.w3.org/TR/html-aria/#docconformance
    // setting a role and/or aria-* attribute that matches the implicit ARIA semantics is unnecessary and is not recommended as these properties are already set by the browser, and we must not use the role and aria-* attributes in a manner that conflicts with the semantics described.
});

test('check if the amount of products in vegetables category is 1', () => {
    render(<ShowProducts selectedCategory="vegetables" />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
});

test('check if clicking on the button hides expensive products (big or equals to 4)', () => {
    render(<ShowProducts selectedCategory="milky" />);
    fireEvent.click(screen.getByRole('button'));//or:getByText('הסתר פריטים שמחירם יקר')
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

// test('another way for the last checking, using a variable to store the items', () => {
//     render(<ShowProducts selectedCategory="milky" />);
//     fireEvent.click(screen.getByRole('button'));
//     const items = screen.getAllByRole('listitem');
//     expect(items).toHaveLength(2);
// });


