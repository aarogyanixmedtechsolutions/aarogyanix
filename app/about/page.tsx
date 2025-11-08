import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Banner */}
      <div className="relative">
        <Image
          src="/about-banner.png"
          alt="banner"
          width={1440}
          height={800}
          className="w-full object-cover absolute top-0 h-full object-left"
          quality={100}
        />
        <div className="container mx-auto flex flex-col relative z-10 px-6 py-12 md:py-24 xl:py-40">
          {/* Left Content */}
          <div className="w-full md:w-3/5 lg:w-1/2">
            {/* Badge */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="size-2 block bg-primary rounded-full"></span>
              <div className="px-3 py-1 bg-white text-gray-900 text-sm rounded-full font-medium">
                AarogyaNIX Medtech Solutions
              </div>
            </div>

            {/* Heading */}
            <p className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug md:leading-tight mt-2 sm:mt-3 lg:mt-4">
              Your Exclusive Partner in Advancing Healthcare.
            </p>

            {/* Subtext */}
            <p className="mt-3 sm:mt-4.5 lg:mt-6 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
              Authorised Exclusive Dealer for COMEN - ICU, NICU & O.T. equipment
              - sales, service, and rapid support across India.
            </p>
          </div>
        </div>
      </div>
      {/* our journey */}
      <div className="container mx-auto px-4 py-10 md:py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Image Section */}
          <Image
            src="/about-section.png"
            height={600}
            width={600}
            alt="section"
            className="rounded-4xl md:block hidden h-max"
          />

          {/* Right Text Section */}
          <div className="md:py-6 lg:py-12 space-y-5 lg:text-left">
            <div className="px-3 py-1 bg-[#E6E6F0] text-gray-800 text-sm rounded-full font-medium w-max">
              Who We Are
            </div>

            <p className="text-[#121212] mt-5 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Our Journey of Excellence.
            </p>

            <div className="text-base lg:text-lg text-gray-600 space-y-5 text-start">
              <p>
                Founded on the principles of trust, integrity, and innovation,
                AarogyaNIX Medtech Solutions was established with a singular
                mission: to bridge the gap between world-class medical
                technology and the Indian healthcare ecosystem. We recognized
                the need for reliable, high-quality medical equipment backed by
                exceptional service and support.
              </p>
              <p>
                Our journey led us to form an exclusive and strategic
                partnership with Comen, a global leader in medical device
                manufacturing. This partnership is the cornerstone of our
                identity, allowing us to deliver Comen&apos;s full spectrum of
                cutting-edge solutions directly to you, ensuring authenticity
                and a seamless experience from consultation to after-sales care.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mission&vision */}
      <div className="container mx-auto px-4 py-10 md:py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-20">
          <div className="bg-[#E6E6F0] rounded-t-3xl border-b-4 border-primary p-6 sm:p-8 lg:p-10">
            <Image
              src="/mission.gif"
              height={64}
              width={64}
              alt="mission"
              className="size-10 sm:size-12 lg:size-16"
            />
            <p className="text-[#121212] mt-4 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Our Mission
            </p>
            <div className="text-base lg:text-lg text-gray-600 space-y-5 text-start mt-5 lg:mt-8">
              To empower healthcare providers in India with innovative and
              reliable medical technology from Comen, supported by a commitment
              to professional excellence, integrity, and customer satisfaction.
            </div>
          </div>
          <div className="bg-[#FFF6EE] rounded-t-3xl border-b-4 border-secondary p-6 sm:p-8 lg:p-10">
            <Image
              src="/eye.gif"
              height={64}
              width={64}
              alt="eye"
              className="size-10 sm:size-12 lg:size-16"
            />
            <p className="text-[#121212] mt-4 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Our Mission
            </p>
            <div className="text-base lg:text-lg text-gray-600 space-y-5 text-start mt-5 lg:mt-8">
              To empower healthcare providers in India with innovative and
              reliable medical technology from Comen, supported by a commitment
              to professional excellence, integrity, and customer satisfaction.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
