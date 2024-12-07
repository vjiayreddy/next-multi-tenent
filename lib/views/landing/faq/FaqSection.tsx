import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How can i get started?",
    answer:
      "There are multiple ways you can get started with My Perfect Fit i.e. Order online, visit our flagship or set up the video call appointment with our stylist. If confused where to start,, just book an appointment and we will assist you in the entire process.",
  },
  {
    question: "What are the products you customize?",
    answer:
      "We customize menswear for all occasions and events including wedding suits, tuxedos, two piece suits, three piece suits, wedding sherwani,kurtas, sadris,indo-werstern and sherwanis, formal shirts, casual shirts and trousers. We also customize ethnic jhooti or shoes to match the outfit you are wearing. You can get a completely customised outfit from head to toe from My Perfect Fit.",
  },
  {
    question: "How good is My Perfect Fit the quality of your products?",
    answer:
      "Our garments are hand-checked to ensure our product is of the highest quality and meets your expectations. We have various quality fabrics depending on your choice of selection. We also have a variety of fabrics for suits, shirts, trousers, sherwani’s, kurtas etc from around the world.",
  },
  {
    question: "Do you offer custom design for your products?",
    answer:
      "Yes, My Perfect Fit offers custom designs like monograms of initials of your name or company name on shirts and suits. We also have custom designs for wedding wear and event wear for our clients. We also offer custom designs based on your specifications which you can find when you are ordering a particular product. Every product of My Perfect Fit has a customised option to help you make it your own.",
  },
];
const FaqSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl mb-12 text-center font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
