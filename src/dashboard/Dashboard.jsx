import React from "react";
import Search from "./search/Search";
import SearchForm from "./search/SearchForm";
import RiverTable from "./riverTable/RiverTable";
import RiverTableView from "./riverTable/RiverTableView";
import RiverProvider from "../context/RiverContext";

const Dashboard = () => {
  // rivers in iceland, british columbia, usa, new zealand, europe, etc.

  return (
    <RiverProvider>
      <h2>Search rivers</h2>
      <SearchForm />
      <RiverTableView />
    </RiverProvider>
    // search bar
    // view of current favorite rivers
    // river
    //
  );
};

export default Dashboard;
