
import WhatIsReact from '../components/pages/concepts/WhatIsReact';
import ReactFeature from '../components/pages/concepts/ReactFeatures';
import ComponentTypes from '../components/pages/concepts/ComponentTypes';


export const conceptRoutes = [
  { path: "/concepts/what-is-react", element: <WhatIsReact />, title: "What is React?" },
  { path: "/concepts/react-feature", element: <ReactFeature />, title: "Whar are React Features" },
  { path: "/concepts/what-is-Component", element: <ComponentTypes />, title: "What is Component?" },
  
];
