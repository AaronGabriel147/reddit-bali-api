import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { FliesText } from 'react-text-fun';



export default function App() {
  const [data, setData] = useState([]);
  const [subReddit, setSubReddit] = useState('aaronssecondapi');
  const [formData, setFormData] = useState('');
  const [error, setError] = useState('');
  // const [displayForm, setDisplayForm] = useState(true);


  useEffect(() => {
    axios
      .get(`https://old.reddit.com/r/${subReddit}/.json?limit=30`)
      .then((res) => {
        setData(res.data.data.children)
        setError('')
        // setDisplayForm(false)
      })
      .catch((err) => {
        console.log(err)
        setError('You have entered an invalid sub-reddit.')
        // setDisplayForm(true)
      });
  }, [subReddit]);


  const submitHandler = (e) => {
    e.preventDefault();
    setSubReddit(formData)
    e.target.reset()
    setFormData('')
  }


  return (
    <div className="app">

      <div className="btn-cont">
        <p d="links" onClick={() => setSubReddit('all')}>ALL</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('spaceporn')}>SPACE</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('historyporn')}>HISTORY</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('interestingasfuck')}>INTERESTING AF</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('mechanicalkeyboards')}>MECHANICAL KEYBOARDS</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('balisong')}>BALISONG</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('dataisbeautiful')}>DATA IS BEAUTIFUL</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('derp')}>DERP</p>
        <p id="dots">•</p>
        <p id="links" onClick={() => setSubReddit('deepdream')}>DEEP DREAM</p>




        {/* 
        {!displayForm && <button id="search-btn" onClick={() => {
          setDisplayForm(true)
          setError('')
        }
        }>Search a sub-reddit...</button>} */}


      </div>
      {/* <h1 onClick={() => setSubReddit('aaronssecondapi')}>LURKER</h1> */}



      <FliesText
        cellRadius={.7}
        text="LURKER"
        fontSize={90}
        cellWidth={0.02}
        speed={4}
        dodge={true}
        dodgeY={0.5}
        dodgeSpread={0.08}
        fill="dodgerblue"
        fontFamily="sans-serif"
        fontWeight="900"
      />




      {/* {displayForm && ( */}
      <form onSubmit={submitHandler}>

        <p id="form-text">Enter a sub-reddit</p>

        <input
          name="subreddit"
          placeholder="Search..."
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          required
        />
        <button>SUBMIT</button>
        <p id="error">{error && error}</p>
        {/* <h5 id="delete-btn" onClick={() => setDisplayForm(false)}>X</h5> */}
      </form>
      {/* )} */}


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