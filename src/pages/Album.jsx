// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Album() {
//   const { slug } = useParams();
//   const [album, setAlbum] = useState(null);
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     async function load() {
//       // Get all public albums
//       const albums = await fetch("http://localhost:5000/albums/public")
//         .then(r => r.json());

//       const found = albums.find(a => a.slug === slug);
//       setAlbum(found);

//       if (!found) return;

//       // Get public photos of album
//       const images = await fetch(
//         `http://localhost:5000/upload/album/${found._id}`
//       ).then(r => r.json());

//       setPhotos(images);
//     }

//     load();
//   }, [slug]);

//   if (!album) return <div className="mt-20 text-center ">Loading...</div>;

//   return (
//     <div className="mt-28 px-6">
//       <h2 className="text-3xl text-center mb-10">{album.title}</h2>

//       <div className="columns-2 md:columns-3 lg:columns-4 [column-gap:1px]">
//         {photos.map(photo => (
//           <img
//             key={photo._id}
//             src={photo.url}
//             className="w-full block mb-[1px]"
//             loading="lazy"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Album() {
  const { slug } = useParams();

  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // Fetch albums
        const albums = await fetch("http://localhost:5000/albums/public")
          .then((r) => r.json());

        console.log("Slug:", slug);
        console.log("Albums:", albums);

        const found = albums.find((a) => a.slug === slug);
        setAlbum(found);

        // If album not found, stop here
        if (!found) return;

        // Fetch photos
        const images = await fetch(
          `http://localhost:5000/upload/album/${found._id}`
        ).then((r) => r.json());

        setPhotos(images);
      } catch (err) {
        console.error("Error loading album:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [slug]);

  // ✅ FULL SCREEN LOADING
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-xl">Loading Album...</h2>
      </div>
    );
  }

  // ❌ ALBUM NOT FOUND
  if (!album) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-xl">Album not found</h2>
      </div>
    );
  }

  return (
    <div className="mt-28 px-6">
      <h2 className="text-3xl text-center mb-10">{album.title}</h2>

      {photos.length === 0 ? (
        <p className="text-center">No photos found</p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 [column-gap:1px]">
          {photos.map((photo) => (
            <img
              key={photo._id}
              src={photo.url}
              className="w-full block mb-[1px]"
              loading="lazy"
              alt=""
            />
          ))}
        </div>
      )}
    </div>
  );
}