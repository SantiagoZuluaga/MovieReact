import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarMock from './__mocks__/NavbarMock'
import Navbar from '../components/nav';
import { createMemoryHistory } from 'history'

test('Logo navbar', () => {
    const history = createMemoryHistory()

    render(
        <NavbarMock history={history}>
            <Navbar />
        </NavbarMock>
    );
    expect(screen.getByText("Movie React")).toBeInTheDocument()
});