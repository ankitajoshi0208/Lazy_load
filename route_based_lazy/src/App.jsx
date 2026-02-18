import { lazy, Suspense } from "react";

const HomePage = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/homepage")), 3000),
    ),
);

function LoadingFallback() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#666",
      }}
    >
      Loading...
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomePage />
    </Suspense>
  );
}

export default App;
