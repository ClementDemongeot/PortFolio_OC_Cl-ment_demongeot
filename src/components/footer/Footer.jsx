import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col w-full h-[200px] bg-orange-100 border-t border-gray-500 gap-5">
      <p className="text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Clément Demongeot. Tous droits
        réservés.
      </p>
      <div className="flex justify-center items-center gap-8">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-4xl hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-4xl hover:text-purple-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-4xl hover:text-pink-600"
        >
          <CiInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-4xl hover:text-blue-600"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
