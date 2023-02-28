import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { Home } from '../pages/Home'
// import App from '../src/App';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
      const heading = screen.getByText(/boas vindas a lacrei saúde/i);
      expect(heading).toBeInTheDocument()
    });
    it("should return sum correctly", () => {
      expect(2).toBe(2);
  });
});