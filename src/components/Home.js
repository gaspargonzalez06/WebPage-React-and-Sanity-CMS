import React  from "react";
import image from "../assets/img/logohome2.jpg"

export default function Home(){
    return (
        <main>
 
            <img src={image} alt="Monstera Leaves" className="absolute object-cover w-3/10 h-3/10"></img>
            {/* <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name ">Bienvenido a Pospan Panama</h1>
            </section> */}
        
        <div className="h-screen w-full bg-blue-200">
      <label>Here I am</label>

    </div>
        </main>
    )
}