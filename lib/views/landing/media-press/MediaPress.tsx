import React from "react";

const LandingMediaPress = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Media & Press Releases
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Learn More
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg"
              width={105}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg"
              width={104}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus/img/logos/savvycal-logo-gray-900.svg"
              width={140}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
            <img
              alt="Laravel"
              src="https://tailwindui.com/plus/img/logos/laravel-logo-gray-900.svg"
              width={136}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus/img/logos/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus/img/logos/statamic-logo-gray-900.svg"
              width={147}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMediaPress;
