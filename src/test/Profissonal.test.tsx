import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { Profissional } from '../pages';

describe('Elements in Page Pessoa Usuaria', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Profissional />
      </BrowserRouter>
    );
  })

  it('should Title the Profissinal page', () => {
    const text = screen.getByRole('heading');
    expect(text).toHaveTextContent('Profissional');
  });

  it('should paragh the Profissional Page', () => {
    const text = screen.getByText('Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+');
    expect(text).toBeInTheDocument();
  });

  it('should image the Profissional page', () => {
    const img = screen.getByAltText('Imagem de Usuários')
    expect(img).toBeInTheDocument();
  })
});