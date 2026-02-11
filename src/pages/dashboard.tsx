export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">Total Produk</p>
          <h2 className="text-3xl font-bold">12</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">Transaksi Hari Ini</p>
          <h2 className="text-3xl font-bold">5</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">Pendapatan</p>
          <h2 className="text-3xl font-bold">Rp 350.000</h2>
        </div>
      </div>
    </div>
  );
}
