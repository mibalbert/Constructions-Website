import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div class="w-full min-h-[75vh] flex items-center justify-center bg-neutral-950 pt-20 ">
      <div class="max-w-7xl mx-auto w-full px-4 text-white flex flex-col">
        <div class="w-full text-3xl font-bold">
          <h1 class="w-full md:w-2/3">How can we help you. get in touch</h1>
        </div>
        <div class="flex mt-8 flex-col md:flex-row md:justify-between pb-20">
          <p class="w-full md:w-2/3 text-neutral-400">
            To ensure that all Wikipedia content is verifiable, anyone may
            question an uncited claim. If your work has been tagged
          </p>
          <div class="w-44 pt-6 md:pt-0">
            <Button className="w-full max-w-3xl font-semibold text-black bg-white text-md">
              Contact US
            </Button>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 border-t border-neutral-600 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p class="font-medium text-neutral-400">Services</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  1on1 Coaching
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Company Review
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Accounts Review
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  HR Consulting
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-neutral-400">Company</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Meet the Team
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-neutral-400">Helpful Links</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-neutral-400">Legal</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Accessibility
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Returns Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-neutral-200 transition hover:opacity-75"
                >
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-xs text-neutral-500 pt-10">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
