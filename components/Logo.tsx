import Link from "next/link";
import Image from "next/image";
// Logo images live in /public (logo-symbol.png and logo-wordmark.png). Replace those files to change the logo.
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="SANVEX home">
      <Image src="/logo-symbol.png" alt="" width={407} height={381} className="h-9 w-auto" priority />
      <Image src="/logo-wordmark.png" alt="SANVEX" width={940} height={115} className="h-[15px] w-auto" priority />
    </Link>
  );
}
