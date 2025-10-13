import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FFF6EE] pt-12 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="md:col-span-1 space-y-6 text-center md:text-left order-2 sm:order-1">
          <Image
            src="/logo.svg"
            alt="AarogyaNIX"
            width={198}
            height={48}
            quality={100}
            className="mx-auto md:mx-0 w-40 md:w-48"
          />

          <p className="text-[#666666] text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            As the exclusive partner for Comen, we are committed to providing
            innovative medical solutions and unparalleled service across India.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            {[
              "/whatsapp.svg",
              "/instagram.svg",
              "/linkedin.svg",
              "/facebook.svg",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="social icon"
                width={36}
                height={36}
                quality={100}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 lg:col-span-3 order-1 sm:order-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <p className="text-[#999999] font-semibold text-sm uppercase tracking-wide">
              Quick Links
            </p>
            <ul className="mt-3 md:mt-4 flex flex-col gap-2 md:gap-3">
              {["About Us", "Products", "Career", "Contact Us", "FAQ’s"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-sm md:text-base text-[#666666] font-medium hover:text-primary cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <p className="text-[#999999] font-semibold text-sm uppercase tracking-wide">
              Product Categories
            </p>
            <ul className="mt-3 md:mt-4 flex flex-col gap-2 md:gap-3">
              {[
                "Cardiology Ranges",
                "Critical Care",
                "OR Solutions",
                "Woman & NICU Solutions",
                "Consumables & Accessories",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm md:text-base text-[#666666] font-medium hover:text-primary cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#999999] font-semibold text-sm uppercase tracking-wide">
              Legal
            </p>
            <ul className="mt-3 md:mt-4 flex flex-col gap-2 md:gap-3">
              {["Terms & Conditions", "Privacy & Policy"].map((item) => (
                <li
                  key={item}
                  className="text-sm md:text-base text-[#666666] font-medium hover:text-primary cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E9EAEB] mt-10 pt-6 container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3">
        <p className="text-[#717680] text-sm">
          © 2025 AarogyaNIX Medtech Solutions. All rights reserved.
        </p>
        <p className="text-[#717680] text-sm">
          Designed by <span className="text-primary font-bold">Jay Gajera</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
