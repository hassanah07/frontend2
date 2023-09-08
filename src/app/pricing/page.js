import Image from "next/image";
import React from "react";
import { pricing } from "../api/Pricing";
import Strip from "../components/Strip";
import Link from "next/link";

export const metadata = {
  title: "Our Pricing",
  description:
    "Welcome to GuideWale, The new way to get your website ready at a very low price and high quality and ultra fast and secure design and development. Get a Specific Developer Assigned for your project specially and enjoy a tension free experience"
};

const Page = () => {
  const subject = "Why are you waiting for? Lets Talk";
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {pricing.map((item) => {
              return (
                <div className="p-4 md:w-1/3" key={item.id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative py-10 shadow-2xl hover:shadow-lg hover:transition-all">
                    <img src={item.image} alt="card_image" />
                    <div className="p-6">
                      <table className="text-left bg-transparent border-x-transparent border-y-transparent">
                        <thead>
                          <tr>
                            <th className="px-4 dark:text-slate-300 bg-transparent border-x-transparent border-y-transparent"></th>
                            <th className="px-4 dark:text-slate-300 bg-transparent border-x-transparent border-y-transparent"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Type</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.type}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Suitable For</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.suitable}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Admin Panel</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.adminPanel}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Page Range</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.pageRange}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Total Page</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.totalPage}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Security</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.security}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Maintenance</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.maintenance}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>SEO</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.SEO}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Support</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.Support}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Offer</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.content7}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Frontend Language</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.codeLanguage}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Backend Language</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.backend}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Additional Page</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.additionalPages}
                            </td>
                          </tr>
                          <tr className="my-2 py-2 border-x-transparent border-y-transparent bg-inherit">
                            <td className="dark:text-slate-300 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              <b>Starting At</b>
                            </td>
                            <td className="px-2 dark:text-slate-400 text-xs pb-2 bg-transparent border-x-transparent border-y-transparent">
                              {item.price}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="lg:w-1/2 w-full leading-relaxed text-gray-500 capitalize absolute bottom-0">
                      <Link href="/talk">
                        <button className="bg-yellow-500 hover:bg-red-500 px-6 py-2 font-bold text-slate-700 hover:text-slate-200 hover:shadow-2xl hover:transition-all mx-2">
                          Lets Talk
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Strip subject={subject} />
      </section>
    </>
  );
};

export default Page;
