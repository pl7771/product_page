import { ultrasonicHumidifierSpecRows } from '../../data/ultrasonicHumidifierSpecs';
import { useLanguage } from '../../i18n/LanguageContext';

export const ProductSpecsTable = () => {
  const { dict } = useLanguage();
  const labels = dict.products.specTable;

  const columns = [
    { key: 'model', label: labels.model },
    { key: 'dimensions', label: labels.dimensions },
    { key: 'transformerPower', label: labels.transformerPower },
    { key: 'platePower', label: labels.platePower },
    { key: 'plates', label: labels.plates },
    { key: 'outlets', label: labels.outlets },
    { key: 'fans', label: labels.fans },
    { key: 'area', label: labels.area },
    { key: 'control', label: labels.control },
  ];

  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
      <div className="px-5 sm:px-8 py-5 sm:py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <h4 className="text-xl sm:text-2xl font-bold text-slate-900">{dict.products.specsTitle}</h4>
        <p className="text-sm text-slate-500 mt-1">{dict.products.specsSubtitle}</p>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 sm:px-5 py-3.5 font-semibold text-slate-700 whitespace-nowrap ${
                    col.key === 'model' ? 'sticky left-0 z-20 bg-slate-50 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.06)]' : ''
                  }`}
                >
                  {col.label}
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
                {columns.map((col) => (
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
                    {col.key === 'control' ? labels.controlValue : row[col.key]}
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
