import React from "react";

const MostLoved = () => {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Most Loved Custom Clothing Brand
          </h2>
          <p className="mx-auto max-w-4xl text-center mt-3 text-xl text-gray-500 sm:mt-4">
            Where your style meets expert craftsmanship. Bespoke clothing
            <br /> tailored to perfection, making every piece uniquely yours
          </p>
        </div>
      </div>
      <div className="mt-10 bg-gray-50 pb-12 sm:pb-32">
        <div className="relative">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg/6 font-medium text-gray-500">
                    Google Reviews
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary-600">
                    1076+
                  </dd>
                </div>
                <div className="flex flex-col border-b border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg/6 font-medium text-gray-500">
                    Wedme Reviews
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary-600">
                    200+
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg/6 font-medium text-gray-500">
                    JustDail
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary-600">
                    1076+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostLoved;
