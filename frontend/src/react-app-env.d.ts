/// <reference types="react-scripts" />

// It allows to load mxl/mid files with file-loader
declare module '*.svg' {
  const src: string;
  export default src;
}
