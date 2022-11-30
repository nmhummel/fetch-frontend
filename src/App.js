import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './Header';


export default function App() {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [occupation, setOccupation] = useState(null)
  const [usaState, setUsaState] = useState(null)
  const [allOccupations, setAllOccupations] = useState([]);
  const [allStates, setAllStates] = useState([]);

  const dataEndpoint = "https://frontend-take-home.fetchrewards.com/form";

  const getData = useCallback(()=>{
    fetch(dataEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
        console.log(actualData)
        setAllStates(actualData.states);
        setAllOccupations(actualData.occupations);
    })
    .catch((err) => {
        console.log(err.message);
        setError(err);
    })
    .finally(() => {
        setLoading(false);
    });
    
  }, []);

  useEffect(() => {
    getData()
  }, []);

  const handleSubmit = (event) => {
    // post to dataEndpoint
    alert('Your submission has been submitted.');
    event.preventDefault();
  }

  const handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  return (
    <div className="App">
     <Header />
      <div className="py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-fetchYellow font-bold lg:text-center">Join Fetch today and SAVE!</h1>
          <div className="text-2xl text-fetchYellow font-bold lg:text-center">
            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
          </div>
          <div className="mt-10">
          {/* set the form section up on flex or grid to get the input fields all same width */}
            <div className="mt-4 max-w-3xl h-30 rounded-2xl text-xl text-left w-2/3 text-black lg:mx-auto w-full p-4 bg-fetchYellow  rounded-md shadow-card">
              <form onSubmit={handleSubmit}>
                <p>
                  <label>
                    Full Name: <input type="text" name="name" className="text-black rounded text-base m-2 pr-2 w-4/5"/>
                  </label>
                </p>
                <p>
                  <label>
                    Email: <input type="text" name="email" className="text-black rounded text-base m-2 pr-2 w-4/5"/>
                  </label>
                </p>
                <p>
                  <label>
                    Password: <input type="text" name="password" className="text-black rounded text-base m-2 pr-2 w-4/5"/>
                  </label>
                </p>
                <p>
                  <label>
                    Select your occupation:
                    <select value="Occupations:" onChange={handleChange} className="text-black rounded text-base m-2 pr-2 w-3/5">
                      {allOccupations.map(occupation => {
                        return(
                          <option value={occupation}>{occupation}</option>
                        )
                      })}
                    </select>
                  </label>
                </p>
                <p>
                  <label>
                    State: 
                    <select value="States:" onChange={handleChange} className="text-black rounded text-base m-2 pr-2 w-3/5">
                      {allStates.map(data => {
                        return(
                          <option value={data.name}>{data.name} - {data.abbreviation}</option>
                        )
                      })}
                    </select>
                  </label>
                </p>
                <input type="submit" value="SUBMIT" className="bg-black border-white border-2 text-white rounded mt-3 text-xl px-8 py-2" />
              </form>
            </div>
    
          </div>

          {/* <div className="text-2xl text-fetchYellow font-bold lg:text-center">
            <br/>
              {loading && <div>A moment please...</div>}
              {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
              )} */}
              {/* <p>
                Occupations:<br/> {allOccupations.map(occupation => {
                  return (
                    <ul>
                      <li>{occupation}</li>
                    </ul>
                  )
                })}
              </p>
              <br/> */}
              {/* <p>
                States:<br/> {allStates.map(state => {
                  return (
                    <ul>
                      <li>{state.name}, {state.abbreviation}</li>
                    </ul>
                  )
                })}
              </p> */}
          {/* </div> */}

        </div>
      </div>
    </div>
  
  );
}

