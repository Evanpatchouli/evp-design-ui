import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

function openRoute(path?: string) {
  window.history.replaceState(null, '', path ? '/#' + path : '/');
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
  localStorage.setItem('routes', JSON.stringify({ history: ['/general'] }));
  openRoute('/');
  expect(await screen.findByRole('button', { name: /Get right now/ })).toBeInTheDocument();
  expect(screen.queryByRole('navigation', { hidden: true })).not.toBeInTheDocument();
});

// A cold Jest run also compiles the lazy route and its ESM Markdown dependencies.
const routeTimeout = 30000;

test('opens the Button documentation from its hash URL', async () => {
  localStorage.setItem('routes', JSON.stringify({ history: ['/general'] }));
  openRoute('/components/evp-button');
  expect(await screen.findByRole('heading', { name: 'EvpButton', level: 1 }, { timeout: routeTimeout })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Primary Plain' })).toBeInTheDocument();
}, routeTimeout);

test('restores the last route when the entry URL has no hash', async () => {
  localStorage.setItem('routes', JSON.stringify({ history: ['/general'] }));
  openRoute();
  expect(await screen.findByRole('heading', { name: 'General' }, { timeout: routeTimeout })).toBeInTheDocument();
  expect(window.location.hash).toBe('#/general');
}, routeTimeout);

test('can navigate when saved route history is damaged', async () => {
  localStorage.setItem('routes', 'invalid JSON');
  openRoute('/general');
  expect(await screen.findByRole('heading', { name: 'General' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Button' })).toHaveAttribute('href', '#/components/evp-button');
});
