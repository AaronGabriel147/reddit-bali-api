      
      
      
      
     <FliesText
      text="Hello World"
      fontSize={120}
      fontWeight="bold"
      cellWidth={0.02}
      fill="#2f2f2f"
      speed={2}
    />
      
      
      --------------
      
      
      <header header className="App-header" >
Image of galaxy:
    

    import galaxy from './galaxy.png'


    <img src={galaxy} className="App-logo" alt="logo" />
      </header >



      __________________________


sub reddits:


      // .get('https://old.reddit.com/r/spaceporn/top/.json?limit=20')
      // .get('https://old.reddit.com/r/MechanicalKeyboards/top/.json?limit=20')
      // .get('https://old.reddit.com/r/MechanicalKeyboards/.json?limit=50')
      // .get('https://old.reddit.com/r/HistoryPorn/.json?limit=20')
      // .get('https://old.reddit.com/r/interestingasfuck/.json?limit=20')
      // .get('https://old.reddit.com/r/balisong/.json?limit=20')
      // .get('https://old.reddit.com/r/cringepics/.json?limit=20')
      // .get('https://old.reddit.com/r/space/.json?limit=50')



-------------------------------------------


      <div className="btn-cont">
        <button onClick={() => setButton('balisong')}>Balisong</button>
      </div>


        <button onClick={() => setButton('mechanicalkeyboards')}>
          Mech Keyboards
        </button>
        <button onClick={() => setButton('spaceporn')}>Space</button>
        <button onClick={() => setButton('historyporn')}>History</button>
        <button onClick={() => setButton('interestingasfuck')}>
          interesting AF
        </button>


        ------------------------------




        {/* <p>{error.length > 1 ? error : ''}</p> */}




        -----------------------------



        {/* <button disabled={formData.length === 0}>SUBMIT</button> */}





-----------------------



         {/* <p>A minimalistic reddit viewer.</p> */}
      {/* <p>View your favorite sub-reddits, (images and titles only)</p> */}




--------


'You have entered an invalid sub-reddit.'



---------------




      // .then((x) => !error && setDisplayForm(false))
      // .catch((y) => setDisplayForm(true))
    // try {
    //   await error && setDisplayForm(true);
    //   await !error && setDisplayForm(false);
    // } catch {
    //   console.log('error')
    // }