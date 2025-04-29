import {
  Mail,
  Clock,
  Truck,
  CreditCard,
  Phone,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Order by Email",
    description:
      "Send your designs directly to our email for quick quotes and processing",
    color: "text-red-500",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Diverse Printing Options",
    description:
      "Flyers, Visiting Cards, Brochures, Wedding Cards, ID Cards & more ",
    color: "text-orange-500",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Delivery",
    description: "Delivery for orders within city limits",
    color: "text-yellow-500",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Multiple payment options including UPI, cards, and cash",
    color: "text-green-500",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Support",
    description: "Customer support for your queries",
    color: "text-blue-500",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Consultation",
    description: "Get expert advice on your printing requirements",
    color: "text-violet-500",
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="py-24 bg-gradient-to-b from-blue-300 to-indigo-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">
            Experience the difference with our premium features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-slate-500 transition-all hover:shadow-lg hover:scale-105 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`${feature.color} mb-4 transition-transform hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
