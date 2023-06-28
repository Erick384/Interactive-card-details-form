import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      {/* <div className="container"> */}
      <div className="left">
        <div className="jane-Card">
          <div className="circles">
            <svg
              width="84"
              height="47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="23.478"
                cy="23.5"
                rx="23.478"
                ry="23.5"
                fill="#fff"
              />
              <path
                d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                stroke="#fff"
              />
            </svg>
          </div>
          <div className="card-Number">
            <h2>0000 0000 0000 0000</h2>
          </div>
          <div className="card-Btm">
            <span>Jane Appleseed</span>
            <span>00/00</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="form">
          <div className="input">
            <label htmlFor="name">CARD-HOLDER NAME</label>
            <input type="name" placeholder="e.g. Jane Appleseed" />
          </div>
          <div className="input">
            <label htmlFor="number">CARD NUMBER</label>
            <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
          </div>
          <div class="input-d">
            <div class="input">
              <label htmlFor="date">EXP. DATE (MM/YY)</label>
              <div className="date-inputs">
                <input
                  type="number"
                  name="date"
                  id="expdate"
                  placeholder="MM"
                />
                <input type="number" placeholder="YY" />
              </div>
            </div>
            <div class="input">
              <label htmlFor="cvc">CVC</label>
              <input type="cvc" placeholder="e.g. 123" />
            </div>
          </div>

          <button>Confirm</button>
        </div>

        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Erick384">Erick-384😎</a>.
        </div>
      </div>
      {/* </div> */}

      {/* Completed state start
      Thank you! We've added your card details Continue */}
    </div>
  );
}

export default App;
