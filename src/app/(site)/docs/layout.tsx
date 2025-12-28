import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { getAllPosts } from "@/app/libs/markdown";
import SidebarLink from "@/components/Docs/SidebarLink";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Docs Page | ${siteName}`,
  description: "This is Docs page for Go Next.js",
  // other metadata
};

export default function DocsLayout({ children }: PropsWithChildren) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container grid gap-x-8 gap-y-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:grid-cols-[25%_1fr] lg:px-0 lg:pt-32 lg:pb-24">
      <aside className="max-h-fit rounded-sm p-4 transition-all lg:sticky lg:top-24 dark:bg-dark">
        <ul className="space-y-2">
          {posts.map((post, key) => (
            <SidebarLink post={post} key={key} />
          ))}
        </ul>
      </aside>

      <main className="prose dark:prose-invert max-w-none rounded-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] dark:bg-dark">
        {children}
      </main>
    </div>
  );
}
