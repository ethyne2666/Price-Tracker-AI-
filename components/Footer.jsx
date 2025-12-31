import Image from "next/image";
import { Github, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <Image
            src="/deal-drop-logo.png"
            alt="DealDrop Logo"
            width={150}
            height={40}
            priority
          />
          <p className="mt-3 font-semibold text-gray-700">
            Track prices. Catch drops. Save money.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            About
          </h3>
          <ul className="space-y-2 font-semibold text-gray-700">
            <li>Name: Charan Kumar and team</li>
            <li>
              Email:{" "}
              <a
                href="mailto:ece24123@iiitkalyani.ac.in"
                className="text-orange-600 hover:underline"
              >
                ece24123@iiitkalyani.ac.in
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:6302968849"
                className="text-orange-600 hover:underline"
              >
                6302968849
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="md:text-right">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Connect
          </h3>

          <div className="flex md:justify-end gap-4">
            <a
              href="https://github.com/ethyne2666/Price-Tracker-AI-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600"
            >
              <Github size={26} />
            </a>

            <a
              href="http://www.youtube.com/@CharanKumar_2666"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600"
            >
              <Youtube size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/charan-kumar-ab5568311"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-orange-500 text-white text-center py-3 font-semibold text-sm">
        © {new Date().getFullYear()} DealDrop · Made with ❤️ by NullLogic
      </div>
    </footer>
  );
}
