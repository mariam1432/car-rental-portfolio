import React from "react";
import { Button, CarBrandCard, CarCard, Layout } from "../components";

import { useNavigate } from "react-router-dom";
import { carBrands, carTypeList } from "../data";

const HomePage = () => {
  const navigate = useNavigate();

  const brandList = carBrands;

  const renderBrandCards = () => (
    <div className="w-full">
      <div className="hidden md:block w-full overflow-x-auto no-scrollbar py-2 px-4">
        <div className="inline-flex space-x-4 min-w-max w-full px-2">
          {brandList.map((brand) => (
            <CarBrandCard
              onClick={() => navigate(`/rent/${brand.slug}`)}
              key={`desktop-${brand.id}`}
              className="flex-shrink-0"
              title={brand.car_Brand}
              imgUrl={brand?.logo?.url ? `${brand.logo.url}` : ""}
            />
          ))}
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-2 gap-3 px-2 max-w-screen-sm md:hidden">
        {brandList.map((brand, index) => {
          const isLastOdd =
            brandList.length % 2 !== 0 && index === brandList.length - 1;
          return (
            <div
              key={`medium-${brand.id}`}
              className={isLastOdd ? "col-span-2" : ""}
            >
              <CarBrandCard
                onClick={() => navigate(`/rent/${brand.slug}`)}
                title={brand.car_Brand}
                imgUrl={brand?.logo?.url ? `${brand.logo.url}` : ""}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>

      <div className="sm:hidden flex flex-col gap-3 px-2">
        {brandList.map((brand) => (
          <div key={`small-${brand.id}`} className="w-full">
            <CarBrandCard
              onClick={() => navigate(`/rent/${brand.slug}`)}
              title={brand.car_Brand}
              imgUrl={brand?.logo?.url ? `${brand.logo.url}` : ""}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      <Button
        className="mt-5 mx-auto block md:hidden w-full max-w-[200px]"
        onClick={() => navigate("/car-rental-brands")}
        aria-label="View all brands"
      >
        All Brands{" "}
        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </Button>
    </div>
  );
  const renderCarCategories = () => (
    <div className="flex flex-col items-center justify-center">
      {carTypeList.map((cartype) => {
        return (
          <section
            key={cartype.id}
            className="flex flex-col items-center justify-center py-6 gap-4 w-full px-4 md:px-8 max-w-screen-xl mx-auto"
            aria-labelledby={`${cartype.id}-heading`}
          >
            <h2
              id={`${cartype.id}-heading`}
              className="text-lg md:text-2xl font-bold uppercase text-center"
            >
              {cartype.cartype} FOR RENT IN DUBAI
            </h2>
            <p className="text-xs md:text-sm text-gray-500 text-center max-w-2xl px-4">
              Browse our wide catalog of {cartype.cartype} for rent by category
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cartype.car_subcategories.map(
                (subCat) =>
                  subCat.cars &&
                  subCat.cars.length > 0 &&
                  subCat.cars
                    .slice(0, 1)
                    .map((carItem) => (
                      <CarCard
                        key={carItem.id}
                        link={`/${window.location.origin}/${carItem?.category.slug}/${carItem?.subcategory.slug}/car/${carItem?.slug}`}
                        onHandleAction={() =>
                          navigate(
                            `/${carItem?.category.slug}/${carItem?.subcategory.slug}/car/${carItem?.slug}`
                          )
                        }
                        price={carItem.pricePerDay}
                        imgUrl={
                          carItem?.images?.[0]?.url
                            ? `${carItem.images[0].url}`
                            : ""
                        }
                        logo={
                          carItem?.brand?.image?.url
                            ? `${carItem.brand.image.url}`
                            : ""
                        }
                        title={carItem.name}
                      />
                    ))
              )}
            </div>

            <Button
              className="rounded-[1px] md:w-max text-xs border-4"
              onClick={() => navigate(`/cartype/${cartype.slug}`)}
              aria-label={`View all ${cartype.cartype} cars`}
            >
              All {cartype.cartype}{" "}
              <i
                className="fa-solid fa-chevron-right ml-1"
                aria-hidden="true"
              ></i>
            </Button>
          </section>
        );
      })}
    </div>
  );

  return (
    <Layout isHome>
      <div className="bg-white overflow-x-hidden">
        <div className="mb-10 px-4 sm:px-6 gap-4 flex flex-col items-center justify-center max-w-screen-xl mx-auto">
          <p className="text-sm text-gray-500 text-center px-4">
            Arab Star luxury car rental in Dubai offers a fair and competitive
            pricing service. Our luxury car fleet in Dubai includes all brands
            with FREE delivery. Choose your luxury car from our fleet, including
            Ferrari, Lamborghini, BMW, Audi, McLaren, Mercedes, Rolls Royce,
            Porsche, Range Rover, Bentley, and more. We have a clear zero
            deposit policy, straight forward transactions, and no hidden fees or
            costs.
          </p>

          <div className="flex w-full flex-wrap items-center justify-center md:justify-between gap-4 text-center md:text-left px-2">
            <h1 className="text-lg md:text-2xl font-bold">
              SELECT A CAR FOR RENT BY BRAND
            </h1>
            <button
              className="bg-white hidden md:flex items-center justify-center gap-1 text-sm text-primary cursor-pointer"
              onClick={() => navigate("/car-rental-brands")}
              aria-label="View all brands"
            >
              All Brands{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>

          {brandList.length > 0 ? (
            renderBrandCards()
          ) : (
            <p>No brands available</p>
          )}
        </div>

        <img
          src="https://www.rotanastar.ae/wp-content/uploads/2025/05/offer-banner-1536x802.webp"
          alt="Special offers on luxury car rentals"
          className="w-full"
          loading="lazy"
        />

        {renderCarCategories()}
      </div>
    </Layout>
  );
};

export default HomePage;
