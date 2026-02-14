
import WhatIsReact from '../components/pages/concepts/WhatIsReact';
import ReactFeature from '../components/pages/concepts/ReactFeatures';
import ComponentTypes from '../components/pages/concepts/ComponentTypes';
import Caching from '../components/pages/concepts/Caching';
import ControllUnControll from '../components/pages/concepts/ControllUnControll';
import EncryptionGuide from '../components/pages/concepts/Encryption';
import HOC from '../components/pages/concepts/HOC';
import BabelAndBuild from '../components/pages/concepts/BabelAndBuild';
import RenderingProcess from '../components/pages/concepts/RenderingProcess';
import KeyGuide from '../components/pages/concepts/Key';
import LibraryVsFramework from '../components/pages/concepts/LibraryVsFramework';
import JsxVsHtml from '../components/pages/concepts/JsxVsHtml';
import LiftingStateUp from '../components/pages/concepts/LiftingStateUp';


export const conceptRoutes = [
  { path: "/concepts/what-is-react", element: <WhatIsReact />, title: "What is React?" },
  { path: "/concepts/react-feature", element: <ReactFeature />, title: "Whar are React Features?" },
  { path: "/concepts/what-is-Component", element: <ComponentTypes />, title: "What is Component?" },
  { path: "/concepts/what-is-caching", element: <Caching />, title: "What is Caching?" },
  { path: "/concepts/what-is-controll-uncontroll", element: <ControllUnControll />, title: "What is Controll and Uncontroll Component?" },
  { path: "/concepts/what-is-Encryption", element: <EncryptionGuide />, title: "What is Encryption and Decryption?" },
  { path: "/concepts/what-is-HOC", element: <HOC />, title: "What is Higher Order Concept?" },
  { path: "/concepts/what-is-Browser-Compatible", element: <BabelAndBuild />, title: "What is Browser-Compatible?" },
  { path: "/concepts/RenderingProcess", element: <RenderingProcess />, title: "How React Rendering Process Working?" },
  { path: "/concepts/what-is-Key", element: <KeyGuide />, title: "What is Key in react?" },
  { path: "/concepts/what-is-LibraryandFramework", element: <LibraryVsFramework />, title: "What is the difference in Library and Framework?" },
  { path: "/concepts/what-is-JsxVsHtml", element: <JsxVsHtml />, title: "What is JSX Vs HTML?" },
  { path: "/concepts/what-is-Lifting-StateUp", element: <LiftingStateUp />, title: "What is Lifting StateUp?" },
];
