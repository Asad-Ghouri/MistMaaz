import React from 'react'
import { useState } from 'react';

export const CountSection = () => {

  let [counter, setCounter] = useState(1);

  const [totalSupplyState, setTotalSupply] = useState(0);



    const plus = () => {
        if (counter < 10) setCounter(counter + 1);
      };
    
      const minus = () => {
        if (counter > 1) setCounter(counter - 1);
      };

      
  return (
    <div>
        <section className="bannerBottom d-flex flex-column">
        <div
          className="container d-flex flex-column align-items-center"
          data-aos="zoom-out-left"
          data-aos-duration="1000"
        >
          <p className="cartonicPara mb-1">
            Astrobabies are the magical beings from Jalajubee planet on the
            Ethereum blockchain.
          </p>
          <p className="cartonicPara">
            ☾ ﾟ｡⋆ 8,880 adorable NFTs for every horoscope sign⋆ ﾟ｡☽
          </p>
        </div>

        <div className="container">


          <div className="counterDiv"
          >
            <div className="  d-flex justify-content-center align-items-center">
            {/* <div className="flexRow newCounter me-2">
              <div className="minus" onClick={minus}>
                <i class="fa-solid fa-minus"></i>
              </div>


              <div className="count">
                
                <span className="headingOne">{counter}</span>
              </div>
              <div className="plus" onClick={plus}>
                <i class="fa-solid fa-plus"></i>
              </div>
            </div> */}

            <button
              className="mintBtn ms-2">
              &#9825; MINT Coming Soon &#9825;
            </button>

            </div>

            <p className="headingOne text-center small mt-4"> <i>&#9829; PRICE: 0.02ETH &#9829; MAX PER WALLET: 10 &#9829; MINTED: {totalSupplyState}/8880</i></p>
          </div>
        </div>
      </section>

    </div>
  )
}
