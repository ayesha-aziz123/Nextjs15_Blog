import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen w-full mx-auto lg:w-2/3 text-center">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="font-bold text-[30px] py-8 px-2 text-center">
          Discovering Next.js 15 RC: New Features and Difficulties
          <hr className="h-[2px] bg-black my-3 w-[70%] mx-auto" />
        </h1>
        <div className="text-center">
          <Image
            className="lg:w-[50vw] lg:h-[20vw] w-[70vw] h-[40vw]"
            src={"/nextjs15.png"}
            width={9000}
            height={9000}
            alt={"Nextjs_Image"}
          />
        </div>

        {/* Para */}
        <div className="py-5 text-[17px] lg:px-9 px-5">
          <p className="">
            In this blog, we will explore the Next.js 15 RC to test the latest
            features for the upcoming stable release of Next.js. The first
            release candidate for Next.js 15 RC was rolled out on May 23, 2024.
            This means we can examine all the new development, production, and
            caching features.
          </p>
          <br />
          <p>
            The release of Next.js 15 has brought exciting improvements that
            empower developers to create fast, scalable, and efficient web
            applications. This blog covers everything you need to know about
            installing Next.js 15, exploring its new features, and leveraging
            them in your projects.
          </p>

          <h1 className="font-bold text-[30px] py-3 text-center">
            What is Next.js?
          </h1>
          <p>
            Next.js, developed by Vercel, is an open-source React framework that
            provides powerful tools for creating fast, SEO-friendly web
            applications. It supports server-side rendering (SSR), static site
            generation (SSG), and client-side rendering (CSR), making it a
            versatile choice for modern web development. Key features like
            automatic code splitting, efficient routing, optimized production
            builds, and API routes enhance both user and developer experiences.
          </p>
          <br />
          <h1 className="font-bold text-center text-2xl">
            Upgrade to the latest Next.js version?
          </h1>
          <p>
            To upgrade to the latest version of Next.js (version 15 RC), use the
            following command with your preferred package manager:
          </p>
          <h2 className="font-bold text-blue-700 text-center py-4 text-2xl">
            NPM
          </h2>

          <div className="flex justify-center rounded-md w-full bg-black text-green-300">
            <code className="inline-block   px-0 py-2 lg:px-5 lg:py-3">
              npm i next@rc react@rc react-dom@rc eslint-config-next@rc
            </code>
          </div>
          <br />
          <h2 className=" font-bold text-blue-700 text-center py-4 text-2xl">
            Yarn
          </h2>
          <div className="flex justify-center w-full bg-black text-green-300 rounded-md ">
            <code className=" inline-block  px-0 py-2 lg:px-5 lg:py-3">
              yarn add next@rc react@rc react-dom@rc eslint-config-next@rc
            </code>
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-center">
              Stable Improvements.
            </h1>
            <p>
              The latest release includes several stable improvements aimed at
              streamlining development and production.
            </p>

            <h1 className="font-bold text-[25px] py-3 text-[#254681] text-center">
              1. Support for React 19 RC
            </h1>
            <p>
              Next.js 15 RC introduces full compatibility with React 19 RC,
              enabling developers to experiment with React&apos;s latest APIs
              and features before the official release. React 19 RC powers both
              client-side and server-side environments in Next.js, making the
              framework future-ready.React 19 RC Before upgrading to React 19
              RC, please check the new features and updates by visiting our
              blog. With the unveiling of React 19 RC, the Next.js App Router is
              being developed on the React canary channel specifically for
              frameworks. This allows developers to utilize and provide input on
              the latest React APIs ahead of the official v19 launch. Next.js 15
              RC will be compatible with React 19 RC, bringing forth novel
              features for both client-side and server-side environments,
              including Actions. For more information, please refer to the React
              19 upgrade guide.
            </p>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center ">
              React Compiler
            </h1>
            <p>
              The React Compiler, developed by the React team, automatically
              optimizes code by analyzing JavaScript semantics and applying
              optimizations. This reduces manual tasks like using useMemo or
              useCallback.
            </p>

            <span className="font-bold ">Upgrade to React 19 RC</span>
            <h4 className="font-bold text-[#254681]">
              To upgrade your project:
            </h4>
            <br />
            <div className="w-full  bg-black text-green-500 px-3 py-2 lg:px-6 lg:py-3 rounded-md">
              <code className="   ">
                npm install babel-plugin-react-compiler
              </code>
            </div>
            <br />
            <br />
            <p>
              Add the experimental.reactCompiler option in the next.config.js
              file.
            </p>
            <br />
            <div className="w-full rounded-md bg-black text-green-500">
              <code className="inline-block text-lg md:text-sm ">
                <pre className=" px-2  lg:px-12 lg:py-3 ">
                  {`const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};
module.exports = nextConfig;`}
                </pre>
              </code>
            </div>
            <br />
            <p>
              Using the experimental option ensures support for the React
              Compiler in the following areas: App Router, Pages Router,
              Webpack, and Turbopack.
            </p>
            <br />
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center ">
              2. Hydration Error Enhancements
            </h1>
            <p>
              Next.js 15 provides detailed diagnostics for hydration errors,
              making debugging simpler. Hydration issues arise when there is a
              mismatch between server-rendered HTML and client-rendered DOM.
            </p>
            <p className="py-3">
              {" "}
              <span className="font-bold ">
                {" "}
                Example: Hydration Error Fix Suggestions Errors now come with:
              </span>
            </p>
            <li>The exact source of the mismatch. </li>
            <li>
              Suggestions for fixing issues like incorrect HTML nesting or text
              mismatches.
            </li>
            <br />
            <br />
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center ">
              3. Caching Updates
            </h1>
            <p>
              Caching in Next.js is essential for improving performance and
              reducing server load. The Next.js App Router was introduced with
              opinionated caching defaults, designed to provide optimal
              performance by default with the ability to opt out when necessary.
              In Next.js 15, the default behavior for caching fetch requests,
              GET Route Handlers, and the Client Router Cache has been updated.
              Previously, these were cached by default, but now they are
              uncached by default. If you prefer the old behavior, you can still
              opt into caching. Note that layouts and loading states will
              continue to be cached and reused during navigation.
            </p>
            <br />
            <li>
              By default, fetch requests, GET Route Handlers, and the Client
              Router Cache are no longer cached.
            </li>
            <li>Developers can opt-in to caching for specific scenarios.</li>
            <br />

            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              const nextConfig = &#123;
              <br />
              &nbsp;&nbsp;experimental: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;staleTimes: &#123; dynamic: 30 &#125;,
              <br />
              &nbsp;&nbsp;&#125;,
              <br />
              &#125;;
              <br />
              module.exports = nextConfig;
            </code>
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center">
              Create-next-app enhancement
            </h1>
            <p>
              Let&apos;s discuss the improvements in create-next-app. When you
              launch the app, it now has a new landing page and provides a
              prompt for choosing Turbopack when creating the Next app.
            </p>
            <br />
            <p>
              The Next.js 14 release introduced an incremental bundler called
              Turbopack, which is written in Rust and designed to optimize
              JavaScript and TypeScript. It has been integrated into Next.js to
              improve development performance.
            </p>
            <br />
            <p>
              In the Next.js 15 RC, when running the create-next-app command, a
              new prompt asks whether you would like to enable Turbopack for
              local development. The default setting is No.
            </p>
            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              ✔ Would you like to use Turbopack for next dev? … No / Yes
            </code>
            <br />
            <br />
            <p>The -turbo flag can be used to activate Turbopack.</p>
            <br />
            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              npx create-next-app@rc -turbo
            </code>
            <br />
            <br />
            <p>
              To simplify the process of getting started on a new project, a new
              -empty flag has been included in the CLI. This flag removes
              unnecessary files and styles, resulting in a minimal Hello world
              page.
            </p>
            <br />
            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              npx create-next-app@rc -empty
            </code>
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center">
              Improving the bundling of external libraries (stable)
            </h1>
            <p>
              Integrating external libraries can enhance an app&apos;s initial
              load performance. By default, the App Router bundles external
              libraries, but you can exclude particular libraries using the
              serverExternalPackages configuration option.
            </p>
            <br />
            <p>
              In the Pages Router, external libraries are not bundled by
              default. However, you can specify a list of libraries you wish to
              bundle through the transpilePackages option, which requires
              individual package specifications.
            </p>
            <br />
            <p>
              To streamline configurations across both the App and Pages
              routers, a new option named bundlePagesRouterDependencies was
              introduced. This setting will align with the App Router&apos;s
              default behavior of automatically bundling external libraries. The
              serverExternalPackages option remains available to exclude
              specific libraries as needed.
            </p>
            <br />
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center">
              Response execution with next/after (experimental)
            </h1>
            <p>
              When handling a user request, the server usually focuses on tasks
              directly related to generating the response. However, additional
              tasks like logging, analytics, or synchronizing with external
              systems often need to be performed.
            </p>
            <br />
            <p>
              These secondary tasks should ensure the user&apos;s response is
              timely. Deferring such tasks can be challenging because serverless
              functions typically stop execution as soon as the response is
              sent.
            </p>
            <br />
            <p>
              The after() API, currently experimental, addresses this issue by
              allowing you to schedule tasks to run after the response has been
              streamed. This enables secondary tasks to execute without blocking
              the primary response.
            </p>
            <br />
            <p>
              To enable this feature, add experimental.after to your
              next.config.js.
            </p>
            <br />
            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              const nextConfig = &#123;
              <br />
              &nbsp;&nbsp;experimental: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;after: true,
              <br />
              &nbsp;&nbsp;&#125;,
              <br />
              &#125;;
              <br />
              module.exports = nextConfig;
            </code>
            <br />
            <p>
              Then, import the function in Server Components, Server Actions,
              Route Handlers, or Middleware.
            </p>
            <br />
            <code className="inline-block bg-black text-green-500 rounded-md  py-2 lg:px-5 lg:py-3 w-full">
              import &#123; unstable_after as after &#125; from &apos;next/server&apos;;
            </code>
            <br />
            <br />
            <code className="inline-block bg-black text-green-500 rounded-md  py-2 lg:px-5 lg:py-3 w-full">
              export default function Layout(&#123; children &#125;) &#123;
              <br />
              &nbsp;&nbsp;// Secondary task.
              <br />
              &nbsp;&nbsp;after(() =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;....
              <br />
              &nbsp;&nbsp;&#125;);
              <br />
              <br />
              &nbsp;&nbsp;// Primary task.
              <br />
              &nbsp;&nbsp;return &lt;&gt;&#123;children&#125;&lt;/&gt;;
              <br />
              &#125;
            </code>
          </div>

          <div>
            <h1 className="font-bold text-[30px] py-3 text-[#254681] text-center">
              Partial Prerendering
            </h1>
            <p>
              Partial Prerendering, or PPR, was rolled out in Next.js 14. It is
              an optimization that blends static and dynamic rendering on the
              same page.
            </p>
            <br />
            <p>
              By default, Next.js uses static rendering unless dynamic functions
              like cookies(), headers(), or uncached data requests are used,
              which switch the entire route to dynamic rendering. With PPR, you
              can wrap dynamic UI components in a Suspense boundary. When a new
              request is made, Next.js immediately serves a static HTML shell
              and then renders and streams the dynamic parts within the same
              HTTP request.
            </p>
            <br />
            <p>
              To facilitate incremental adoption, we&apos;ve added an
              experimental_ppr route config option to enable PPR for specific
              Layouts and Pages. Refer to the following code example.
            </p>
            <br />
            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              import &#123; Suspense &#125; from &apos;react&apos;
              <br />
              import &#123; StaticComponent, DynamicComponent &#125; from
              &apos;@/app/ui&apos;
              <br />
              <br />
              export const experimental_ppr = true
              <br />
              <br />
              export default function Page() &#123;
              <br />
              &nbsp;&nbsp;return (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;StaticComponent /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense
              fallback=&#123;...&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DynamicComponent
              /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </code>
            <br />
            <br />
            <p>
              To use this new option, set the experimental.ppr config to
              incremental in your next.config.js file.
            </p>
            <br />
            <code className="inline-block bg-black text-green-500  py-2 lg:px-5 lg:py-3 w-full">
              const nextConfig = &#123;
              <br />
              &nbsp;&nbsp;experimental: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;ppr: &apos;incremental&apos;,
              <br />
              &nbsp;&nbsp;&#125;,
              <br />
              &#125;;
              <br />
              module.exports = nextConfig;
            </code>
            <br />
            <br />
            <p>
              Once all segments have PPR enabled, setting the ppr value to true
              will be safe, enabling it for the entire app and all future
              routes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
