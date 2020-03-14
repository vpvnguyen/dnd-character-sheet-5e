import React from "react";

import Layout from "../components/Layout";
import CharHeader from "../components/CharSheet/CharHeader";
import CharStats from "../components/CharSheet/CharStats";

const Sheet = () => (
  <>
    <Layout>
      <CharHeader />
      <CharStats />
    </Layout>
  </>
);

export default Sheet;
