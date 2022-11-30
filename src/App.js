import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './Header';


export default function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allOccupations, setAllOccupations] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: ""
  });
  
  // console.log("signupData", signupData)
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
        setAllStates(actualData.states);
        setAllOccupations(actualData.occupations);
    })
    .catch((err) => {
        setError(err);
    })
    .finally(() => {
        setLoading(false);
    });
    
  }, []);

  useEffect(() => {
    getData()
  }, []);

  const postFormData = (signupData) => {
    fetch(dataEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({signupData})
    })
    .then(response => response.json()
    .then(response => console.log("response", response)))
  }
  /// fix / finish this!
  
  const handleDataChange = (event) => {
    console.log("e", event)
    const { name, value, type } = event.target;
    console.log('value', value)
    console.log('name', name)
    console.log('type', type)

    setSignupData(previousData => {
      return {
        ...previousData,
        [name]: value
      }
    });
  };

  const handleSubmit = (event) => {
    // post to dataEndpoint
    event.preventDefault();
    postFormData(signupData)
    alert('Your submission has been submitted.');
  }

// validate email style
// state and validate password requirements
// create password hiding
// alert styling 

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
          <div className="m-10">
            <div className="m-3 max-w-3xl h-30 rounded-2xl text-xl text-left w-1/2 text-black lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card">
              <form onSubmit={handleSubmit} className="place-content-center">
                
                <input className="text-black rounded text-base px-2 my-2 w-full"
                  type="text" 
                  placeholder="Full Name"
                  onChange={handleDataChange}
                  name="name" 
                  value={signupData.name}
                  required
                />
              
                <input className="text-black rounded text-base px-2 my-2 w-full"
                    type="text" 
                    placeholder="Email Address"
                    onChange={handleDataChange}
                    name="email" 
                    value={signupData.email}
                    required
                  />
                
                <input className="text-black rounded text-base px-2 my-2 w-full"
                    type="text" 
                    placeholder="Password"
                    onChange={handleDataChange}
                    name="password" 
                    value={signupData.password}
                    required
                  />
                
                  <select className="text-black rounded text-base px-1 my-2 w-full"
                    id="occupation"
                    value={signupData.occupation}
                    name="occupations" 
                    onChange={handleDataChange} 
                    required
                  >
                    <option value="">Select your occupation:</option>
                    {allOccupations.map((occupation, index) => {
                      return(
                        <option key={index} value={occupation}>{occupation}</option>
                      )
                    })}
                  </select>
                
                  <select className="text-black rounded text-base px-1 my-2 w-full"
                    id="state"
                    value={signupData.state} 
                    name="states" 
                    onChange={handleDataChange} 
                    required
                  >
                    <option value="">Select your State"</option>
                    {allStates.map((data, index) => {
                      return(
                        <option key={index} value={data.name}>{data.name} - {data.abbreviation}</option>
                      )
                    })}
                  </select>
                

                <button className="bg-black border-white border-2 text-white w-full rounded mt-3 text-xl px-8 py-2"
                  type="submit" 
                >
                  SUBMIT
                </button>
              </form>
            </div>
    
          </div>

        </div>
      </div>
    </div>
  
  );
}

