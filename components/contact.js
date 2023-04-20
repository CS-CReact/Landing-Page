import "tailwindcss/tailwind.css";
import "daisyui";
import { useState } from "react";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    const data = {
      name,
      email,
      message,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://formspree.io/f/xayzanoy", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <h1 style={{ marginTop: "5rem" }} >
        CONTACT
      </h1>
      <p>
        Questions? Comments? Contact us below!
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          style={{ marginTop: "1rem" }}
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div class="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
