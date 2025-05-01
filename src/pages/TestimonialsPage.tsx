import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    customer_name: "John Smith",
    testimonial_text: "Incredible service! Found my dream car at an amazing price. The whole process was smooth and professional.",
    vehicle_details: "2019 BMW M3",
    image_url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    created_at: "2024-01-15"
  },
  {
    id: 2,
    customer_name: "Sarah Johnson",
    testimonial_text: "Best car buying experience I've ever had. They were honest, transparent, and helped me find exactly what I was looking for.",
    vehicle_details: "2020 Mercedes-Benz C300",
    image_url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800",
    created_at: "2024-01-10"
  },
  {
    id: 3,
    customer_name: "Michael Brown",
    testimonial_text: "I couldn't be happier with my purchase. The team went above and beyond to ensure I got the perfect vehicle for my needs.",
    vehicle_details: "2021 Audi Q5",
    image_url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800",
    created_at: "2024-01-05"
  }
];

function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
          Sold Vehicles
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          What our satisfied customers have to say
        </p>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3">
                    <img
                      src={testimonial.image_url}
                      alt={`${testimonial.customer_name}'s vehicle`}
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                  <div className="w-full md:w-2/3 space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-lg font-semibold text-white">{testimonial.customer_name}</p>
                    </div>
                    <p className="text-gray-300 italic text-lg">"{testimonial.testimonial_text}"</p>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p className="font-medium">Vehicle: <span className="text-red-500">{testimonial.vehicle_details}</span></p>
                      <p>Date: {new Date(testimonial.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials