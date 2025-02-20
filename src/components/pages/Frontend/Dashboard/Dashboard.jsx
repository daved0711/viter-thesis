import React from "react";
import { StoreContext } from "../../Store/storeContext";
import { setIsAdd } from "../../Store/storeAction";
import SideNav from "../partials/SideNav";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import { Plus } from "lucide-react";
import DashboardTable from "./DashboardTable";
import Footer from "../partials/Footer";
import DashboardCard from "./DashboardCard";
import DashboardCharts from "./DashboardCharts";
import DashboardMaps from "./DashboardMaps";

const Dashboard = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main overflow-y-auto overflow-x-hidden ">
        <div className=" layout-division ">
          <SideNav menu="Dashboard" />
          <main className="">
            <Header title="Dashboard" subtitle="" />
            <div className="p-8">
              <div className="flex flex-row  justify-between items-center">
                <Searchbar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> add New
                </button>
              </div>
              <div className="py-5 flex flex-col gap-5 ">
                <div>
                  <DashboardTable />
                </div>
                <div className="py-5">
                  <DashboardCard />
                </div>
                <div>
                  <DashboardCharts />
                </div>
                <div>
                  <DashboardMaps />
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {/* {store.isView && <SpinnerWindow/>} */}
      {/* {store.isAdd && <ModalAddAnimalbite/>} */}
    </>
  );
};

export default Dashboard;
