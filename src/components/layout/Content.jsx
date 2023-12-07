import { Outlet } from "react-router-dom";
const Content = ({children}) => {

  return (
    <div className="relative mx-auto w-full xl:max-w-5xl">
      {children}
    </div>
  )
}

export default Content