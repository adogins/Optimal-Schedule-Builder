import Filters from "@/components/Filters";
import { Navbar } from "@/components/Navbar";
import CourseDisplay from "@/components/courses/CourseDisplay";
import Link from "next/link";
import background from "../../../public/images/background.png";
import { PiMagicWandBold, PiMagicWandDuotone, PiSparkleBold } from "react-icons/pi";
interface Props {
  /**
   *  The current URL search params.
   */
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page({ searchParams }: Props) {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <Navbar />
      <main className="flex flex-col gap-8 px-4 pb-4 pt-8 md:px-12 lg:px-24">
        <CourseDisplay searchParams={searchParams} />
        <Filters />
        <section className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button className="flex items-center gap-3 self-end rounded-md border-2 border-red-800 bg-bulldog-red px-8 py-2.5 font-medium text-white transition-[background-color,border-color,box-shadow] disabled:cursor-not-allowed disabled:opacity-60 [&:not(:disabled)]:hover:border-red-950 [&:not(:disabled)]:hover:bg-red-800 [&:not(:disabled)]:hover:shadow-md text-lg">
            <PiSparkleBold />
            Generate Schedule
          </button>
        </section>
      </main>
    </div>
  );
}
