import Main from "@/components/Main";
import Text from "@/components/Text";
import { blogPosts } from "./blogs.data";

export default function Blogs() {
  return (
    <Main className="pt-[10%]">
      <section className="max-w-[1400px] mx-auto">
        <Text variant="heading">Blogs</Text>

        <div className="grid grid-cols-2 gap-6">
          {blogPosts.map((blogPost) => (
            <a
              key={blogPost.url}
              href={blogPost.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article className="border p-6 flex flex-col gap-4 min-h-[220px] shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold text-foreground/80">
                  {blogPost.title}
                </h2>
                <p className="text-foreground/80">{blogPost.excerpt}</p>
                <span className="mt-auto text-sm font-semibold underline">
                  Read blog
                </span>
              </article>
            </a>
          ))}
        </div>
      </section>
    </Main>
  );
}
