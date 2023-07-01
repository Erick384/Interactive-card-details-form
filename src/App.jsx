import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data
    setFormData({
      name: "",
      number: "",
      date: "",
      cvc: "",
    });
    // Perform any other necessary actions with the form data
  };

  return (
    <div className="body">
      {/* Your existing code */}
      <div className="right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="name">CARD-HOLDER NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className="input">
            <label htmlFor="number">CARD NUMBER</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div className="input-d">
            <div className="input">
              <label htmlFor="date">EXP. DATE (MM/YY)</label>
              <div className="date-inputs">
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  id="expdate"
                  placeholder="MM"
                />
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
                placeholder="e.g. 123"
              />
            </div>
          </div>

          <button type="submit">Confirm</button>
        </form>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Erick384">Erick-384😎</a>.
        </div>
      </div>

      {/* Completed state start
      Thank you! We've added your card details Continue */}
    </div>
  );
}

export default App;
