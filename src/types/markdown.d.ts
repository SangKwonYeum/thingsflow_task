declare module 'react-native-markdown-package' {
  import { WebBrowserResult } from 'expo-web-browser';
  import { Component } from 'react';

  // eslint-disable-next-line react/prefer-stateless-function
  class Markdown extends Component<{
    enableLightBox?: boolean;
    navigator?: unknown;
    imageParam?: unknown;
    onLink?: (url: string) => Promise<WebBrowserResult>;
    bgImage?: unknown;
    onImageOpen?: unknown;
    onImageClose?: unknown;
    rules?: unknown;
    styles: unknown;
  }> {}

  export = Markdown;
}
