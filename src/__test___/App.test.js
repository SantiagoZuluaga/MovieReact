import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Render App', () => {
    const div = document.createElement('div');
    render(<App />, div);
});