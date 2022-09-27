import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import ImageCards from './components/ImageCards';
import Select from 'react-select';

const options = [
  { value: 'balisong', label: 'balisong', color: "#000000" },
  { value: 'derp', label: 'derp', color: "#000000" },
  { value: 'spaceporn', label: 'spaceporn', color: "#000000" },
];

const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles, color: data.color };
  },
}

export default function App() {
  const [data, setData] = useState([]);
  const [subReddit, setSubReddit] = useState('aaronssecondapi');
  const [formData, setFormData] = useState('');
  const [error, setError] = useState('');




  useEffect(() => {
    axios
      .get(`https://old.reddit.com/r/${subReddit}/.json?limit=30`)
      .then((res) => {
        setData(res.data.data.children)
        setError('')
      })
      .catch((err) => {
        console.log(err)
        setError('You have entered an invalid sub-reddit.')
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
      {/* <Links setSubReddit={setSubReddit} /> */}
      <Header setSubReddit={setSubReddit} />


      <Select
        className="select"
        // value={selectedOption}
        onChange={(optionSelected) => setSubReddit(optionSelected.value)}
        options={options}
        styles={colorStyles}
      />




      {/* <form onSubmit={submitHandler}>
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
      </form> */}

      <ImageCards data={data} />
    </div >
  );
}