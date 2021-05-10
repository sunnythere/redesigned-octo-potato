import React from "react";

const Results = ({
  data: { data, loading, loaded }
}) => {
  const renderList = (obj) =>
    Object.keys(obj).map((word) => (
      <li key={word}>{`${word}: ${obj[word]}`}</li>
    ));

  if (loading) {
    return <div>...loading</div>
  }

  if (loaded) {
    return <ul>{renderList(data)}</ul>;
  }

  return null;
};

export default Results;
