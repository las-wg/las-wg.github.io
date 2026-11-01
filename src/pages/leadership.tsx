import Head from "next/head";
import Link from "next/link";
import LeadershipActivities from "@/components/LeadershipActivities";
import SiteHeader from "@/components/SiteHeader";

export default function Leadership() {
  return (
    <>
      <Head>
        <title>Leadership and activities | LAS-WG</title>
        <meta name="description" content="Meet the LAS-WG leadership and explore our proposed web-agent permissions specification, paper and tools." />
        <meta property="og:title" content="Leadership and activities | LAS-WG" />
        <meta property="og:description" content="Meet the LAS-WG leadership and explore our proposed web-agent permissions specification, paper and tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://las-wg.org/leadership" />
        <link rel="canonical" href="https://las-wg.org/leadership" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex min-h-screen flex-col bg-white">
        <div className="bg-gradient-to-r from-purple-100 via-teal-100 to-indigo-100 blur-3xl pointer-events-none absolute top-0 h-[150px] w-full" aria-hidden="true" />
        <SiteHeader currentPage="leadership" />
        <main className="relative mt-[60px] px-4 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto mb-6 max-w-[960px]">
            <Link href="/" className="text-primary underline underline-offset-4">← Back to home</Link>
          </div>
          <LeadershipActivities />
        </main>
        <footer className="relative mx-auto flex w-full max-w-[960px] flex-wrap justify-between gap-4 px-4 pb-10 text-sm text-gray-700">
          <Link href="/" className="transition-colors hover:text-primary">LAS-WG</Link>
          <div className="flex gap-5">
            <a href="https://github.com/las-wg" className="transition-colors hover:text-primary">Github</a>
            <a href="https://discord.gg/wmRSNHsRAh" className="transition-colors hover:text-primary">Discord</a>
          </div>
        </footer>
      </div>
    </>
  );
}
