import Image from "next/image";
import Questions from "./components/questions";
export default function Home() {
  return (
    <>
    <div className="items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] mb-20">
    <h1 className="text-center text-2xl font-bold">Personality Test</h1>
<div className="text-center pt-10">
      <Questions />
</div>
    </div>
    </>
  );
}
