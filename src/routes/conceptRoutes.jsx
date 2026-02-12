
import WhatIsReact from '../components/pages/concepts/WhatIsReact';
import ReactFeature from '../components/pages/concepts/ReactFeatures';
import ComponentTypes from '../components/pages/concepts/ComponentTypes';
import Caching from '../components/pages/concepts/Caching';
import ControllUnControll from '../components/pages/concepts/ControllUnControll'


export const conceptRoutes = [
  { path: "/concepts/what-is-react", element: <WhatIsReact />, title: "What is React?" },
  { path: "/concepts/react-feature", element: <ReactFeature />, title: "Whar are React Features?" },
  { path: "/concepts/what-is-Component", element: <ComponentTypes />, title: "What is Component?" },
  { path: "/concepts/what-is-caching", element: <Caching />, title: "What is Caching?" },
  { path: "/concepts/what-is-controll-uncontroll", element: <ControllUnControll />, title: "What is Controll and Uncontroll?" },
];
