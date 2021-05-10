import React, { useState, useEffect } from 'react';
import {
  getWordCount
} from '../services';
import History from './History';
import Results from './Results';
import { simpleValidate } from '../utils';
import styles from './styles';

const Container = () => {
  // If we had a more complex app, a centralized store would be more extensible and provide better state management
  const [countData, setCountData] = useState({
    loading: false,
    loaded: false,
    data: null,
  });
  const [history, setHistory] = useState([]);
  const [url, setUrl] = useState('');
  const [inputErr, setInputErr] = useState('');

  const handleSubmit = async () => {
    if (simpleValidate(url)) {
      const submittedUrl = url;
      setCountData({
        loading: true,
        loaded: false,
        data: null,
      });
      const result = await getWordCount(url);
      setUrl('');
      setCountData({
        loading: false,
        loaded: true,
        data: result,
      });
      // user history is contained in React state -- given more time, I would have liked to utilize IndexedDB or Cache API
      setHistory([
        { url: submittedUrl, wordCount: result },
        ...history,
      ]);
    } else {
      setInputErr('Please input a valid text document url')
    }
  }

  return (
    <div id="container">
      <History history={history} setCountData={setCountData} />
      <div id="main">
        <div id="input-submit">
          <input
            type="text"
            value={url}
            placeholder="enter url"
            onChange={(evt) => {
              setUrl(evt.target.value);
              if (inputErr) {
                setInputErr('');
              }
            }}
            onKeyPress={(evt) => {
              if (evt.key === 'Enter') {
                handleSubmit();
              }
            }} />
          <button onClick={handleSubmit}>submit</button>
        </div>
        <span>
          {inputErr}
        </span>

        <Results data={countData} />
      </div>

    </div>);
};

export default Container;