import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Shah",
    role: "Business Owner",
    content:
      "The quality of business cards and brochures from Rahul Printers is exceptional. Their attention to detail is remarkable.",
    rating: 5,
    color: "bg-red-100",
  },
  {
    name: "Priya Patel",
    role: "Wedding Planner",
    content:
      "Their wedding card designs are beautiful and the printing quality is top-notch. Highly recommended!",
    rating: 5,
    color: "bg-orange-100",
  },
  {
    name: "Rajesh Kumar",
    role: "Marketing Manager",
    content:
      "Fast turnaround time and professional service. Our marketing materials always look perfect.",
    rating: 5,
    color: "bg-yellow-100",
  },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="py-24 bg-gradient-to-b from-indigo-200 to-yellow-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Don't just take our word for it</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.color} p-6 rounded-lg transition-all hover:shadow-lg hover:scale-105 animate-slideIn`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4 animate-pulse-slow">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
