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

  console.log("dropdown data", allOccupations, allStates)
  
  return (
    <div className="App">
     <Header />
      <div className="py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-2xl text-fetchYellow font-bold lg:text-center">
          <h1>Join the Revolution!</h1>
            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <p>
              Occupations: {occupation}
            </p>
          </div>

          <div className="mt-10">
            <div className="mt-4 max-w-2xl h-30 rounded-2xl text-xl text-left w-2/3 text-white lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card">



              <p>Your task is to build a webpage with a user creation form. The form should take the following required inputs:</p>

              <p>Full Name<br />Email<br/>Password<br/>Occupation<br/>State</p>
              <p>Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to <a href="https://frontend-take-home.fetchrewards.com/form">https://frontend-take-home.fetchrewards.com/form</a> will return a JSON body with the following format:</p>

              <p>You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:</p>

              <p>The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.</p>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  
  );
}

