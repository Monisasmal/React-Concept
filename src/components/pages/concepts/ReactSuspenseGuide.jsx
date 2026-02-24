import React, { Suspense, lazy } from "react";

/*
  What is Suspense?
  ------------------
  Suspense lets you show a fallback UI (like loading spinner)
  while waiting for a component to load.
*/

// Lazy load component
const LazyComponent = lazy(() => import("./LazyComponent"));

const ReactSuspenseGuide = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Suspense Guide</h1>

      <p>
        Suspense is used to handle lazy-loaded components and show a fallback UI while loading.
      </p>

      {/* Suspense Wrapper */}
      <Suspense fallback={<h2>Loading Component...</h2>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default ReactSuspenseGuide;