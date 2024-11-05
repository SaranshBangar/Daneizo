"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import Image from "next/image";

//faq questions in the form of array
const faqs = [
  {
    question: "What is Daneizo and how does it work?",
    answer:
      "Daneizo is a revolutionary rental platform where you can rent, use, and return a variety of items. Simply browse our selection, choose what you need, rent it for your desired period, use it, and then return it. It's that simple!",
  },
  {
    question: "What types of items can I rent on Daneizo?",
    answer:
      "We offer a wide range of items including electronics, furniture, household appliances, and more. Our inventory is constantly growing to meet our users' diverse needs.",
  },
  {
    question: "How do I search for and rent items on Daneizo?",
    answer:
      "Use our easy search functionality to find what you need. Once you've found an item, select your rental period, add it to your cart, and proceed to checkout. After payment, you'll receive instructions for pickup or delivery.",
  },
  {
    question: "Is Daneizo available on mobile devices?",
    answer:
      "Yes! Daneizo is fully responsive and works seamlessly on smartphones, tablets, and desktop computers, ensuring a great experience no matter how you access our platform.",
  },
  {
    question: "How secure is my personal information on Daneizo?",
    answer:
      "We take security seriously. Daneizo uses robust encryption and secure user authentication to protect your personal information and ensure safe transactions.",
  },
  {
    question: "What if I have an issue with a rented item?",
    answer:
      "If you encounter any problems, please contact our 24/7 customer support team immediately. We're committed to ensuring your rental experience is smooth and satisfactory.",
  },
  {
    question: "Can I contribute to the Daneizo platform?",
    answer:
      "Daneizo is open for contributions from developers of all skill levels. Check out our GitHub repository or contact our development team to get involved.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    const results = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Daneizo
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0 relative"
          >
            <div className=" ml-2 relative w-full h-0 pb-[75%] overflow-hidden rounded-lg">
              <Image
                src="/images/faq(2).jpg"
                alt="Daneizo FAQ Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>

              {/* SVG 1 */}
              <motion.svg
                className="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24"
                viewBox="0 0 502 502"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <g>
                  <circle cx="251" cy="251" r="241" fill="#5CC9C1" />
                  <path
                    d="M251,502c-67.044,0-130.076-26.108-177.484-73.516S0,318.044,0,251S26.108,120.924,73.516,73.516S183.956,0,251,0 
                    c67.045,0,130.076,26.108,177.483,73.516C475.892,120.924,502,183.956,502,251s-26.108,130.076-73.517,177.484
                    C381.076,475.892,318.045,502,251,502z M251,20C123.626,20,20,123.626,20,251s103.626,231,231,231s231-103.626,231-231
                    S378.374,20,251,20z"
                    fill="#FFF"
                  />
                  <path
                    d="M370,170.359c0-65.617-53.383-119-119-119s-119,53.383-119,119c0,13.807,11.193,25,25,25 s25-11.193,25-25
                    c0-38.047,30.953-69,69-69s69,30.953,69,69c0,38.322-30.953,69.5-69,69.5c-13.807,0-25,11.193-25,25v68.781
                    c0,13.807,11.193,25,25,25c13.808,0,25-11.193,25-25v-46.443C329.653,275.632,370,227.642,370,170.359z"
                    fill="#FFF"
                  />
                  <path
                    d="M251,396.641c-13.807,0-25,11.193-25,25v4c0,13.807,11.193,25,25,25s25-11.193,25-25v-4
                    C276,407.833,264.807,396.641,251,396.641z"
                    fill="#FFF"
                  />
                </g>
              </motion.svg>

              {/* SVG 2 */}
              <motion.svg
                className="absolute bottom-4 right-4 w-20 h-20 md:w-28 md:h-28"
                viewBox="0 0 122.88 118.92"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <path
                  className="cls-1"
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M39.16,0H75.57a8.74,8.74,0,0,1,8.72,8.72V31.56a8.74,8.74,0,0,1-8.72,8.72H54.23L41,51.67a1.47,1.47,0,0,1-2.07-.16,1.49,1.49,0,0,1-.35-1l.71-10.18h-.12a8.74,8.74,0,0,1-8.72-8.72V8.72A8.74,8.74,0,0,1,39.16,0ZM51.51,89.14c2.06-3.31,2.8-8.53.56-12-.9-1.39-.54-3.64-.54-5.55,0-19-33.24-19-33.24,0,0,2.38.54,4-.74,5.91-2.19,3.16-1.06,8.76.78,11.67,1.87,5.44,9,8.6,2.9,14.26S2.49,102,0,118.92H122.88c-2.27-13.67-13-6.71-17.46-12.77-3.77-5.06,1-6.09,2.48-10.51,1.48-2.33,2.39-6.83.63-9.37-1-1.51-.6-3.08-.6-5,0-15.29-26.05-15.29-26.05,0,0,1.52.29,3.59-.43,4.7-1.8,2.8-1.2,7,.45,9.65,1.22,4.29,6.13,6.32,3,10.64s-10.39,3.49-14.89,6.1c-4.76-5.83-15.95-3.66-20.94-9.2-5.54-6.15.85-8.3,2.48-14ZM88.57,17.76A8.56,8.56,0,0,1,93,20.12a7.82,7.82,0,0,1,2.51,5.72V45.42A8.57,8.57,0,0,1,87,54h-.31l.91,11.88L72,53.63H48.19l8.63-8.77H81.34a7.27,7.27,0,0,0,7.25-7.25V18.34c0-.2,0-.39,0-.58ZM43.46,25.41a1.48,1.48,0,0,1,0-2.95H65.1a1.48,1.48,0,0,1,0,2.95Zm0-9.77a1.48,1.48,0,0,1,0-3H71.53a1.48,1.48,0,0,1,0,3Zm32.1-12.7H39.16a5.8,5.8,0,0,0-5.78,5.78V31.56a5.8,5.8,0,0,0,5.78,5.78h1.69a1.47,1.47,0,0,1,1.46,1.58l-.57,8.24,10.92-9.39a1.49,1.49,0,0,1,1-.43H75.56a5.8,5.8,0,0,0,5.78-5.78V8.72a5.8,5.8,0,0,0-5.78-5.78Z"
                />
              </motion.svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:pl-8"
          >
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <AnimatePresence>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-700 transition-colors duration-200"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-8 text-gray-400"
              >
                No matching questions found. Please try a different search term.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
