import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container">
      <div class="left"></div>
      <div class="right">
        <div class="form">
          <div class="input">
            CARD-HOLDER NAME
            <input type="name" />
          </div>
          <div class="input">
            CARD NUMBER
            <input type="number" />
          </div>
          <div class="input-d">
            <div class="date">
              EXP. DATE (MM/YY)
              <input type="date" name="date" id="expdate" />
            </div>
            <div class="cvc">CVC <input type="cvc" /></div>
          </div>

          <button>Confirm</button>
        </div>
      </div>
    </div>

 0000 0000 0000 0000
  Jane Appleseed
  00/00

  000

  Cardholder Name
  e.g. Jane Appleseed

  Card Number
  e.g. 1234 5678 9123 0000

  Exp. Date (MM/YY)
  MM
  YY

  CVC
  e.g. 123

  Confirm

  Completed state start
    Thank you! We've added your card details Continue

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>

    </>
  )
}

export default App
