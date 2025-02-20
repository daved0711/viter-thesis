import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsView,
} from "../../Store/storeAction";
import { StoreContext } from "../../Store/storeContext";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalDelete from "../partials/modals/ModalDelete";
import Pills from "../partials/Pills";

import LoadMore from "../partials/LoadMore";
import { movies } from "./datamovies";

const DashboardTable = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [movieInfo, setmovieInfo] = React.useState("");
  let counter = 1;
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
  const handleView = (item) => {
    dispatch(setIsView(true));
    setmovieInfo(item);
  };
  const handleEdit = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <div className="mt-10 bg-secondary rounded-md p-4 border border-line relative">
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th> # </th>
                <th> Status </th>
                <th> Patient Name </th>
                <th> Date of Incident</th>
                <th> Phone Number </th>
                <th> Location </th>
                <th> Animal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((item, key) => (
                <tr>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>Patient 1</td>
                  <td>2/19/2025</td>
                  <td>0909090909</td>
                  <td>Taguan</td>
                  <td>Cat</td>
                  <td>
                    <ul className="table-action  ">
                      {item.movie_is_active ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit()}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={() => handleArchive()}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore()}
                            >
                              <ArchiveRestore />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete()}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
      {store.isView && <ModalViewAnimalbite AnimalbiteInfo={AnimalbiteInfo} />}
    </>
  );
};

export default DashboardTable;
