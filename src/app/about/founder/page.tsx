import { redirect } from "next/navigation";

/** Legacy route — the founder is now a section of the consolidated About page. */
export default function FounderRedirect() {
  redirect("/about#our-founder");
}
