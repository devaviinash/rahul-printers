export default function QRCode() {
  return (
    <div className="py-24 bg-gradient-to-b from-yellow-300 to-violet-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Share Your Feedback
          </h2>
          <p className="text-gray-600 text-lg">
            Scan the QR code below to leave us a review on Google. Your feedback
            helps us grow!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-xl text-center transition-all hover:shadow-2xl hover:scale-110 animate-float">
            <img
              src="/images/qr-code.jpeg"
              alt="Google Review QR Code"
              className="h-100 mx-auto animate-pulse-slow rounded-md"
            />
          </div>
        </div>
        <p className="flex justify-center items-center mt-6 text-pretty font-medium">
          Thank you for supporting us!
        </p>
      </div>
    </div>
  );
}
