import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ThemeSwitch from "../test/ThemeSwitch";
import fetch from "isomorphic-unfetch";
import charSheetAPI from "../utils/charSheet.API";

const Dashboard = props => (
  <Layout>
    <ThemeSwitch />
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

    <div>{props.string}</div>
    <div>{props.getCharData}</div>

    <div>
      <Link href="/Sheet">
        <button>character sheet</button>
      </Link>
    </div>
  </Layout>
);

// fetch data from charSheets API
Dashboard.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");

  //   const res = await fetch("http://localhost:3001/getChar");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  const getCharData = await charSheetAPI
    .getChar()
    .catch(err => console.log(err))
    .then(logging => logging.data.getChar);
  // .then(result => result.data);

  const string = "string";
  return { shows: data.map(entry => entry.show), string, getCharData };
};

export default Dashboard;
