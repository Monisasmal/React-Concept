
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
import Optimization from '../components/pages/concepts/Optimization';
import StateVsProps from '../components/pages/concepts/StateVsProps';
import PureComponent from '../components/pages/concepts/PureComponent';
import ReactDOMAndEvents from '../components/pages/concepts/ReactDOMAndEvents';
import ReactMemo from '../components/pages/concepts/ReactMemo';
import MemoVsUseMemo from '../components/pages/concepts/MemoVsUseMemo';
import ReactFiber from '../components/pages/concepts/ReactFiber';
import Transitions from '../components/pages/concepts/Transitions';
import ReactRouterGuide from '../components/pages/concepts/ReactRouterGuide';
import Reconciliation from '../components/pages/concepts/Reconciliation';
import SyntheticEvents from '../components/pages/concepts/SyntheticEvents';
import WebpackGuide from '../components/pages/concepts/Webpack';
import ReactEvolution from '../components/pages/concepts/ReactEvolution';
import DiffingAlgorithm from '../components/pages/concepts/DiffingAlgorithum';
import HooksOverview from '../components/pages/concepts/Hooks';
import UseStateDetails from '../components/pages/concepts/hooks/useStateHook';
import StrictModeGuide from '../components/pages/concepts/StrictMode';
import ReactPortalGuide from '../components/pages/concepts/ReactPortal';
import ErrorBoundary from '../components/pages/concepts/ErrorBoundary';
import ReactFragmentGuide from '../components/pages/concepts/ReactFragmentGuide';
import ReactSuspenseGuide from '../components/pages/concepts/ReactSuspenseGuide';
import Hydration from '../components/pages/concepts/Hydration';
import CodeSplitting from '../components/pages/concepts/CodeSplitting';
import OneWayDataBindingGuide from '../components/pages/concepts/OneWayDataBinding';
import JSXTransformation from '../components/pages/concepts/JSXTransformation';
import AutomaticBatching from '../components/pages/concepts/AutomaticBatching';
import TreeShakingGuide from '../components/pages/concepts/TreeShaking';
import Memoization from '../components/pages/concepts/Memoization';
import PropDrilling from '../components/pages/concepts/PropDrilling';
import CompositionGuide from '../components/pages/concepts/Composition';
import ContainerPresentationalGuide from '../components/pages/concepts/ContainerVsPresentational';
import AtomicDesign from '../components/pages/concepts/AtomicDesign';
import Streaming from '../components/pages/concepts/Streaming';
import ProgressiveHydration from '../components/pages/concepts/ProgressiveHydration';


export const conceptRoutes = [
  { 
    path: "/concepts/what-is-Hooks/hooks/usestate", 
    element: <UseStateDetails />, 
    hidden: true 
  },
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
  { path: "/concepts/what-is-Optimization", element: <Optimization />, title: "What is Optimization?" },
  { path: "/concepts/what-is-State-and-Props", element: <StateVsProps />, title: "what is State and Props?" },
  { path: "/concepts/what-is-Pure-Component", element: <PureComponent />, title: "What is Pure Component?" },
  { path: "/concepts/what-is-ReactDOM-and-event", element: <ReactDOMAndEvents />, title: "What is React DOM and Event?" },
  { path: "/concepts/what-is-ReactMemo", element: <ReactMemo />, title: "What is the use of React Memo?" },
  { path: "/concepts/what-is-the-diff-MemoVsUseMemo", element: <MemoVsUseMemo />, title: "What is the diff between React Memo and useMemo?" },
  { path: "/concepts/what-is-ReactFiber", element: <ReactFiber />, title: "What is the use of React Fiber?" },
  { path: "/concepts/what-is-useTransitions", element: <Transitions />, title: "What is the use of useTransitions?" },
  { path: "/concepts/what-is-ReactRouter", element: <ReactRouterGuide />, title: "What is  React Router?" },
  { path: "/concepts/what-is-Reconcillation", element: <Reconciliation />, title: "What is Reconcillation?" },
  { path: "/concepts/what-is-SyntheticEvent", element: <SyntheticEvents />, title: "What is Synthetic Event in react?" },
  { path: "/concepts/what-is-WebPack?", element: <WebpackGuide />, title: "What is Web Pack?" },
  { path: "/concepts/React Evolution?", element: <ReactEvolution />, title: "What is React Evolution?" },
  { path: "/concepts/what-is-Diffing-algorithum?", element: <DiffingAlgorithm />, title: "What is Diffing Algorithm?" },
  { path: "/concepts/what-is-Hooks?", element: <HooksOverview />, title: "What is Hook?" },
  { path: "/concepts/what-is-StrictMode?", element: <StrictModeGuide />, title: "What is StrictMode?" },
  { path: "/concepts/what-is-ReactPortal?", element: <ReactPortalGuide />, title: "What is React Portal?" },
  { path: "/concepts/what-is-Error-Boundary?", element: <ErrorBoundary />, title: "What is Error Boundary?" },
  { path: "/concepts/what-is-React-Fragment?", element: <ReactFragmentGuide />, title: "What is React Fragment?" },
  { path: "/concepts/what-is-React-Suspense?", element: <ReactSuspenseGuide />, title: "What is React Suspense?" },
  { path: "/concepts/what-is-Hydration?", element: <Hydration />, title: "What is React Hydration?" },
  { path: "/concepts/what-is-CodeSpliting?", element: <CodeSplitting />, title: "What is Code Splitting?" },
  { path: "/concepts/what-is-One-way-data-binding?", element: <OneWayDataBindingGuide />, title: "What is one way data binding?" },
  { path: "/concepts/what-is-JSX-Transformation?", element: <JSXTransformation />, title: "What is JSX Transformation?" },
  { path: "/concepts/what-is-Automatic-Batching?", element: <AutomaticBatching />, title: "What is Automatic Batching?" },
  { path: "/concepts/what-is-Tree-Shaking?", element: <TreeShakingGuide />, title: "What is Tree Shaking?" },
  { path: "/concepts/what-is-Memoization?", element: <Memoization />, title: "What is Memoization?" },
  { path: "/concepts/what-is-Prop-Drilling?", element: <PropDrilling />, title: "What is Prop Drilling?" },
  { path: "/concepts/what-is-Composition?", element: <CompositionGuide />, title: "What is Composition?" },
  { path: "/concepts/Difference between Container Vs Presentational?", element: <ContainerPresentationalGuide />, title: "What Difference between Container Vs Presentational?" },
  { path: "/concepts/what-is-Atomic-Design?", element: <AtomicDesign />, title: "What is Automic Design?" },
  { path: "/concepts/what-is-Streaming?", element: <Streaming />, title: "What is Streaming?" },
  { path: "/concepts/what-is-Progressive-Hydration?", element: <ProgressiveHydration />, title: "What is Progressive Hydration?" },
];
