import React from "react";
import { setIsAdd } from "../../Store/storeAction";
import { StoreContext } from "../../Store/storeContext";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNav from "../partials/SideNav";
import Maps from "./Maps";
import AnalyticsChart from "./AnalyticsChart";

const Analytics = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main overflow-y-auto ">
        <div className=" layout-division ">
          <SideNav menu="Analytics" />
          <main className="">
            <Header title="Analytics" subtitle="" />
            <div className="py-5 flex flex-col gap-5 overflow-y-auto overflow-x-hidden">
              <div>
                <Maps />
              </div>
              <div>
                <AnalyticsChart />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Analytics;
