import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "post"]{title,slug,description,mainImage{asset->{_id,url},alt}}')
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Productos Pospan</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          nuestros productos son :
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {postData &&
            postData.map((post) => (
              <article key={post.slug.current}>
                <Link to={"/post/" + post.slug.current}>
                <table className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400">
      <tbody>
        <tr>
          <td className="w-1/3 " >
            <img     src={post.mainImage.asset.url}
                      alt={post.mainImage.alt} className="small-image flex items-center  " />
          </td>
          <td style={{ textAlign: "center" }}>
            <h2 className="cursive text-3xl lg:text-4xl mb-4">{post.title}</h2>
            <p className="text-justify">{post.description}</p>
            <button className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded absolute bottom-0 left-0 w-full">
          Ver
        </button>
          </td>
        </tr>
      </tbody>
    </table>
               
                </Link>
              </article>
            ))}
        </div>
        
      </section>
    </main>
  );
}
