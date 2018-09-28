import Head from 'next/head';

export const HeadComponent = () => (
  <Head>
    <title>SSR</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

const Index = ({ title = 'Testing SSR🤓' }) => (
  <div>
    <HeadComponent />
    <h2>{title}</h2>
  </div>
);

export default Index;
