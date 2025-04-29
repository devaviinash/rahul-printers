import { Printer, Mail } from "lucide-react";

export default function Hero() {
  const emailRecipient = "orders@yourbusiness.com";
  const emailSubject = "Order Request: Printing Services";
  const emailBody = encodeURIComponent(`
Hello,

I would like to place an order for your printing services. Please find the details below:

- Type of Service: [e.g., Business Cards, Posters, Flyers, etc.]
- Quantity: [e.g., 500, 1000]
- Additional Specifications: [e.g., Matte Finish, Double-sided, etc.]
- Delivery Deadline: [Specify Date]

Feel free to contact me for further clarification.

Best regards,
[Your Name]
[Your Contact Information]
`);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="pt-16 bg-gradient-to-b from-amber-200 to-orange-200"
    >
      <div className="max-w-7xl h-screen flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-opacity animate-delay-200">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 text-transparent bg-clip-text">
                Where Printing Meets Precision
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Transform your ideas into stunning prints with our
              state-of-the-art printing services. Quality, speed, and
              creativity— all under one roof.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-violet-600 text-white px-6 py-3 rounded-md flex items-center transition-transform hover:bg-violet-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                onClick={() =>
                  (window.location.href = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`)
                }
              >
                Order by Email
              </button>
              <button
                className="bg-violet-600 text-white px-6 py-3 rounded-md flex items-center transition-transform hover:bg-violet-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                onClick={scrollToServices}
              >
                View Services
              </button>
            </div>
          </div>

          <div className="relative animate-slideInRight animate-delay-300">
            <img
              src="/images/hero6.jpg"
              alt="Modern printing press"
              className="rounded-lg shadow-2xl transition-transform hover:scale-105 ease-in-out duration-300"
            />
            <div className="absolute -bottom-18 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float animate-delay-400">
              <div className="flex items-center gap-3">
                <Printer className="h-8 w-8 text-violet-600" />
                <div>
                  <p className="font-semibold text-violet-600">
                    Professional Quality
                  </p>
                  <p className="text-sm text-gray-600">
                    Industry-leading standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
