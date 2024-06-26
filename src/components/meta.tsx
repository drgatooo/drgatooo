import Head from 'next/head';

interface MetaProps {
  title: string;
  keywords?: string;
  description: string;
}

export default function Meta({ title, keywords, description }: MetaProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}
