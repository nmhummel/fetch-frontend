import { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import validateFields from '../helpers/validators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eyeOpen = <FontAwesomeIcon icon={faEye} />;
const eyeClosed = <FontAwesomeIcon icon={faEyeSlash} />

export default function App() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: ""
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allOccupations, setAllOccupations] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [signupData, setSignupData] = useState(initialState);
  const [passwordShown, setPasswordShown] = useState(false);

  const dataEndpoint = "https://frontend-take-home.fetchrewards.com/form";

  const getData = useCallback(() => {
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
    // eslint-disable-next-line
  }, []);

  const submitFormData = async (event) => {
    event.preventDefault();
    // console.log("validateFields", validateFields(signupData))
    if (validateFields(signupData)) {
      try {
        const postResponse = await fetch(dataEndpoint, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        });

        console.log("postResponse.status", postResponse.status)
        if (postResponse.status === 201) {
          toast.success('Your application has been submitted!');
          clearState();
          console.log("Submission Data: ", signupData)
        } else {
          toast.error('Something went wrong. Please double check your information.');
        }
      } catch (e) {
          return e;
      };
    }
  }

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    // console.log("name: value", name, value)
    setSignupData(signupData => {
      return {
        ...signupData,
        [name]: value
      }
    });
  };

  const clearState = () => {
    setSignupData(initialState);
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="App flex flex-col flex-nowrap justify-center items-center align-center">
     <Header />
     
    <div className="body flex items-center mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-xl text-red-600 my-5 italic lg:text-center">
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
      </div>
      <h1 className="text-2xl mt-8 text-fetchYellow font-bold lg:text-center">Join Fetch today and SAVE!</h1>
      <div className="m-5">
        <div className="h-30 rounded-2xl text-xl text-left w-1/2 text-black lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card sm:w-full">
          <form onSubmit={submitFormData} className="place-content-center" autoComplete='none'>

            <input className="text-black rounded text-base px-2 my-2 w-full h-10"
              type="text" 
              placeholder="Full Name"
              onChange={handleDataChange}
              name="name" 
              id="name"
              value={signupData.name}
            />
          
            <input className="text-black rounded text-base px-2 my-2 w-full h-10"
                type="text" 
                placeholder="Email Address"
                onChange={handleDataChange}
                name="email" 
                id="email"
                value={signupData.email}
              />
            
            <input className="text-black rounded text-base px-2 my-2 w-full h-10"
                type={passwordShown ? "text" : "password"}
                placeholder="Password*"
                onChange={handleDataChange}
                name="password" 
                id='password'
                value={signupData.password}
              /><span className="-ml-8" id="eyeIcon" onClick={togglePasswordVisiblity}>
                {passwordShown ? eyeOpen : eyeClosed}
              </span>

            <select className="text-black rounded text-base px-1 my-2 w-full h-10"
              value={signupData.occupation}
              name="occupation" 
              id="occupation"
              onChange={handleDataChange} 
            >
              <option value="">Select Your Occupation:</option>
              {allOccupations.map((occupation, index) => {
                return(
                  <option key={index} value={occupation}>{occupation}</option>
                )
              })}
            </select>
          
            <select className="text-black rounded text-base px-1 my-2 w-full h-10"
              value={signupData.state} 
              name="state" 
              id="state"
              onChange={handleDataChange} 
            >
              <option value="">Select Your State:</option>
              {allStates.map((data, index) => {
                return(
                  <option key={index} value={data.name}>{data.name} - {data.abbreviation}</option>
                )
              })}
            </select>

            <button className="bg-black border-white border-2 text-white w-full rounded mt-3 text-xl px-8 py-2"
              type="submit" 
              name="submitButton"
            >
              SUBMIT
            </button>

            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              closeButton={false}
              limit={3}
              draggable={true}
              draggableDirection="y"
              pauseOnHover
              theme="light"
            />
          </form>
        </div>
        <div className="text-sm mt-3 text-left">
          *Password must be a minimum of eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character
        </div>
        <div className="mt-24">
          <img src="footer.png" alt="footer info" onClick={() => toast.info(`"It's only a model..."`)}/>
        </div>
      </div>
    </div>
    </div>
  );
}

