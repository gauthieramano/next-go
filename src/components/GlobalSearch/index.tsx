import algoliasearch from "algoliasearch";
import Image from "next/image";
import { useEffect } from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import { integrations, messages } from "../../../integrations.config";
import CustomHits from "./CustomHits";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_PROJECT_ID as string;
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
const INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string;

const algoliaClient = algoliasearch(APP_ID, API_KEY);

type Props = {
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
};

const GlobalSearchModal = (props: Props) => {
  const { searchModalOpen, setSearchModalOpen } = props;

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event: any) {
      if (!event.target.closest(".modal-content")) {
        setSearchModalOpen(false);
      }
    }

    if (searchModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-99999! flex h-full min-h-screen w-full justify-center bg-[rgba(0,0,0,0.25)] px-4 py-[12vh] backdrop-blur-xs">
      <div className="modal-content relative w-full max-w-[600px] overflow-hidden rounded-xl bg-white dark:bg-dark">
        <InstantSearch
          // insights={false}
          searchClient={algoliaClient}
          indexName={INDEX}
        >
          <SearchBox
            placeholder="Search Entire Site | Products, Docs, Pages ..."
            classNames={{
              form: "sticky top-0 z-999 border-b border-stroke dark:border-white/20 dark:bg-black",
              input:
                "h-[74px] w-full rounded-t-lg pl-[60px] pr-5 text-dark outline-hidden dark:bg-dark dark:text-white",
              submitIcon:
                "absolute left-0 top-0 flex h-[74px] w-[60px] p-5 items-center justify-center fill-current",
              reset: "hidden",
              resetIcon: "hidden",
              loadingIndicator: "hidden",
              loadingIcon: "hidden",
            }}
          />

          <div className="flex justify-end gap-2 px-3 py-2">
            <span className="text-xs">Search powered by</span>
            <Image
              src="/images/algolia-logo-white.svg"
              alt="Algolia"
              className="hidden h-auto object-contain dark:block"
              width={80}
              height={18}
            />
            <Image
              src="/images/algolia-logo-blue.svg"
              alt="Algolia"
              className="block h-auto object-contain dark:hidden"
              width={80}
              height={18}
            />
          </div>

          <div className="max-h-full overflow-y-auto">
            {integrations?.isAlgoliaEnabled ? (
              <Hits
                hitComponent={(props) => (
                  <CustomHits
                    {...props}
                    setSearchModalOpen={setSearchModalOpen}
                  />
                )}
              />
            ) : (
              messages?.algolia
            )}
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
