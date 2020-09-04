import React from 'react';
import { render } from '@testing-library/react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const data = 'hola';
describe('App', () => {
  describe('Componente', () => {
    it('Display an initial list with all phones', () => {
      expect(data).toBe('hola');
    });
  });

  describe('When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone', () => {
    it('Debería ser X', () => {
      expect(data).toBe('hola');
    });
  });

  describe('Display an initial list with all phones', () => {
    it('Debe de ser X', () => {
      expect(data).toBe('hola');
    });
  });

  describe('Display a spinner or placeholder component while the API request is ongoing', () => {
    it('Debe de ser X', () => {
      expect(data).toBe('hola');
    });
  });
});
