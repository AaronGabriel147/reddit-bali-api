import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import ImageCards from './components/ImageCards';
import Footer from './components/Footer';

export default function App() {
  const [data, setData] = useState([]);
  const [subReddit, setSubReddit] = useState('balisong');
  const [title, setTitle] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(111);


  useEffect(() => {
    axios
      .get(`https://old.reddit.com/r/${subReddit}/.json?limit=100`)
      // .get(`https://old.reddit.com/r/${subReddit}/.json?limit=${numberOfItems}`)
      .then((res) => {
        setData(res.data.data.children)
        setTitle(subReddit)
      })
      .catch((err) => console.log(err));
  }, [subReddit, title]);

  {console.log("@@@ title =", title)}
  // {console.log("@@@ subreddit =", subReddit)}
  // {console.log("@@@ data =", data.length)}


  return (
    <div className="app">
      <Links setSubReddit={setSubReddit} />


      {/* {
        title == "aarons3rdapi" ? <h1>Click a sub^</h1> : <h1>r/{title}</h1>
      }   */}



      {
        title === "aarons3rdapi" && <h1>Click a sub^</h1>
      }  

      {
         title !== "" && <h1>r/{title}</h1>
      }





      <Header setSubReddit={setSubReddit} />
      <ImageCards data={data} />

      {
        data.length > 1
        &&
        <h3 id="scroll-to-top" onClick={() => setSubReddit('aarons3rdapi')}>^</h3>
      }

      {/* ------ Reddit has a limit of 100 items you can fetch, so this button is very limited and its why I am not using it.
      {
        data.length > 1 
        &&
        <button onClick={() => setNumberOfItems(numberOfItems + 20)}>Add 5 more images</button>
      } 
      */}


      <Footer setSubReddit={setSubReddit} />
    </div >
  );
}