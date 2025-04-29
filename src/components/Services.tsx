const services = [
  {
    image: "/images/letterhead.webp",
    title: "Letterhead",
    description:
      "Professional letterheads designed to reflect your brand identity.",
  },
  {
    image: "//images/visiting-card.webp",
    title: "Visiting Card",
    description:
      "Minimal yet impactful business cards that leave a lasting impression.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509316554658-04f9287cdb78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmclMjBjYXJkfGVufDB8fDB8fHww",
    title: "Wedding Card",
    description: "Unique and elegant wedding cards to match your special day.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515891396453-6d7e56096a39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyb2NodXJlfGVufDB8fDB8fHww",
    title: "Brochure",
    description:
      "Well-crafted brochures that effectively communicate your brand story.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1719244105009-a7ffd73653ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpbGwlMjBib29rfGVufDB8fDB8fHww",
    title: "Billbook",
    description:
      "Custom billbooks that keep your business transactions organized.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556589937-1b3bffe9238a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZseWVyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Flyers",
    description:
      "Eye-catching flyers to promote your events, sales, or services.",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="py-24 bg-gradient-to-b from-orange-200 to-red-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600">
            Tailored printing solutions to meet your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
