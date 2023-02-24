import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      <div className="grid grid-cols-3">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <Image
                src={post.image}
                className="rounded"
                alt={post.title}
                width={270}
                height={160}
              />
              <div className="w-full flex flex-col">
                <p>{post.title}</p>
              </div>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                {post.publishedAt}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
}
