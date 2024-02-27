import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Center } from "@chakra-ui/react";

function HomepageHeader() {
  return (
    <Center as="header" p={12}>
      <img className="homeLogo" width={200} height={200} />
    </Center>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The safer way to onboard users, link a wallet and pay with crypto"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
