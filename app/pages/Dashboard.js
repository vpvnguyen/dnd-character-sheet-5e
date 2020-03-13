import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <>
      <Layout />
      <div>User's dashboard</div>
      <Link href="/Sheet">
        <button>character sheet</button>
      </Link>
    </>
  );
}
