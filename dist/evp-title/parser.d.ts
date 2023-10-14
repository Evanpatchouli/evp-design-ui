import { Hintable } from "../utils";
export declare function parseTitle(title: string): string;
export declare function parseTitleToSlug(title: string): string;
export declare function slugify(text: string): string;
export declare function parseSize(size: Hintable<"mn" | "sm" | "md" | "lg" | "hg"> | number): string | number;
