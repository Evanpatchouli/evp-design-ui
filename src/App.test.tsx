import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

function openRoute(path: string) {
  window.history.replaceState(null, '', '/#' + path);
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('opens the documentation home', async () => {
  openRoute('/');
  expect(await screen.findByRole('button', { name: /Get right now/ })).toBeInTheDocument();
});

// A cold Jest run also compiles the lazy route and its ESM Markdown dependencies.
const routeTimeout = 30000;

test('opens the Button documentation from its hash URL', async () => {
  openRoute('/components/evp-button');
  expect(await screen.findByRole('heading', { name: 'EvpButton', level: 1 }, { timeout: routeTimeout })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Primary Plain' })).toBeInTheDocument();
}, routeTimeout);
