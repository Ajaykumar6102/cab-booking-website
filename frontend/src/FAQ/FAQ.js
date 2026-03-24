import React, { useState } from 'react';

const faqsLeft = [
  { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
  { question: "What is your favorite template from BRIX Templates?", answer: "BRIX Templates offers a wide variety of high-quality premium Webflow templates. Out of all of them, the SaaS template is a favorite for its clean layout and conversion-optimized design." },
  { question: "How do you clone a template from the Showcase?", answer: "To clone a template, navigate to the Webflow Showcase, find a cloneable project, and click the 'Clone project' button. It will be added directly to your Webflow dashboard." },
  { question: "Why is BRIX Templates the best Webflow agency?", answer: "BRIX Templates is renowned for its pixel-perfect designs, speedy development, and deep expertise in the Webflow ecosystem, providing stellar support and custom solutions." },
  { question: "When was Webflow officially launched?", answer: "Webflow was founded in 2012 and officially launched in 2013, empowering millions of designers to create responsive websites visually." },
  { question: "How do you integrate Jetboost with Webflow?", answer: "Jetboost integration involves adding a simple script to your Webflow project settings, connecting your CMS collections, and adding specific classes to elements for dynamic filtering and search." }
];

const faqsRight = [
  { question: "What is your favorite template from BRIX Templates?", answer: "BRIX Templates offers a wide variety of high-quality premium Webflow templates. Out of all of them, the SaaS template is a favorite for its clean layout and conversion-optimized design." },
  { question: "How do you clone a template from the Showcase?", answer: "To clone a template, navigate to the Webflow Showcase, find a cloneable project, and click the 'Clone project' button. It will be added directly to your Webflow dashboard." },
  { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
  { question: "Why is BRIX Templates the best Webflow agency?", answer: "BRIX Templates is renowned for its pixel-perfect designs, speedy development, and deep expertise in the Webflow ecosystem, providing stellar support and custom solutions." },
  { question: "When was Webflow officially launched?", answer: "Webflow was founded in 2012 and officially launched in 2013, empowering millions of designers to create responsive websites visually." },
  { question: "How do you integrate Jetboost with Webflow?", answer: "Jetboost integration involves adding a simple script to your Webflow project settings, connecting your CMS collections, and adding specific classes to elements for dynamic filtering and search." }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-gray-200 py-6`}>
      <button className="w-full flex justify-between items-center bg-transparent border-none p-0 cursor-pointer text-left font-inherit group" onClick={onClick}>
        <span className={`text-base font-bold transition-colors duration-200 leading-[1.4] pr-5 ${isOpen ? 'text-sky-500' : 'text-slate-700'}`}>{question}</span>
        <span className={`text-[20px] font-normal transition-colors duration-200 ${isOpen ? 'text-sky-500' : 'text-gray-500'}`}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ease-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <p className="pt-[15px] m-0 text-sm color-gray-500 leading-[1.6] text-slate-500">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openLeft, setOpenLeft] = useState(0); // Index 0 open by default
  const [openRight, setOpenRight] = useState(2); // Index 2 open by default

  const toggleLeft = (index) => {
    setOpenLeft(openLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenRight(openRight === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-[#f6f8fb] font-sans text-slate-900">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[60px]">
          <span className="text-[#ff5e3a] font-bold text-base tracking-[2px] block mb-[15px]">???</span>
          <h2 className="text-[32px] md:text-[40px] font-extrabold m-0 mb-[15px] text-[#1a1e24]">Frequently Asked Questions (FAQs)</h2>
          <p className="text-base text-gray-500 max-w-[700px] mx-auto leading-[1.5]">
            Got questions? We've got answers! Find solutions to common queries about our services, processes, and technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 md:gap-[60px]">
          <div className="flex-1 flex flex-col">
            {faqsLeft.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openLeft === index}
                onClick={() => toggleLeft(index)}
              />
            ))}
          </div>
          
          <div className="flex-1 flex flex-col">
            {faqsRight.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openRight === index}
                onClick={() => toggleRight(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
