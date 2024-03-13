import Image from "next/image";
import podcastHighlight from "../../../public/explorePodcast.png";

export default function Highlight() {
  return (
    <section>
      <div className="pb-14">
        <div className="px-40 pt-28 w-fit m-auto">
          <Image src={podcastHighlight} alt="podcast highlight image" />
        </div>
        <div className="w-fit m-auto mt-2">
          <button className="bg-slate-800 border border-slate-800 py-1 px-4 rounded-3xl text-slate-200 flex place-items-center gap-1">
            <Image
              src="/upload-cloud(1).png"
              alt="upload cloud"
              width={15}
              height={10}
            />
            <span className="text-sm">Explore Podcasts</span>
          </button>
        </div>
      </div>
    </section>
  );
}
