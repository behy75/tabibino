import Head from "next/head";
import HomeContent from "../../components/home-content";
import { homeStructuredData } from "../../seo/structured-data.seo";

const HomePage = () => {
  return;
  <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
    </Head>
    <HomeContent />;
  </>;
};

export default HomePage;
