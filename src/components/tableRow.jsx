"use client";

import { useRouter } from "next/navigation";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { missionAtom } from "./Atom/missionAtom";
import toast from "react-hot-toast";

export const TableRow = ({ item }) => {
  const [dataMission, setMissionData] = useAtom(missionAtom);
  const router = useRouter();

  const handleClickEdit = () => {
    setMissionData(item);
    document.getElementById("form-pop-up").showModal();
  };

  async function handleDelete() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/QvRMiuwGcYG3", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    const data = await res.json();
    toast.success("Misi penagihan dibatalkan");
    router.refresh();
  }

  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>{item.jumlah_hutang}</td>
        <td>{item.jatuh_tempo}</td>
        <td>{item.debt_collector}</td>
        <td>
          <span className={item.status.toLowerCase()}>{item.status}</span>
        </td>
        <td className="flex justify-start gap-3">
          <div>
            <button onClick={handleClickEdit}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="hover:text-green-500 text-base cursor-pointer"
              />
            </button>
          </div>
          <div>
            <button onClick={handleDelete}>
              <FontAwesomeIcon
                icon={faTrash}
                className="hover:text-red-500 text-base cursor-pointer"
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
