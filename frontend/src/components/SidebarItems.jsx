import { BsGlobe } from "react-icons/bs";
import { RiBookReadLine } from "react-icons/ri";
import { IoStatsChartOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
const SidebarItems = [
  {
    name: "Journals",
    icon: <RiBookReadLine />,
    route: "/journal",
  },
  {
    name: "Statistics",
    icon: <IoStatsChartOutline />,
    route: "/stats",
  },
  {
    name: "Recommendations",
    icon: <AiOutlineStar />,
    route: "/recommendation",
  },
];

export default SidebarItems;
