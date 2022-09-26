import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [subReddit, setSubReddit] = useState('aaronssecondapi');
  const [formData, setFormData] = useState('');
  const [error, setError] = useState('');
  const [displayForm, setDisplayForm] = useState(false);


  useEffect(() => {
    axios
      .get(`https://old.reddit.com/r/${subReddit}/.json?limit=20`)
      .then((res) => { setData(res.data.data.children) })
      .catch((err) => setError('You have entered an invalid sub-reddit.'));
  }, [subReddit]);


  const submitHandler = (e) => {
    e.preventDefault();
    setSubReddit(formData)
    e.target.reset()
    setFormData('')
    setDisplayForm(false)
  }

  return (
    <div className="app">
      <div className="btn-cont">
        {/* <button onClick={() => setSubReddit('balisong')}>Balisong</button> */}
        <p onClick={() => setSubReddit('balisong')}>BALISONG</p>
        <p onClick={() => setSubReddit('spaceporn')}>SPACE</p>
        <p onClick={() => setSubReddit('historyporn')}>HISTORY</p>
        <p onClick={() => setSubReddit('interestingasfuck')}>INTERESTING AF</p>
        <p onClick={() => setSubReddit('mechanicalkeyboards')}>MECHANICAL KEYBOARDS</p>
        <button id="search-btn" onClick={() => setDisplayForm(true)}>Search a sub-reddit*</button>
      </div>




      <h1>LURKER</h1>

      {displayForm && (
        <form onSubmit={submitHandler}>
          <input
            name="subreddit"
            placeholder="Enter sub reddit..."
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            required
          />
          <button>SUBMIT</button>
          <p id="error">{error && error}</p>
        </form>
      )}

      {
        data.length > 1 ? data.map((item, index) => {
          let img = item.data.url_overridden_by_dest;
          if (img !== undefined) {
            const lastThree = img.slice(-3);
            let imgType =
              lastThree === 'jpg' || lastThree === 'png' || lastThree === 'gif';
            return (
              imgType && (
                <div className="card" key={index}>
                  <a href={img} target="_blank" rel="noreferrer">
                    <img src={img} alt="from reddit" />
                  </a>
                  <p id="title">{item.data.title}</p>
                </div>
              )
            );
          }
        }) : ''
      }
    </div >
  );
}