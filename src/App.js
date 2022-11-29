import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <Header />
      <div className="py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-2xl text-fetchYellow font-bold lg:text-center">
          </div>

          <div className="mt-10">
          <div className="mt-4 max-w-2xl h-30 rounded-2xl text-3xl w-2/3 text-white lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card">
            
            Your Points Balance <br/>
          
          </div>
            <div className="mt-4 max-w-2xl h-96 rounded-2xl text-3xl w-2/3 overflow-auto text-black lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card">
              YOUR TRANSACTIONS
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default App;
