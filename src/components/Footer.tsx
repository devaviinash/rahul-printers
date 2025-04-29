export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo-1.png"
                className="relative w-10 cursor-pointer"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 text-transparent bg-clip-text">
                Rahul Printers
              </span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for all printing solutions.
            </p>
            <p className="text-gray-400 mb-4">
              Quality, reliability, and creativity since 1980.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Features", "Testimonials", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <a
                  href="https://www.google.com/maps?q=Rahul+Printers,+Dehu+Road,+Haveli,+Pune+-+412101"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  71, East B.P. Road, Dehu Road, Haveli, Pune - 412101
                </a>
              </li>
              <li className="hover:text-white transition-colors">
                <a
                  href="tel:+919822131089"
                  className="hover:text-white transition-colors"
                >
                  +91 98221 31089
                </a>
              </li>
              <li className="hover:text-white transition-colors">
                <a
                  href="mailto:1549rahulprinter@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  1549rahulprinter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Rahul Printers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
