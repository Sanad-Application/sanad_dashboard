import { Outlet } from "react-router-dom";
import NavSetting from "../../components/navSetting/NavSetting";
const Setting = () => {
  return (
    <section className='setting'>
      <div className='heading'>
        <h1>Setting</h1>
      </div>
      <NavSetting />
      <Outlet />
    </section>
  );
};

export default Setting;
