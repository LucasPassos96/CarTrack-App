import { useState } from "react";

export default function FilterBar() {

    const [selected, setSelected] = useState('rastreado');

  return (
    <section className=" p-4 px-12 ">
      <div className="mb-6 rounded-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-12">
            <span className="text-white font-medium pe-14">
                Lista
            </span>
            <div className="inline-flex items-center gap-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    value="rastreado"
                    checked={selected === "rastreado"}
                    onChange={() => setSelected("rastreado")}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 rounded-full border-3 border-[#0095e4] flex items-center justify-center peer-checked"></div>
                  <span className="ml-2 text-white text-sm">Rastreados</span>
                </label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    value="outros"
                    checked={selected === "outros"}
                    onChange={() => setSelected("outros")}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 rounded-full border-3 border-[#0095e4] flex items-center justify-center peer-checked"></div>
                  <span className="ml-2 text-white text-sm">Outros</span>
                </label>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Buscar por placa ou frota"
              className="px-3 py-2 rounded-lg bg-[#0D1117] border border-gray-600 text-white min-w-80"
            />
            <button className="bg-[--light-blue] text-white px-12 py-2 rounded-lg">
              Novo
            </button>
          </div>
      </div>
      <hr className="bg-[#002d44] opacity-1 px-12"/>
      
    </section>
    
  );
}
