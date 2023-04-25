import { GlobalStyle } from '../src/components/GlobalStyle';
import { Header } from '../src/components/Header';
import { OpenProvider } from '../src/context/Open';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <OpenProvider>
        <Header />
        <Component  {...pageProps} />
      </OpenProvider>
    </>
  )
}