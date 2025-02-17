import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const logo = [
  {
    id: 1,
    social: FaXTwitter,
  },
  {
    id: 2,
    social: FaFacebook,
  },
  {
    id: 3,
    social: FaInstagram,
  },
  {
    id: 4,
    social: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer About */}
          <div className="">
            <Link href="/" className="text-2xl font-bold">
              Bootslander
            </Link>
            <div className="mt-4">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="flex mt-4 space-x-4">
              {logo.map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  className="hover:text-green-500"
                >
                <div className="border rounded-full px-2 py-2 hover:border-green-500">
                  <item.social size={24} />
                </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-1.5 font-light">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-1.5 font-light">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Product Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Our Newsletter</h4>
            <p className="font-medium">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form mt-4"
            >
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  className="border border-gray-600 focus bg-violet-950 focus:border-green-500 text-white rounded-l-md py-2 px-4 focus:outline-none flex-grow"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-r-md cursor-pointer"
                />
              </div>
            </form>
            
          </div>
          
        </div>
        <div className="border-b border-gray-600 mt-6"/>
      </div>
      
      <div className="container mx-auto px-4 mt-8 text-center">
        <p>
          © <span>Copyright</span>
          <strong className="px-1">Clickpoint</strong>
          <span>All Right Reserved</span>
        </p>
        <h2>Designed by <span className="text-green-500 hover:text-green-600 font-semibold">Clickpoint</span></h2>
        
      </div>
    </footer>
  );
}
