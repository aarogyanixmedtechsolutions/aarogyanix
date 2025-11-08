"use client";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/constants/product";
import { IconGift } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="relative">
        <Image
          src="/homepage-banner.png"
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
              <span className="size-2 block bg-secondary rounded-full"></span>
              <div className="px-3 py-1 bg-secondary-50 text-gray-800 text-sm rounded-full font-medium">
                Authorized Exclusive Dealer for Comen
              </div>
            </div>

            {/* Heading */}
            <p className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug md:leading-tight mt-2 sm:mt-3 lg:mt-4">
              Advanced Medical Solutions for the Modern Hospital.
            </p>

            {/* Subtext */}
            <p className="mt-3 sm:mt-4.5 lg:mt-6 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
              As the Authorized Exclusive Dealer for Comen in North Gujarat, we
              bring you world-class medical equipment for Cardiology, Critical
              Care, and Surgical solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-3">
              <Button className="">Explore Our Products</Button>
              <Button
                className="flex items-center justify-center gap-2"
                variant="secondary"
              >
                <span className="size-2 block bg-success-500 rounded-full"></span>
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="container mx-auto py-10 md:py-14 lg:py-20">
        {/* Badge */}
        <div className="px-3 py-1 bg-secondary-50 text-gray-800 text-sm rounded-full font-medium w-max flex mx-auto">
          Why Choose Us
        </div>

        {/* Heading */}
        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl font-popping text-center mt-5 text-[#121212]">
          Why Partner with AarogyaNIX Medtech Solutions?
        </p>

        {/* Subtext */}
        <p className="font-medium text-sm sm:text-base md:text-lg mt-3 text-center text-gray-600 max-w-3xl mx-auto">
          As the Authorized Exclusive Dealer for Comen, we offer unparalleled
          expertise and a commitment to advancing healthcare.
        </p>

        {/* Cards Grid */}
        <div className="mt-8 lg:mt-14 grid grid-cols-1 sm:grid-cols-2  gap-10 sm:gap-12 lg:gap-14">
          {/* Card 1 */}
          <div className="text-center sm:text-left">
            <div className="size-14 sm:size-18 rounded-[14px] bg-primary text-white flex items-center justify-center mx-auto sm:mx-0">
              <IconGift className="size-6 sm:size-7.5" />
            </div>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Authorized Exclusive Dealer
            </p>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              Our exclusive partnership with Comen guarantees that you receive
              genuine, certified products with full manufacturer support and
              warranties.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center sm:text-left">
            <div className="size-16 sm:size-18 rounded-[14px] bg-primary text-white flex items-center justify-center mx-auto sm:mx-0">
              <IconGift className="size-6 sm:size-7.5" />
            </div>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Expertise & Support
            </p>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              Our highly trained team provides expert installation,
              comprehensive training, and prompt after-sales service to ensure
              your equipment is always running optimally.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center sm:text-left">
            <div className="size-16 sm:size-18 rounded-[14px] bg-primary text-white flex items-center justify-center mx-auto sm:mx-0">
              <IconGift className="size-6 sm:size-7.5" />
            </div>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Comprehensive Solutions
            </p>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              From ICU Ventilators to ECG Machines, we offer a complete
              portfolio of Comen products to equip your entire hospital
              facility.
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center sm:text-left">
            <div className="size-16 sm:size-18 rounded-[14px] bg-primary text-white flex items-center justify-center mx-auto sm:mx-0">
              <IconGift className="size-6 sm:size-7.5" />
            </div>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Commitment to Innovation
            </p>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              We provide access to the latest advancements from Comen, a global
              leader dedicated to developing innovative medical technologies for
              patient well-being.
            </p>
          </div>
        </div>
      </div>
      {/* product */}
      <div className="container mx-auto py-10 md:py-14 lg:py-20">
        {/* Heading */}
        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl font-popping text-center mt-5 text-[#121212]">
          Our Specialized Solutions from Comen
        </p>
        {/* Subtext */}
        <p className="font-medium text-sm sm:text-base md:text-lg mt-3 text-center text-gray-600 max-w-3xl mx-auto">
          Discover a complete range of medical equipment designed for precision,
          reliability, and patient safety.
        </p>
        <div className="grid min-[400px]:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-4 md:mt-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              short_description={product.short_description}
              img={product.img}
            />
          ))}
        </div>
        <Button className="mx-auto mt-4 md:mt-8">
          Explore Our All Products
        </Button>
      </div>
      <div className="container mx-auto py-10 md:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 sm:gap-10 lg:gap-16">
          <div className="lg:col-span-3 lg:pr-12 lg:border-r border-[#E5E7EB]">
            <div className="px-3 py-1 bg-secondary-50 text-gray-800 text-sm rounded-full font-medium w-max mx-auto lg:mx-0">
              Testimonial
            </div>
            <p className="text-[#111827] text-2xl sm:text-3xl lg:text-4xl font-manrope font-bold mt-4 text-center lg:text-start">
              Trusted by Healthcare Leaders Across India.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base text-center lg:text-start">
              Hear from some of our valued partners and clients.
            </p>
            <Button className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mx-auto lg:mx-0">
              Contact
            </Button>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="flex gap-14">
                  <Image
                    src={"/doctor.jpg"}
                    width={200}
                    height={240}
                    alt="doctor"
                    className="hidden sm:block rounded-2xl w-50"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#111827]">
                      The Comen patient monitors supplied by AarogyaNIX have
                      significantly improved our ICU workflow. Their support and
                      after-sales service are truly exceptional.
                    </p>
                    <div className="mt-10 sm:mt-16">
                      <p className="text-lg text-[#111827]">Dr. Anish Sharma</p>
                      <p className="text-sm mt-0.5 text-[#6B7280]">
                        Head of Critical Care, Apollo Hospital.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex gap-14">
                  <Image
                    src={"/doctor.jpg"}
                    width={200}
                    height={240}
                    alt="doctor"
                    className="hidden sm:block rounded-2xl w-50"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#111827]">
                      The Comen patient monitors supplied by AarogyaNIX have
                      significantly improved our ICU workflow. Their support and
                      after-sales service are truly exceptional.
                    </p>
                    <div className="mt-10 sm:mt-16">
                      <p className="text-lg text-[#111827]">Dr. Anish Sharma</p>
                      <p className="text-sm mt-0.5 text-[#6B7280]">
                        Head of Critical Care, Apollo Hospital.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex gap-14">
                  <Image
                    src={"/doctor.jpg"}
                    width={200}
                    height={240}
                    alt="doctor"
                    className="hidden sm:block rounded-2xl w-50"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#111827]">
                      The Comen patient monitors supplied by AarogyaNIX have
                      significantly improved our ICU workflow. Their support and
                      after-sales service are truly exceptional.
                    </p>
                    <div className="mt-10 sm:mt-16">
                      <p className="text-lg text-[#111827]">Dr. Anish Sharma</p>
                      <p className="text-sm mt-0.5 text-[#6B7280]">
                        Head of Critical Care, Apollo Hospital.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex gap-4 justify-end sm:absolute bottom-0 right-0 mt-4 sm:mt-0">
                <CarouselPrevious className="static translate-0" />
                <CarouselNext className="static translate-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* <div className="bg-gradient-to-r from-[#DFDFFF] from-[1%] to-white to-[99%] py-10 md:py-14 lg:py-20">
        <div className="container grid grid-cols-2">
          <div className="flex flex-col gap-5 justify-center">
            <p className="text-5xl text-primary font-semibold leading-15">
              Ready to Elevate Your Healthcare Facility?
            </p>
            <p className="text-[#272C33] font-medium">
              Contact our expert team to learn more about how Comen&apos;s
              advanced solutions can meet your specific needs.
            </p>
            <Button
              className="flex items-center justify-center gap-2 w-max"
              variant="secondary"
            >
              <span className="size-2 block bg-success-500 rounded-full"></span>
              Request a Demo
            </Button>
          </div>
          <Image src="/image8.png" width={653} height={464} alt="product" />
        </div>
      </div> */}

      <div className="bg-gradient-to-r from-[#DFDFFF] from-[1%] to-white to-[99%] py-10 md:py-14 lg:py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="flex flex-col gap-5 text-center lg:text-left justify-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl text-primary font-semibold leading-tight">
              Ready to Elevate Your Healthcare Facility?
            </p>
            <p className="text-[#272C33] font-medium text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Contact our expert team to learn more about how Comen&apos;s
              advanced solutions can meet your specific needs.
            </p>
            <Button
              className="flex items-center justify-center gap-2 w-full sm:w-max mx-auto lg:mx-0"
              variant="secondary"
            >
              <span className="size-2 block bg-success-500 rounded-full"></span>
              Request a Demo
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/image8.png"
              width={653}
              height={464}
              alt="product"
              className="w-full max-w-md sm:max-w-lg lg:max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
