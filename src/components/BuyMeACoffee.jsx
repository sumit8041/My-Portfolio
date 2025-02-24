import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const BuyMeACoffee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_4i29zhq', 'template_8qcn7fb', e.target, '2LLww81oj-SfoeFtC')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <section id='contact'>
    <div className="bg-green-50 dark:bg-gray-900 font-[sans-serif] lg:h-screen">
      <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
        <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore more about me.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm pt-3 outline-none"
            ></textarea>
            <button
              type="submit"
              className="text-gray-800 dark:text-gray-200 bg-green-200 dark:bg-green-700 hover:bg-green-300 dark:hover:bg-green-800 font-semibold rounded-md text-sm px-6 py-3 block w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="z-10 relative lg:col-span-2">
          <img
            src="https://readymadeui.com/images/analtsis.webp"
            className="w-3/4 object-contain block mx-auto"
            alt="Contact"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default BuyMeACoffee;
