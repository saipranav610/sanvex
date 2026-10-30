import { site } from "@/lib/site";
export default function sitemap() { return ["", "/privacy-policy", "/terms"].map((p) => ({ url: `${site.url}${p}` })); }
