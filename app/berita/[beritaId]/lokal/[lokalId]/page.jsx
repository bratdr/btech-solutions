export default function BeritaLokal({ params }) {
  return (
    <>
      <div className="min-h-screen px-6 pt-16 xl:px-32">
        <h1>Berita Lokal {params.lokalId}</h1>
      </div>
    </>
  );
}
