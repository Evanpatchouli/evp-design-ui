declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.css';
declare module '*.svg';
declare module '*.md';
declare module '*.mdx';
declare module '*.tsx?source' {
  const source: string;
  export default source;
}
