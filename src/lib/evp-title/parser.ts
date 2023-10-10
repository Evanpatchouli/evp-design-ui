import { Hintable, Var } from "../utils";

export function parseTitle(title: string): string {
  return title.trim().replace(/\s+/g, " ");
}

export function parseTitleToSlug(title: string): string {
  return slugify(parseTitle(title));
}
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function parseSize(size: Hintable<"mn" | "sm" | "md" | "lg" | "hg"> | number): string | number {
  const sizeArray = ["mn", "sm", "md", "lg", "hg"];
  if (typeof size === "string") {
    if (sizeArray.includes(size)) {
      const $var = new Var(`--title-text-${size}`);
      if (sizeArray.includes(size)) {
        return $var.toString();
      }
    }
  }
  return size;
}
