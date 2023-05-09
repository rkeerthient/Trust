/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Cta from "../components/cta";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import "../index.css";
import { Image } from "@yext/pages/components";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import RTF from "../components/RTF";
import Carousel from "../components/Carousel";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "c_accomplishments.acc_Title",
      "c_accomplishments.acc_Value",
      "c_areasOfFocus.areas_Title",
      "c_areasOfFocus.area_Desciption",
      "c_education.ed_Degree",
      "c_education.ed_Univ",
      "c_education.ed_Year",
      "c_education.ed_year_end",
      "c_personalInterest",
      "c_background",
      "headshot",
      "c_fPToLocation.name",
      "c_fPToLocation.address",
      "c_fPToLocation.mainPhone",
      "c_fPToLocation.description",
      "c_fPToLocation.hours",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["financialProfessional"],
      entityIds: ["415261"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    services,
    c_accomplishments,
    c_areasOfFocus,
    c_education,
    c_personalInterest,
    c_background,
    headshot,
    c_fPToLocation,
  } = document;

  return (
    <>
      <>
        {/* <Banner name={name} address={address} openTime={openTime}>
          <div className="bg-white h-40 w-1/5 flex items-center justify-center text-center flex-col space-y-4 rounded-lg">
            <div className="text-black text-base">Visit Us Today!</div>
            <Cta
              buttonText="Get Directions"
              url="http://google.com"
              style="primary-cta"
            />
          </div>
        </Banner> */}
        <Image image={_site.c_header}></Image>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 px-4">
          <div>
            <Image image={headshot}></Image>
          </div>
          <div className="mt-4 p-4">
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-light" style={{ color: "#2e1a47" }}>
                {name.split(" - ")[0]}
              </div>
              <div>
                <div
                  className="text-2xl font-medium mt-4  "
                  style={{ color: "#7c6992" }}
                >
                  {name.split(" - ")[1]}
                </div>
                <div
                  className="text-2xl font-medium  mb-2"
                  style={{ color: "#7c6992" }}
                >
                  NMLSR #415261
                </div>
              </div>
              <div className="flex flex-col text-xl !mb-16">
                <div className="font-bold text-xl text-gray-600 ">
                  {address.line1}
                </div>
                <div>
                  {address.city}, {address.region} {address.postalCode}
                </div>
              </div>
              <div className="p-4 text-xl border-black border-2 hover:bg-purple-900 hover:text-white w-fit  hover:cursor-pointer">
                Apply now
              </div>
            </div>
          </div>
          <div className="mt-36 space-y-2 flex flex-col text-lg">
            <div className="underline cursor-pointer hover:no-underline	">
              john.lee@truist.com
            </div>
            <div className="underline cursor-pointer hover:no-underline	">
              404-394-0570
            </div>
            <div className="underline cursor-pointer hover:no-underline	">
              Get Directions
            </div>
            <div className="underline cursor-pointer hover:no-underline	">
              See All Locations
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="px-4">
          <div className="flex flex-col">
            <div className="text-3xl font-light" style={{ color: "#2e1a47" }}>
              About me
            </div>
            <div
              className="text-2xl font-medium mt-4 mb-2"
              style={{ color: "#7c6992" }}
            >
              Background
            </div>
            <RTF>{c_background}</RTF>
          </div>
          <div className="flex flex-col mt-4">
            <div
              className="text-2xl font-medium mt-4 mb-2"
              style={{ color: "#7c6992" }}
            >
              Education
            </div>
            <div>
              {c_education.map((item: any, index: any) => (
                <div className="flex flex-row">
                  <div>{item.ed_Degree}</div>
                  <div>
                    {item.ed_Univ} | {item.ed_Year} - {item.ed_year_end}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div
              className="text-2xl font-medium mt-4 mb-2"
              style={{ color: "#7c6992" }}
            >
              Personal interests
            </div>
            <div>{c_personalInterest}</div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="px-4">
          <div className="flex flex-col mt-4">
            <div
              className="text-3xl font-light mb-2"
              style={{ color: "#2e1a47" }}
            >
              Areas of Focus
            </div>
            <div className=" grid grid-cols-2">
              {c_areasOfFocus.map((item: any, index: any) => (
                <div className="w-full px-4 pt-2">
                  <div className="mx-auto w-full rounded-2xl bg-white p-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200  px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                            <span className="text-lg font-medium">
                              {item.areas_Title}
                            </span>
                            <ChevronDownIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col">
                            <RTF>{item.area_Desciption}</RTF>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col mt-4">
            <div
              className="text-3xl font-light mb-2"
              style={{ color: "#2e1a47" }}
            >
              Accomplishments
            </div>
            <div className="grid grid-cols-2">
              {c_accomplishments.map((item: any, index: any) => (
                <div className="flex flex-col mt-4">
                  <div className="font-bold text-xl text-gray-600">
                    {item.acc_Title}
                  </div>
                  <div className="text-xl">{item.acc_Value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4" />
        {c_fPToLocation && (
          <>
            <div className="w-full  mt-4">
              <div className="p-4 w-full mx-auto text-center mb-10 ">
                <div className="p-4 w-full md:w-2/4 mx-auto text-center  ">
                  <h2 className="text-2xl font-bold border-b border-black mb-4 pb-4">
                    Service Locations
                  </h2>
                </div>

                <div className="bg-grey-100 locSlick ">
                  <Carousel
                    data={c_fPToLocation}
                    slidesToShow={4}
                    type="location"
                  ></Carousel>
                </div>
              </div>
            </div>
          </>
        )}
        {/* <div className="centered-container">
          <div className="section">
            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
              <div className="bg-gray-100 p-5 space-y-12">
                <Contact address={address} phone={mainPhone}></Contact>
                {services && <List list={services}></List>}
              </div>
              <div className="col-span-2 pt-5 space-y-10">
                <div>
                  {hours && <Hours title={"Restaurant Hours"} hours={hours} />}
                </div>
                {geocodedCoordinate && (
                  <StaticMap
                    latitude={geocodedCoordinate.latitude}
                    longitude={geocodedCoordinate.longitude}
                  ></StaticMap>
                )}
              </div>
            </div>
          </div>
        </div> */}{" "}
        <Image image={_site.c_footer}></Image>
      </>
    </>
  );
};

export default Location;
