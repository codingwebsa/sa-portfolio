import Link from "next/link";
import Image from "next/image";
// import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import { ArrowIcon, GitHubIcon, TwitterIcon, ViewsIcon } from "@/icon";
import { name, about, bio, avatar } from "@/lib/info";

const Home = () => {
  let starCount = 6087,
    views = 1605257,
    tweetCount = 3789;
  return (
    <>
      <section>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt={name}
            className="rounded-full grayscale"
            src={avatar}
            placeholder="blur"
            width={100}
            draggable={false}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/leeerob"
              className="flex items-center gap-2"
            >
              <TwitterIcon />
              {`${tweetCount.toLocaleString()} tweets all time`}
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/leerob"
              className="flex items-center gap-2"
            >
              <GitHubIcon />
              {`${starCount.toLocaleString()} stars on this repo`}
            </a>
            <Link href="/blog" className="flex items-center gap-2">
              <ViewsIcon />
              {`${views.toLocaleString()} blog views all time`}
            </Link>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all gap-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/leeerob"
            >
              <ArrowIcon />
              <p className="h-7">follow me on twitter</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all gap-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://leerob.substack.com"
            >
              <ArrowIcon />
              <p className="h-7">get email updates</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
