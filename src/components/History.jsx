import React, { useEffect, useState } from "react";
import styles from './styles';

const History = ({ history, setCountData }) => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (history.length) {
      setCurrent(0);
    }
  }, [history])

  const handleClick = ({ idx, wordCount }) => {
    setCurrent(idx);
    setCountData({
      loading: false,
      loaded: true,
      data: wordCount,
    });
  };

  return (
    <div id="history">
      History
      {history.map((each, idx) => {
        const { url, wordCount } = each;
        return (
          <div
            key={url}
            className={`url ${current === idx ? ' currentUrl' : ''}`}
            onClick={() => handleClick({ idx, wordCount })}
          >
            {url}
          </div>
        );
      })}
    </div>
  );
};

export default History;
