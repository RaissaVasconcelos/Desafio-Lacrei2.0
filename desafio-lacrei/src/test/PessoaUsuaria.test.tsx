import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { PessoaUsuaria } from '../pages';

describe('Elements in Page Pessoa Usuaria', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PessoaUsuaria />
      </BrowserRouter>
    );
  })

  it('should Title the User page', () => {
    const text = screen.getByRole('heading');
    expect(text).toHaveTextContent('Pessoa Usuária');
  });

  it('should paragh the User page', () => {
    const text = screen.getByText('A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.');
    expect(text).toBeInTheDocument();
  });

  it('should image the User page', () => {
    const img = screen.getByAltText('Imagem de Usuários')
    expect(img).toBeInTheDocument();
  })
});