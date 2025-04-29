import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-violet-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-900 text-pretty">
            Get in touch with us today
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div
              className="mb-8 cursor-pointer hover:scale-105 transform transition-transform duration-200"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=Rahul+Printers,+Dehu+Road,+Haveli,+Pune+-+412101",
                  "_blank"
                )
              }
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-gray-800">71, East B.P. Road, Dehu Road,</p>
              <p className="text-gray-800">Haveli, Pune - 412101</p>
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <p className="text-gray-800">Everyday: 9:30 AM - 8:00 PM</p>
              <p className="text-gray-800">Thursday: Closed</p>
            </div>
            <div
              className="cursor-pointer hover:scale-105 transform transition-transform duration-200"
              onClick={() =>
                window.open(
                  "https://wa.me/+919822131089?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20printing%20services.",
                  "_blank"
                )
              }
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
              </div>
              <p className="text-gray-800">+91 98221 31089</p>
            </div>
            <div
              className="cursor-pointer hover:scale-105 transform transition-transform duration-200"
              onClick={() =>
                (window.location.href =
                  "mailto:1549rahulprinter@gmail.com?subject=Inquiry&body=Hello, I would like to get more information about your services.")
              }
            >
              <div className="flex items-center mb-4 mt-6">
                <Mail className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-800">1549rahulprinter@gmail.com</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.629225997466!2d73.73013957514948!3d18.68062698244422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1ed85c0b2b5%3A0x6492b458cdf610e0!2sRahul%20printers!5e0!3m2!1sen!2sin!4v1735803220465!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
