import dwayneJohnson from "@/assets/dwaynejohnson.jpeg";
import floydMayweather from "@/assets/floydmayweather.jpeg";
import connorMcgreggor from "@/assets/connormcgregor.jpeg";
import Image from "next/image";

export const RadioButton = ({ value, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <label className="cursor-pointer">
        <input
          type="radio"
          className="peer sr-only"
          name="pricing"
          value="Dwayne Johnson"
          checked={value === "Dwayne Johnson"}
          onChange={onChange}
        />
        <div className="w-72 max-w-lg rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src={dwayneJohnson}
                  alt="this is my image"
                  className="justify-self-center object-cover rounded-full w-12 h-12 relative border border-gray-100 shadow-sm m-auto"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1 justify-evenly">
                <p className="text-sm font-semibold uppercase text-gray-500">
                  Dwayne Johnson
                </p>
                <p className="text-xs font-semibold text-gray-500">
                  Pro Wrestler
                </p>
              </div>
            </div>
          </div>
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="radio"
          className="peer sr-only"
          name="pricing"
          value="Floyd Mayweather"
          checked={value === "Floyd Mayweather"}
          onChange={onChange}
        />
        <div className="w-72 max-w-lg rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src={floydMayweather}
                  alt="this is my image"
                  className="justify-self-center object-cover rounded-full w-12 h-12 relative border border-gray-100 shadow-sm m-auto"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1 justify-evenly">
                <p className="text-sm font-semibold uppercase text-gray-500">
                  Floyd Mayweather
                </p>
                <p className="text-xs font-semibold text-gray-500">Pro Boxer</p>
              </div>
            </div>
          </div>
        </div>
      </label>
      <label className="cursor-pointer">
        <input
          type="radio"
          className="peer sr-only"
          name="pricing"
          value="Connor McGreggor"
          checked={value === "Connor McGreggor"}
          onChange={onChange}
        />
        <div className="w-72 max-w-lg rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src={connorMcgreggor}
                  alt="this is my image"
                  className="justify-self-center object-cover rounded-full w-12 h-12 relative border border-gray-100 shadow-sm m-auto"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1 justify-evenly">
                <p className="text-sm font-semibold uppercase text-gray-500">
                  Connor McGreggor
                </p>
                <p className="text-xs font-semibold text-gray-500">
                  Pro MMA Fighter
                </p>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};
