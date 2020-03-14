import React from "react";

import Layout from "../components/Layout";
import CharHeader from "../components/CharSheet/CharHeader";
import CharStats from "../components/CharSheet/CharStats";
import Panel from "../test/Panel";

const Sheet = () => (
  <>
    <Layout>
      <CharHeader />
      <CharStats />
      <Panel />
    </Layout>
  </>
);

export default Sheet;
