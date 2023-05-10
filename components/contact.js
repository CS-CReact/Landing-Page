import { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    const data = {
      name,
      email,
      message,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch('https://formspree.io/f/xayzanoy', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let element = document.getElementById('emailSent');
        console.log(data);
        element.classList.add('fade-in-out');
        element.style.visibility = 'visible';
        setTimeout(function () {
          element.classList.remove('fade-in-out');
          element.style.visibility = 'hidden';
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
        let element = document.getElementById('somethingWrong');
        console.log(data);
        element.classList.add('fade-in-out');
        element.style.display = 'flex';
        setTimeout(function () {
          element.classList.remove('fade-in-out');
          element.style.display = 'none';
        }, 5000);
      });
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <>
      <div className="sm:m-2 md:5 mb-10 z-10">
        <div className="text-center m-5">
          <p className="text-2xl desktop:p-10 desktop:m-10 mb-10">CONTACT</p>
          <p className="text-sm">Questions? Comments? Contact us below!</p>
        </div>
        <div className="text-center flex flex-col flex-wrap">
          <form onSubmit={handleSubmit}>
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered rounded-md focus:outline-none  focus-visible:border-darkgreen z-10 w-60 phone:w-64 tablet:w-80 desktop:w-2/5 text-sm m-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered focus:outline-none focus-visible:border-darkgreen rounded-md w-60 phone:w-64 tablet:w-80 desktop:w-2/5 text-sm m-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <textarea
                className="textarea textarea-bordered focus:outline-none focus-visible:border-darkgreen rounded-md w-60 phone:w-64 tablet:w-80 desktop:w-2/5 text-sm m-2 h-24"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="m-5 mb-10">
              <button
                type="submit"
                className="rounded-full bg-dark text-white dark:bg-white text-xs dark:text-dark px-5 py-0.5 mx-5 mb-10"
              >
                Submit
              </button>
            </div>
          </form>

          <div
            id="emailSent"
            class="bg-palegreen border-t-4 invisible  border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-5 w-7 text-teal-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>
              <div>
                <p class="font-bold mt-1">Your message has been sent!</p>
              </div>
            </div>
          </div>

          <div
            id="somethingWrong"
            class="bg-red-100 hidden border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-red-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold mt-1">Something went wrong!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
