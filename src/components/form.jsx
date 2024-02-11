"use client";

import { Button } from "./button";
import { RadioButton } from "./radio-button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { missionAtom } from "./Atom/missionAtom";
import toast from "react-hot-toast";

export const Form = () => {
  const router = useRouter();
  const [dataMission, setMissionData] = useAtom(missionAtom);
  const [formMethod, setFormMethod] = useState("");
  const [idData, setIdData] = useState("");
  const [penghutang, setPenghutang] = useState("");
  const [jumlahHutang, setJumlahHutang] = useState("");
  const [jatuhTempo, setJatuhTempo] = useState("");
  const [debtCollector, setDebtCollector] = useState("");

  function resetState() {
    setIdData("");
    setPenghutang("");
    setJumlahHutang("");
    setJatuhTempo("");
    setDebtCollector("");
  }

  useEffect(() => {
    if (dataMission != null) {
      setFormMethod("edit-mode");
      setIdData(dataMission._id);
      setPenghutang(dataMission.name);
      setJumlahHutang(dataMission.jumlah_hutang);
      setJatuhTempo(dataMission.jatuh_tempo);
      setDebtCollector(dataMission.debt_collector);
    } else {
      setFormMethod("create-mode");
      resetState();
    }
  }, [dataMission]);

  const handleSubmitMode = (e) => {
    e.preventDefault();
    switch (formMethod) {
      case "create-mode":
        handleAddMission();
        break;
      case "edit-mode":
        handleUpdateMission();
        break;
      default:
        break;
    }
  };

  async function handleAddMission() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/QvRMiuwGcYG3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          name: penghutang,
          jumlah_hutang: jumlahHutang,
          jatuh_tempo: jatuhTempo,
          debt_collector: debtCollector,
          status: "On-going",
        },
      ]),
    });
    const data = await res.json();
    toast.success("Misi penagihan berhasil dibuat");
    router.refresh();
    resetState();
  }

  async function handleUpdateMission() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/QvRMiuwGcYG3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: idData,
        name: penghutang,
        jumlah_hutang: jumlahHutang,
        jatuh_tempo: jatuhTempo,
        debt_collector: debtCollector,
        status: "On-going",
      }),
    });
    const data = await res.json();
    toast.success("Misi penagihan berhasil diperbarui");
    router.refresh();
    resetState();
    setFormMethod("create-mode");
  }

  return (
    <div className="w-full">
      <form
        action=""
        method="dialog"
        className="w-full m-auto p-8 space-y-6"
        id="form-submit"
        onSubmit={handleSubmitMode}
      >
        <div>
          <label
            htmlFor="debitur"
            className="block text-md font-medium text-gray-700 mb-1"
          >
            Nama Penghutang
          </label>
          <input
            type="text"
            name="debitur"
            id=""
            value={penghutang}
            onChange={(e) => setPenghutang(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="jumlah"
            className="block text-md font-medium text-gray-700 mb-1"
          >
            Jumlah yang Dihutang
          </label>
          <input
            type="number"
            name="jumlah"
            id="jumlah"
            value={jumlahHutang}
            onChange={(e) => setJumlahHutang(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="jatuh-tempo"
            className="block text-md font-medium text-gray-700 mb-1"
          >
            Tanggal Jatuh Tempo
          </label>
          <input
            type="date"
            name="jatuh-tempo"
            id="jatuh-tempo"
            value={jatuhTempo}
            onChange={(e) => setJatuhTempo(e.target.value)}
          />
        </div>
        <div>
          <p className="block text-md font-medium text-gray-700 mb-1">
            Pilih Debt Collector
          </p>
          <RadioButton
            value={debtCollector}
            onChange={(e) => setDebtCollector(e.target.value)}
          />
        </div>
        <Button clickMethod="submit-mission" />
      </form>
    </div>
  );
};
