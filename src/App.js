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
  const [formData, setFormData] = useState('');
  const [title, setTitle] = useState('');



  useEffect(() => {
    axios
      .get(`https://old.reddit.com/r/${subReddit}/.json?limit=100`)
      .then((res) => {
        setData(res.data.data.children)
        setTitle(subReddit)
      })
      .catch((err) => console.log(err));
  }, [subReddit]);



  {console.log("@@@@@@@@@@@ subreddit", subReddit)}
  {console.log("@@@@@@@@@@@ title", title)}



  return (
    <div className="app">
      <Links setSubReddit={setSubReddit} />

      {/* <h1>r/{title}</h1> */}

        {
          title == "aarons3rdapi" ? <h1>Click a sub^</h1> : <h1>r/{title}</h1>
        }  


      <Header setSubReddit={setSubReddit} />


      <ImageCards data={data} />

      {
        data.length > 2
          ?
          <h3 id="scroll-to-top" onClick={() => setSubReddit('aarons3rdapi')}>^</h3>
          :
          ''
      }

      <Footer setSubReddit={setSubReddit} />
    </div >
  );
}