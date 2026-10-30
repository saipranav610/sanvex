import Link from "next/link";
export const metadata = { title: "Privacy Policy | SANVEX" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <Link href="/" className="text-cyan hover:underline">← Back to home</Link>
      <h1 className="mt-6 font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 rounded-xl border border-blue/40 bg-blue/10 p-4 text-sm">Draft content. Have this reviewed by a qualified professional before publishing.</p>
      <div className="mt-8 space-y-4 text-mute"><p>SANVEX collects the information you submit through our contact form (name, email, company, service interest, budget, and project details) only to respond to your enquiry.</p><p>We do not sell your personal information. We keep it only as long as needed to handle your enquiry. You can ask us to access or delete your data by contacting us using the details on our website.</p><p>This site may use third-party services (for example, hosting and email delivery) that process data on our behalf.</p></div>
    </main>
  );
}
