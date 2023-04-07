import React, { useEffect, useRef, useState } from "react";

import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import { BsCameraFill, BsFillExclamationCircleFill } from "react-icons/bs";
import SearchStatus from "src/Types/SearchStatus";

type Props = {
  get: Array<string>;
  set: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function ImageSelector({ get, set }: Props) {
  const addNewField = () => {
    if (get.length === 0 || get[get.length - 1].length !== 0) {
      set([...get, ""]);
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const removeField = () => {
    const n = get.filter((f, i) => i !== get.length - 1);
    set(n);
    setCurrentIndex(get.length - 1);
  };

  return (
    <div>
      <label className={`block my-2 text-2xl font-medium text-primary px-1`}>
        Images
      </label>
      <div className="rounded-lg bg-white p-3 pt-2 border border-border">
        <div className={"flex flex-wrap items-center gap-4"}>
          {get.map((imageUrl, index) => (
            <div
              className={index == 0 ? "pt-1" : "pt-0"}
              key={index}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && get[index].length === 0) {
                  e.stopPropagation();
                  removeField();
                } else if (e.key === "Enter" && get[index].length !== 0) {
                  addNewField();
                }
              }}
            >
              <ImageSelectorField
                get={get}
                set={set}
                index={index}
                currentIndex={currentIndex}
              />
            </div>
          ))}

          <div className="flex flex-col items-center  justify-center w-40">
            <PrimaryButton
              onClick={addNewField}
              icon={<BsCameraFill />}
              bgClass="p-1 py-0 mt-1 w-24"
              text={"Add"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageSelectorField({
  get,
  set,
  index,
  currentIndex,
}: {
  get: Array<string>;
  set: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
  currentIndex: number;
}) {
  const [field, setField] = useState<string>(get[index]);

  const update = (newValue: string) => {
    setField(newValue);
    let old = get;
    old[index] = newValue;
    set(old);
  };

  const ref = React.useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState(SearchStatus.Success);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref, currentIndex]);

  return (
    <div>
      <input
        ref={ref}
        // autoFocus
        className="w-40 shadow my-1 ring-1 ring-gray-200 rounded-md p-1"
        type="text"
        placeholder={"Image URL"}
        value={field}
        onChange={(e) => update(e.target.value)}
      />

      <img
        className="mt-1 w-40 aspect-video rounded-lg object-cover shadow-md"
        alt="Image"
        src={field}
      />
    </div>
  );
}
