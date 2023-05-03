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
        console.log(data);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong!');
      });
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <>
      <div className="sm:m-2 md:5 mb-20 z-10">
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
            <div className="m-5">
              <button
                type="submit"
                className="rounded-full bg-dark text-white dark:bg-white text-xs dark:text-dark px-5 py-0.5 mx-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
