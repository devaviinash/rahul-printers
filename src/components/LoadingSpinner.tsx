export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <img
          src="/images/logo-1.png"
          className="h-20 w-20 mx-auto mb-4 animate-pulse-slow"
          alt="Logo"
        />
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
