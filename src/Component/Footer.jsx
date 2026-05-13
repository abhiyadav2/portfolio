  import { useState } from "react";

  export default function Footer() {
    const [showQR, setShowQR] = useState(false);

    return (
      <footer className=" text-white py-6 text-center">
        {/* SOCIAL LINKS */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-20 px-6">
          <a
            href="https://www.facebook.com/profile.php?id=100028025951053"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-bold hover:underline"
          >
            FACEBOOK
          </a>

          <button
            onClick={() => setShowQR(true)}
            className="text-base sm:text-lg font-bold hover:underline"
          >
            INSTAGRAM
          </button>

          <a
            href="https://www.linkedin.com/in/krishnayadav0218"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-bold hover:underline"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/abhiyadav2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-bold hover:underline"
          >
            GITHUB
          </a>
        </div>

        {/* INSTAGRAM QR POPUP */}
        {showQR && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center px-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-xl w-full max-w-xs sm:max-w-sm">
              <img
                src="/m._s._thakur___qr.png"
                alt="Instagram QR Code"
                className="w-48 h-48 sm:w-64 sm:h-64 mx-auto"
              />

              <button
                onClick={() => setShowQR(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold w-full sm:w-auto"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </footer>
    );
  }
