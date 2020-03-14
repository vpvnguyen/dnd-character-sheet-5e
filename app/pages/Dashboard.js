import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

import fetch from "isomorphic-unfetch";

const Dashboard = props => (
  <Layout>
    <div>User's dashboard</div>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <div>
      {/* {props.users.map(user => (
        <li key={user.id}>
          <Link href="/p/[id]" as={`/p/${user.id}`}>
            <a>Username: {user.name}</a>
          </Link>
        </li>
      ))} */}
    </div>
    <div>
      <Link href="/Sheet">
        <button>character sheet</button>
      </Link>
    </div>
  </Layout>
);

// fetch data from charSheets API
Dashboard.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");

  //   const res = await fetch("http://localhost:3001/getChar");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return { shows: data.map(entry => entry.show) };
};

export default Dashboard;
