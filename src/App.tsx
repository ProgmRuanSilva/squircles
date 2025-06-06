import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-4 text-primary">Squircles</h1>
      <main className="bg-white flex flex-col">
        <section className="flex gap-4">
          <div className="h-[128px] w-[128px] bg-[#f1f1f1] aspect-square squircle-36 flex flex-col items-center justify-center max-h-discover-card-medium flex">
            <a href="https://react.dev" target="_blank">
              <img
                src={reactLogo}
                className="logo react"
                alt="React logo"
                width="128"
              />
            </a>
          </div>
          <div className="h-[128px] w-[128px] bg-[#f1f1f1] aspect-square squircle-36 flex flex-col items-center justify-center max-h-discover-card-medium flex">
            <a href="https://react.dev" target="_blank">
              <img
                src={viteLogo}
                className="logo react"
                alt="React logo"
                width="128"
              />
            </a>
          </div>
        </section>
        <p className="mt-4">Some squircles to play with it.</p>
        <section className="mt-4">
          <div className="flex h-full gap-4 bg-[#f1f1f1] squircle-36 p-3 text-start text-md max-h-discover-card-medium">
            <img
              className="aspect-square min-h-0 shrink-0 bg-black/5 object-cover squircle-36 dark:bg-black/20"
              draggable="false"
              aria-hidden="true"
              role="presentation"
              src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="190"
              height="200"
              alt="Thumbnail image"
            />
            <div className="flex min-h-16 min-w-0 items-center px-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center font-medium text-xs">
                  <span className="line-clamp-1">Horizontal Card</span>
                </div>
                <h2 className="line-clamp-3 break-words">
                  We can use in horizontal
                </h2>
              </div>
            </div>
          </div>
          <div
            className="border-black/8 dark:border-white/8 border-[20px] pointer-events-none absolute inset-0"
            style={{ clipPath: "var(--clip-path-squircle-stroke-48)" }}
          ></div>
        </section>
        <section className="mt-4">
          <div
            className="flex h-full w-[350px] gap-4 bg-white/20 p-3 text-start dark:bg-transparent flex-col text-lg sm:text-md md:text-lg max-h-discover-card-large"
            style={{ clipPath: "var(--clip-path-squircle-60)" }}
          >
            <img
              className="aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 squircle-48-32"
              src="https://copilot.microsoft.com/th?id=ODSWG.f3dd0a53-9769-4d07-ba59-2827439467e7&amp;forceJpeg=1&amp;o=6&amp;w=500&amp;h=500"
              alt="A red touring bike is parked beside a wooden signpost on a path by the ocean."
              draggable="false"
              aria-hidden="true"
              role="presentation"
              width="350"
            />
            <div className="flex min-h-16 min-w-0 items-end shrink-0 items-center pb-5 pe-4 px-5">
              <h2 className="line-clamp-4 break-words">
                Unlock epic adventures
              </h2>
            </div>
          </div>
          <div
            className="border-black/8 dark:border-white/8 border-[20px] pointer-events-none absolute inset-0"
            style={{ clipPath: "var(--clip-path-squircle-stroke-60)" }}
          ></div>
        </section>
      </main>
    </>
  );
}

export default App;
