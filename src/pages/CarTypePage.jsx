import React from "react";
import { CarCard, Layout } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { carTypeList } from "../data";

const CarTypePage = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  // Safely get filterSubNav with proper fallback
  const filterSubNav = carTypeList.find((c) => c.slug === type);

  // Early return if no matching category found
  if (!filterSubNav) {
    return (
      <Layout>
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-2xl font-bold text-red-600">
              Category not found
            </h1>
            <p className="mt-4">The requested car category does not exist.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const subNavList =
    filterSubNav.car_subcategories?.map((subCat) => subCat) || [];

  const renderSubcategoryNavigation = () => (
    <div className="px-4 md:px-6 flex gap-3 overflow-x-auto no-scrollbar pb-6 items-center justify-center">
      {subNavList.length > 0 ? (
        subNavList.map((carType) => (
          <button
            key={carType.id}
            onClick={() =>
              navigate(`/product-category/${type}/${carType.slug}`)
            }
            className="bg-gray-100 px-6 py-3 border border-primary rounded-lg min-w-fit cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 whitespace-nowrap text-sm md:text-base font-medium shadow-sm"
            aria-label={`View ${carType.categorySubType} cars`}
          >
            {carType.categorySubType}
          </button>
        ))
      ) : (
        <p className="text-gray-500">No subcategories available</p>
      )}
    </div>
  );

  const filterOutBrands = () => {
    const brandMap = new Map();

    subNavList?.forEach((subNav) => {
      subNav?.cars?.forEach((car) => {
        if (car?.brand && !brandMap.has(car.brand.slug)) {
          brandMap.set(car.brand.slug, car.brand);
        }
      });
    });

    return Array.from(brandMap.values());
  };

  const renderBrandLogos = () => {
    const brands = filterOutBrands();

    return (
      <div className="w-full mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
          Available Brands
        </h2>

        <div className="overflow-x-auto no-scrollbar py-2 px-4">
          <div className="inline-flex space-x-6 flex-nowrap">
            {brands.length > 0 ? (
              brands.map((brandItem) => (
                <button
                  key={brandItem.id}
                  onClick={() => navigate(`/rent/${brandItem.slug}`)}
                  className="cursor-pointer rounded-xl border border-gray-200 flex items-center justify-center px-6 py-4 hover:border-primary hover:shadow-md transition-all duration-300 min-w-[100px] bg-white"
                  aria-label={`View ${brandItem.car_Brand} cars`}
                >
                  {brandItem?.logo?.url ? (
                    <img
                      src={`${brandItem.logo.url}`}
                      alt={brandItem.car_Brand}
                      loading="lazy"
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <span className="text-sm font-medium text-gray-700">
                      {brandItem.car_Brand}
                    </span>
                  )}
                </button>
              ))
            ) : (
              <p className="text-gray-500 text-center w-full">
                No brands available
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSubcategorySections = () => {
    const subcategory = filterSubNav.car_subcategories || [];

    return (
      <div className="w-full px-4 md:px-8">
        {subcategory.length > 0 ? (
          subcategory.map((cat) => {
            const carCount = cat.cars?.length || 0;
            if (carCount === 0) return;
            return (
              <section
                key={cat.id}
                className="flex items-center justify-center py-10 gap-6 flex-col border-b border-gray-200 last:border-b-0"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">
                  {cat.categorySubType}
                </h2>

                <div className="w-full mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {carCount > 0 ? (
                      cat.cars.map((carItem) => (
                        <CarCard
                          key={carItem.id}
                          link={`${window.location.origin}${carItem?.category.slug}/${carItem?.subcategory.slug}/car/${carItem?.slug}`}
                          onHandleAction={() =>
                            navigate(
                              `/${carItem?.category.slug}/${
                                carItem?.subcategory.slug
                              }/car/${carItem?.slug || ""}`
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
                    ) : (
                      <p className="text-gray-500 col-span-full text-center py-10">
                        No cars in this category
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    navigate(`/product-category/${type}/${cat.slug}`)
                  }
                  className="text-white cursor-pointer bg-primary rounded-lg font-semibold px-6 py-2 hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg"
                  aria-label={`View more ${cat.subCategory} cars`}
                >
                  View More
                </button>
              </section>
            );
          })
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No subcategories available</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            {renderSubcategoryNavigation()}
            {renderBrandLogos()}
          </div>
          {renderSubcategorySections()}
        </div>
      </div>
    </Layout>
  );
};

export default CarTypePage;
