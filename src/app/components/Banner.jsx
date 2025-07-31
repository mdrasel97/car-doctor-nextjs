"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empower Your Skills with{" "}
            <span className="text-blue-600">Tohfa IT</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Learn from expert instructors. Register today and take your IT
            knowledge to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/courses">
              <Button className="text-white bg-blue-600 hover:bg-blue-700">
                Browse Courses
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={"/assets/images/banner/1.jpg"} // Place your image in /public folder
            alt="Learning illustration"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
