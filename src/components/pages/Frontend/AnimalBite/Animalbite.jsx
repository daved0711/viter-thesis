

import React from 'react'
import { StoreContext } from '../../Store/storeContext';
import { setIsAdd } from '../../Store/storeAction';
import SideNav from '../partials/SideNav';
import Header from '../partials/Header';
import Searchbar from '../partials/Searchbar';
import { Plus } from 'lucide-react';
import AnimalBiteTable from './AnimalBiteTable';
import Footer from '../partials/Footer';
import ModalValidation from '../partials/modals/ModalValidation';
import ModalError from '../partials/modals/ModalError';
import ModalAddAnimalbite from './ModalAddAnimalbite';


const Animalbite = () => {
 
  const { dispatch, store} = React.useContext(StoreContext);
  const handleAdd = () => {dispatch(setIsAdd(true));
  }

  return (
    <>
    <section className='layout-main '>
        <div className=" layout-division ">
       <SideNav menu="Animalbite"/>
            <main className=''>
               <Header title='Animalbite' subtitle=''/>
                <div className='p-8'> 
                    <div className='flex justify-between items-center'>
                      <Searchbar/>
                        <button className='btn btn-add' onClick={handleAdd}>
                           <Plus size={16}/> add New
                        </button>
                    </div>  
                      <AnimalBiteTable/>
                </div>

                <Footer/>
            </main>
        </div>
    </section>
  
    {store.validate && <ModalValidation/> }
    {store.error && <ModalError/>}
     {store.success && <ToastSuccess/>}
    {/* {store.isView && <SpinnerWindow/>} */}
    {store.isAdd && <ModalAddAnimalbite/>}
   
    </>
  )
}

export default Animalbite
