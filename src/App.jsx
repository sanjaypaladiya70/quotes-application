import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState('');
  const [quotesArr, setQuotesArr] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      console.log(data);
      setQuote(data[0]);
    };

    fetchQuote(); // Call the async function
  }, [count]);

  const add = () =>{
    setQuotesArr([...quotesArr , quote]);
    setCount(count+1)
  }

  const delet = (index) => {
    const updatedQuotes = quotesArr.filter((_, i) => i !== index);
    setQuotesArr(updatedQuotes);
  };
  

  return (
    <>

    <div className='q'><div>Quote</div></div>

    <div className='quote'>

    <div className='in_quote'>
      <div className=''>
          {quote}
        </div>
        <button className='button back-gradient-moving' onClick={()=> setCount(count+1)}>New Quote</button> <button className='button back-gradient-moving' onClick={add}>Add it</button> 

    </div>


    </div>


      <div className='list'><div>Your List</div></div>

      <div className='added_list'>
  {quotesArr.length === 0 ? (
    <>No quotes added</>
  ) : (
    quotesArr.map((item, index) => (
      <div className='added_quote' key={index}>
        <div className='quo'>
          {item}  <button className='delete' onClick={()=>delet(index)}>Delete</button>
        </div>
      </div> 
    ))
  )}
</div>

    </>
  );
}

export default App;
