import Image from 'next/image';
import Link from 'next/link';

const RootPage = () => (
  <div className="flex flex-col items-center justify-around gap-12">
    <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] grid place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
      <Image
        alt="Advanced TypeScript for React Logo"
        className="relative rounded-full"
        height={240}
        priority
        src="/logo.png"
        width={240}
      />

      <h1 className="flex flex-col items-center gap-4">
        <span className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
          Advanced TypeScript
        </span>{' '}
        <span className="text-center text-lg text-primary sm:text-xl">
          For React Developers
        </span>
      </h1>
    </div>

    <div className="mb-32 grid gap-4 text-center xl:mb-0 xl:w-full xl:max-w-6xl xl:grid-cols-5 xl:gap-0 xl:text-left">
      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="/warm-up"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Warm-up{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Enhancing Components with Standard HTML Attribute Types
        </p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="/session-1"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Session 1{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Discriminated Union Types and Function Component Overload
        </p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="/session-2"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Session 2{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Advanced Component Typing Components
        </p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="/session-3"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Session 3{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Compound & Polymorphic Components
        </p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="/session-4"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Session 4{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          TypeScript Safety Tips for React Developers
        </p>
      </Link>
    </div>
  </div>
);

export default RootPage;
