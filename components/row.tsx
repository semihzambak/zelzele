import { cx } from "@/lib/utils";
import { Item } from "@/lib/types";
import store from "@/stores/list";

interface Props {
  item: Item;
}

export default function Row({ item }: Props) {
  const { setFilter, filter } = store();

  const styleContainer = {
    "1": "from-zinc-100 dark:from-zinc-800 bg-gradient-to-l text-zinc-900 dark:text-zinc-100", // 1-1,9
    "2": "from-zinc-100 dark:from-zinc-800 bg-gradient-to-l text-zinc-900 dark:text-zinc-100", // 2-2,9
    "3": "from-zinc-100 dark:from-zinc-800 bg-gradient-to-l text-zinc-900 dark:text-zinc-100", // 3-3,9
    "4": "from-orange-100 dark:from-orange-600 bg-gradient-to-l text-orange-900 dark:text-orange-200", // 4-4,9
    "5": "from-pink-100 dark:from-pink-600 bg-gradient-to-l text-pink-900 dark:text-pink-200", // 5-5,9
    "6": "from-red-100 dark:from-red-600 bg-gradient-to-l text-red-900 dark:text-red-200", // 6-6,9
    "7": "from-red-100 dark:from-red-600 bg-gradient-to-l text-red-900 dark:text-red-200", // 7+
  };

  return (
    <div className="pt-1">
      <div
        onClick={() => {
          setFilter({
            ...filter,
            city: filter.city ? null : (item.province || item.location),
          });
        }}
        className={cx(
          "p-4 md:p-5 cursor-pointer",
          styleContainer[item.magnitudeFloor as keyof typeof styleContainer]
        )}
      >
        <div className="mx-auto flex max-w-screen-md items-baseline gap-4 md:gap-5">
          {/**/}

          {/* magnitude */}
          <div className="rounded-xl bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 px-2 py-1">
            <span className="text-xl font-bold tabular-nums md:text-2xl">
              {Number(item.magnitude).toFixed(1)}
            </span>
          </div>

          {/* body */}
          <div className="flex flex-col">
            {/**/}

            {/* province */}
            <h3
              className="text-xl font-bold md:text-2xl"
            >
              {item.province || item.location}
            </h3>

            {/* district */}
            <h5 className="text-xl opacity-60">{item.district || "-"}</h5>

            {/* meta */}
            <div className="flex items-center gap-1 opacity-60 md:mt-0.5">
              <span>{item.depth} km</span>
              <span className="opacity-40">•</span>
              <time dateTime={item.date}>
                {item.dateTimeObj.toFormat("HH:mm")}
              </time>
              <span className="opacity-40">•</span>
              <span>{item.dateTimeObj.toRelative()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
