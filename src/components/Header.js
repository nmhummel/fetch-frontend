import React from "react";
import '../assets/Header.css';

const Header = () => {
//  justify-center item-center sm:h-24

    return (
        <div className="App-header block flex flex-row grow-0 shrink basis-auto self-auto">
            <img className='App-Fetch-Doggie w-auto h-full self-center sm:h-1/2 sm: w-1/2' id="doggo-image" src='/fetch-doggie.png' alt='Fetch Rewards Logo' />
            <h1 className="text-3xl ml-5 self-center font-bold">
                Hello Doggo!
            </h1>
        </div>
    );
}

export default Header;
