import { SidebarObjectProps } from '../index.types';
import SidebarCore from './components/SidebarCore';

const Sidebar = (props : SidebarObjectProps) => {
  return <>
    <SidebarCore {...props} />
  </>;
};

export default Sidebar;
