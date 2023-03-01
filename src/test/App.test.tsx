import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { Footer, Header } from '../componentes';
import { Home, PessoaUsuaria, Profissional } from '../pages';

describe('App tests Together with Header, Main and Footer of the Page', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Header />
          <Home />
          <Footer />
        </BrowserRouter>
      );
    })

    it('should contains in Header redirect links', () => {
      const linkHome = screen.getByTestId('home-header');
      const linkUsuaria = screen.getByTestId('usuaria-header');
      const linkProfissional = screen.getByTestId('profissional-header');
      expect(linkHome).toBeInTheDocument();
      expect(linkUsuaria).toBeInTheDocument();
      expect(linkProfissional).toBeInTheDocument();
    });

    it('should contains the heading boas vindas a lacrei saúde', () => {
      const heading = screen.getByText(/boas vindas a lacrei saúde/i);
      expect(heading).toBeInTheDocument();
    });

    it('should contains buttons redirect in Page Home', () => {
      const btnUser = screen.getByRole('button', { name: 'Pessoa Usuária' });
      const btnProfissional = screen.getByRole('button', { name: 'Profissional' });
      expect(btnUser).toBeInTheDocument();
      expect(btnProfissional).toBeInTheDocument();
    });

    it('should contains presentations text of the Lacrei', () => {
      const text = screen.getByText(/Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+/i);
      expect(text).toBeInTheDocument();
    });

    it('should contains in Footer redirect links', () => {
      const linkHome = screen.getByTestId('home-footer');
      const linkUsuaria = screen.getByTestId('usuaria-footer');
      const linkProfissional = screen.getByTestId('profissional-footer');
      expect(linkHome).toBeInTheDocument();
      expect(linkUsuaria).toBeInTheDocument();
      expect(linkProfissional).toBeInTheDocument();
    });

    it('should contains Icons Logo', () => {
      const logoFb = screen.getByRole('img', { name: /Logo Facebook/i });
      const logoInsta = screen.getByRole('img', { name: /Logo Insta/i });
      const logoLinkedln = screen.getByRole('img', { name: /Logo Linkedin/i });
      expect(logoFb).toBeInTheDocument();
      expect(logoInsta).toBeInTheDocument();
      expect(logoLinkedln).toBeInTheDocument();
    });
});