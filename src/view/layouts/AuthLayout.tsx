import { Outlet, Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.png';
import pneusImg from '../../assets/images/pneus.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex  lg:w-1/2 overflow-y-auto p-8">
        <div className="w-full max-w-[504px] flex flex-col gap-12 m-auto">
          <Link to="/">
            <img 
              src={logoIcon}
              alt="Sunset"
              className='h-[74px] cursor-pointer mx-auto'
            />
          </Link>
        
          <Outlet />
        </div>
      </div>
      
      <div className="w-1/2 h-fullrelative hidden lg:flex">
        <div
          className="relative bg-red-500 w-full h-full select-none rounded-s-[32px] grid place-items-center shadow-sm overflow-hidden"
        >
          <img src={pneusImg} className="absolute max-h-[600px] bottom-0 z-20" />
        </div>
      </div>
    </div>
  )
}