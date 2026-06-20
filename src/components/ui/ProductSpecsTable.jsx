import {
  ultrasonicHumidifierSpecColumns,
  ultrasonicHumidifierSpecRows,
} from '../../data/ultrasonicHumidifierSpecs';

export const ProductSpecsTable = ({ title = 'Ultrasonic Humidifier', subtitle = '超声波加湿机 — Model Specifications' }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
      <div className="px-5 sm:px-8 py-5 sm:py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <h4 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100">
              {ultrasonicHumidifierSpecColumns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 sm:px-5 py-3.5 font-semibold text-slate-700 whitespace-nowrap ${
                    col.key === 'model'
                      ? 'sticky left-0 z-20 bg-slate-50 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.06)]'
                      : ''
                  }`}
                >
                  <span className="block">{col.label}</span>
                  <span className="block text-[10px] font-normal text-slate-400 mt-0.5">{col.labelZh}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ultrasonicHumidifierSpecRows.map((row, idx) => (
              <tr
                key={row.model}
                className={`group border-b border-slate-50 last:border-b-0 transition-colors hover:bg-[#00A29A]/5 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                }`}
              >
                {ultrasonicHumidifierSpecColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 sm:px-5 py-3.5 text-slate-600 whitespace-nowrap ${
                      col.key === 'model'
                        ? `font-bold text-[#00A29A] sticky left-0 z-10 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.06)] ${
                            idx % 2 === 0 ? 'bg-white group-hover:bg-[#00A29A]/5' : 'bg-slate-50/40 group-hover:bg-[#00A29A]/5'
                          }`
                        : col.key === 'control'
                          ? 'text-xs sm:text-sm'
                          : ''
                    }`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
