import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-white lg:h-screen lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:justify-items-center">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0  xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center">
              <Image
                src={"/images/logo.png"}
                alt=""
                width={65}
                height={65}
                layout="fixed"
              />
              <p className="text-3xl sm:text-4xl text-gray-900 font-extrabold">
                VisioMuseAI
              </p>
            </div>

            <div className="hidden  sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 cursor-pointer text-gray-700 ring-1 ring-gray-200 hover:ring-gray-900/20">
                Unlock Infinite Visual Possibilities with VisioMuseAI{" "}
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl">
              Transform and Create with AI-Powered Imagery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Elevate your creativity on our platform! Create images from text
              inputs, give existing pictures a fresh twist with new text cues,
              and produce captivating image variations.
            </p>
            <p className="mt-6 text-lg text-gray-900">
              {" "}
              Join us today to embark on your artistic journey – all at no cost!
              Unleash your imagination now!
            </p>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-20">
              <button className="rounded-md px-3.5 py-1.5 bg-yellow-500 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </button>
              <button className="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/images/hero.avif"
            // width={2102}
            // height={3150}
            layout="fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
