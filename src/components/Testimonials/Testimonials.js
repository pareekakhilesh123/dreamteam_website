import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Tesdtimonials, Tesdtimonials2, Tesdtimonials3 } from '../assest';

const testimonials = [
  {
    id: 1,
    name: ' Lavender Singh Rathore',
    postion: 'Founder & CEO',
    company: 'Sarathi Healthcare',
    date: '09 May 2025',
    review:
      '"At Sarathi Healthcare, where the fusion of technology and healthcare is our mission, Dreamteam Tech has been a strategic partner. Managing the intricate web of patient records, health reports, and operational data across multiple healthcare facilities demanded a solution that could match our ambition. Dreamteam Tech not only streamlined our data management but also provided insights that proved invaluable for improving patient care and optimizing our operations."',
    rating: 5,
    image: Tesdtimonials,
  },
  {
    id: 2,
    name: 'Richa Sharma',
    postion: 'Founder & CEO',
    company: 'First Crack Coffee Roasters',
    date: '15 May 2025',
    review:
      '"As a thriving cafe, managing our operations efficiently is paramount. From inventory management to sales tracking, Dreamteam Tech provides a comprehensive overview, ensuring we stay ahead in the competitive cafe scene. The user-friendly interface, along with insightful reporting, has revolutionized how we handle our daily tasks. Dreamteam Tech has become an indispensable tool, allowing us to focus on what we do best-serving exceptional coffee to our customers.',
    rating: 4,
    image: Tesdtimonials2,
  },
  {
    id: 3,
    name: 'Surashree Rahane',
    postion: 'Founder & CEO',
    company: 'Yearbook Canvas',
    date: '20 May 2025',
    review:
      '"At Yearbook Canvas, handling the vast data landscape of numerous schools, colleges, and universities demanded a robust solution. Dreamteam Tech proved to be the answer, streamlining our operations at a large scale. The systems efficiency in managing diverse data sets, coupled with its seamless integration with educational institutions worldwide, has been very instrumental for our expansive operations."',
    rating: 5,
    image: Tesdtimonials3,
  },
];

const Testimonials = () => {
  return (
    <section className=" py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Testimonials</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-3xl text-gray-300 mb-4" />

            <p className="text-gray-700 mb-4">{testimonial.review}</p>

            <div className="flex mb-2">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
            </div>

            <p className="font-bold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>

            <img
              src={testimonial.image}
              alt="Customer"
              className="w-16 h-16 rounded-full absolute bottom-4 right-4 border-2 border-white shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
