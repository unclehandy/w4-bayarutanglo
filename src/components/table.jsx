import { TableRow } from "@/components/tableRow";

export const Table = ({ data }) => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-xl mb-2 max-w-[1280px] m-auto">Piutangmu</h1>

        <div className="table-wrapper max-w-[1280px] max-h-[300px] m-auto">
          <table>
            <thead>
              <tr>
                <th>Penghutang</th>
                <th>Jumlah Hutang</th>
                <th>Jatuh Tempo</th>
                <th>Debt Collector</th>
                <th className="w-24">Status</th>
                <th className="w-20">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <TableRow key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
