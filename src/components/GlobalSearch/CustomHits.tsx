import Image from "next/image";
import Link from "next/link";

function CustomHits(props: any) {
  const { hit, setSearchModalOpen } = props;

  return (
    <div className="border-stroke border-t bg-black first-of-type:border-0 dark:border-strokedark">
      <div className="bg-white px-[22px] py-3.5 duration-300 hover:bg-[#F9FAFB] dark:bg-black dark:hover:bg-slate-800">
        <Link
          onClick={() => setSearchModalOpen(false)}
          href={hit?.objectID || hit?.url}
          className="grid grid-cols-[auto_1fr] items-center gap-4"
        >
          {hit?.imageURL && (
            <div className="relative h-[60px] w-[106px] shrink-0 overflow-hidden rounded-lg">
              <Image
                className="object-cover object-center"
                src={hit.imageURL}
                alt={hit.title + ""}
                fill
                quality={100}
              />
            </div>
          )}

          <div>
            <h3 className="line-clamp-1 font-medium text-base text-black dark:text-gray-400">
              {hit.title}
            </h3>

            <div className="line-clamp-1 text-dark-text text-sm">{hit.url}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default CustomHits;
