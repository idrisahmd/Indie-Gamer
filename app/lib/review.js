import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { body, title, date, image, slug };
}

export async function getReviewSlugs() {
  const slugs = await getSlugs();
  const res = [];
  for (const name of slugs) {
    const text = await getReview(name);
    res.push(text);
  }
  return res.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getSlugs() {
  const fileNames = await readdir("./content/reviews");
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.slice(0, -".md".length));
}

export async function getFeaturedReview() {
  const reviews = await getReviewSlugs();
  return reviews[0];
}
