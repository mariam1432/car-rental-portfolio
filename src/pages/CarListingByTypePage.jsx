import React from "react";
import { CarCard, Layout, EmptyState } from "../components";
import { useNavigate, useParams } from "react-router-dom";

import { carTypeList } from "../data";

const CarListingByTypePage = () => {
  // const [selectedPage, setSelectedPage] = useState(1);
  const params = useParams();
  const navigate = useNavigate();

  const categoryName = params?.category?.replace(/-/g, " ") || "";
  const subCategoryName = params?.["sub-category"]?.replace(/-/g, " ") || "";

  const category = carTypeList?.find((c) => c?.slug === params?.category);
  const subNav = category?.car_subcategories?.find(
    (sub) => sub?.slug === params?.["sub-category"]
  );

  const cars = subNav?.cars || [];
  const carCount = cars.length;

  return (
    <Layout>
      <div className="w-full min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 capitalize">
              {subCategoryName
                ? `${subCategoryName} in Dubai`
                : "Cars in Dubai"}
            </h1>
            {carCount > 0 && (
              <p className="text-gray-600 mt-2">{carCount} available car(s)</p>
            )}
          </div>
          {/* Car Listings */}
          {carCount > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {cars.map((carItem) => (
                  <CarCard
                    key={carItem?.id || Math.random()}
                    link={`/${params.category}/${params["sub-category"]}/car/${
                      carItem?.slug || ""
                    }`}
                    onHandleAction={() =>
                      navigate(
                        `/${params.category}/${params["sub-category"]}/car/${
                          carItem?.slug || ""
                        }`
                      )
                    }
                    price={carItem?.pricePerDay || 0}
                    imgUrl={
                      carItem?.images?.[0]?.url
                        ? `${carItem.images[0].url}`
                        : ""
                    }
                    logo={
                      carItem?.brand?.logo?.url
                        ? `${carItem.brand.logo.url}`
                        : ""
                    }
                    title={carItem?.name || "Unnamed Car"}
                  />
                ))}
              </div>
              {/* 
              {pagination?.pageCount > 1 && (
                <div className="flex justify-center mt-8">
                  <Pagination
                    noOfPages={pagination.pageCount}
                    selectedPage={selectedPage}
                    handleSelectedPage={handlePageChange}
                  />
                </div>
              )} */}
            </>
          ) : (
            <EmptyState
              title="No Cars Available"
              message={`We couldn't find any ${
                subCategoryName || categoryName || ""
              } cars at the moment.`}
              actionText="Browse Other Cars"
              onAction={() => navigate("/")}
            />
          )}
          {subCategoryName && (
            <div className="mt-16 rounded-lg overflow-hidden">
              <div
                className="w-full h-64 md:h-96 flex items-center justify-center bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://imagecdnsa.zigwheels.ae/large/gallery/exterior/20/214/lamborghini-aventador-front-angle-low-view-689455.jpg")`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-bold uppercase">
                    {subCategoryName}
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CarListingByTypePage;
