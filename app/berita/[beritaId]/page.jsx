"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ButtonKembali from "@/app/components/button/ButtonKembali";

export default function BeritaList({ params }) {
  const { beritaId } = params;
  const [beritaData, setBeritaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeritaData = async () => {
      try {
        // Fetch data based on beritaId
        const res = await fetch(`https://dummyjson.com/posts/${beritaId}`);
        const data = await res.json();
        setBeritaData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBeritaData();

    // Clean up function
    return () => {
      // Perform any cleanup if necessary
    };
  }, [beritaId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen px-6 pt-16 xl:px-32">
      {beritaData ? (
        <>
          <h1>List Semua Berita {beritaId}</h1>
          <h2>Title: {beritaData.title}</h2>
          <p>Description: {beritaData.body}</p>
          <br></br>
          <Link href="http://localhost:3000/berita/">
            <ButtonKembali />
          </Link>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
