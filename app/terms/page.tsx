import Link from "next/link";
export const metadata = { title: "Terms and Conditions | SANVEX" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <Link href="/" className="text-cyan hover:underline">← Back to home</Link>
      <h1 className="mt-6 font-display text-4xl font-bold">Terms and Conditions</h1>
      <p className="mt-4 rounded-xl border border-blue/40 bg-blue/10 p-4 text-sm">Draft content. Have this reviewed by a qualified professional before publishing.</p>
      <div className="mt-8 space-y-4 text-mute"><p>By using this website you agree to use it lawfully and not to interfere with its operation.</p><p>Website content is provided for general information and does not constitute a guarantee of any business result. Services are provided under a separate written agreement.</p><p>All content and branding on this site belong to SANVEX unless stated otherwise. We may update these terms at any time.</p></div>
    </main>
  );
}
