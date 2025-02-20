
import { CheckCircle } from 'lucide-react'
import React from 'react'
import { StoreContext } from '../../Store/storeContext';
import { setSuccess } from '../../Store/storeAction';

const ToastSuccess = () => {
  const {dispatch,store} = React.useContext(StoreContext);
  React.useEffect (() => {
    setTimeout(()=>{
      dispatch(setSuccess(false))
    },3000);
  }, []);
  return (
    <>
      <div className='fixed top-10 left-1/2 -translate-x-1/2 border border-line bg-primary text-success flex gap-2 items-center \
      p-1.5 px-2.5 rounded-md'>
          <CheckCircle size={16}/>
          Record Successfully {store.message}
      </div>
    </>
  )
}

export default ToastSuccess
