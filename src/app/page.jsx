"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LanguageCard from '@/components/LanguageCard';
import TeacherCards from '@/components/TeacherCards';
import Feedback from '@/components/FeedbackCard';
import { useState } from "react";
import { MessageSquare, Users, Award, Globe2, Video, BookOpen, Headphones, Brain } from 'lucide-react';



export default function Home() {
  const [activeForm, setActiveForm] = useState(1);

  const languages = [
    {
      language: "Español intermedio",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80",
      duration: "12 weeks",
      students: 2534,
      rating: 4.9,
      price: "$299",
      flag: "🇬🇧"
    },
    {
      language: "Español Avanzado",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80",
      duration: "10 weeks",
      students: 1856,
      rating: 4.8,
      price: "$279",
      flag: "🇪🇸"
    },
    {
      language: "Ruso avanzado",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80",
      duration: "16 weeks",
      students: 1243,
      rating: 4.9,
      price: "$349",
      flag: "🇯🇵"
    }
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />
      <img src="/bg2.jpg" className='fixed top-0 h-screen w-screen -z-20' alt="" />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>

        <div className="text-center p-10 md:py-5 md:px-5 rounded-[20px] absolute left-0 right-0 mx-auto bottom-[0px] md:bottom-[0px] md:left-auto md:right-auto  bg-[#FEAB5F] w-[85%] rounded-b-none md:w-[400px] h-auto">
          <h1 className="text-[20px] sm:text-[30px] font-bold text-gray-900 mb-6">
            NativoES
          </h1>
          <p className="text-[16px] text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-black text-[#ffffff] text-[16px] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#000000]  hover:text-[#FEAB5F]  transition-colors">
              Realizar Test
            </button>
          </div>
        </div>


        {/* <div className="max-w-7xl mx-auto">
          <div className="text-center pt-16 pb-12 bg-[#FEAB5F]">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NativoES
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FEAB5F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="bg-white text-[#FEAB5F] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#FEAB5F] hover:bg-blue-50 transition-colors">
                View Courses
              </button>
            </div>
          </div>




          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe2 className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12+</h3>
              <p className="text-gray-600">Languages</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">Native Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div> */}
      </section>

      <section id="languages" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Nuestro modo de trabajo</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4   gap-8">
            <div className="shadow border p-5 col-span-2">
              <h3 className="text-[20px] text-black font-medium">Plataformas interactivas</h3>
              <p className="text-gray-600 pb-5">Todas las sesiones de nuestros cursos en linea se llevan a cabo en nuestra plataformas interactiva</p>

              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
            <div className="shadow border p-5 ">
              <h3 className="text-[20px] text-black font-medium">Ejercicios divertidos</h3>
              <p className="text-gray-600 pb-5">Sin tareas aburridas, libros de texto, solo ejercicios y juegos divertidos.</p>

              <img src="/demo.jpg" className="w-full" alt="" />
              <img src="/demo.jpg" className="w-full" alt="" />


            </div>
            <div className=" p-5 ">
              <h3 className="text-[25px] text-black font-semibold">Mostrar como se trabajan</h3>
              <p className="text-gray-600 pb-5">Enseñar todas la herramientas en forma de capsulas con titulo pequeño, texto y una foto o video.</p>

              <button className="bg-[#FEAB5F] text-black px-4 py-2 rounded-md hover: transition-colors">
                Descubrir más
              </button>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
      {/* Languages Section */}
      <section id="servicios" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Cursos populares de idiomas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <LanguageCard key={index} {...language} />
            ))}
          </div>
        </div>
      </section>
      {/* Languages Section */}

      <TeacherCards></TeacherCards>

      {/* Methods Section */}
      <section id="methods" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-left">Nuestro metodo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#000000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-[#FEAB5F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Clases en vivo</h3>
              <p className="text-gray-600">Sesiones interactivas con hablantes nativos.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#000000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#FEAB5F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Materiales de estudio</h3>
              <p className="text-gray-600">Recursos y ejercicios completos.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#000000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-[#FEAB5F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Aprendizaje por audio</h3>
              <p className="text-gray-600">Práctica de escucha inmersiva</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#000000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-[#FEAB5F]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black text-black">Práctica inteligente              </h3>
              <p className="text-gray-600">Rutas de aprendizaje impulsadas por IA</p>
            </div>
          </div>
        </div>
      </section>
      <Feedback />
      <section id="methods" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>
        <div className="max-w-lg bg-gray-100 mx-auto p-6  rounded-xl shadow-lg">

          <div className="flex justify-between rounded-full mb-6 border border-black ">
            <button
              className={`px-4 py-2 rounded-full w-full  ${activeForm === 1 ? 'bg-[brown] text-white' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(1)}
            >
              Individual
            </button>
            <button
              className={`px-4 py-2 rounded-full  w-full ${activeForm === 2 ? 'bg-[brown] text-white' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(2)}
            >
              Pareja
            </button>
            <button
              className={`px-4 py-2 rounded-full w-full ${activeForm === 3 ? 'bg-[brown] text-white' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(3)}
            >
              Grupo
            </button>
          </div>

          {/* Formularios */}
          <div className="rounded-[20px] border border-black p-10">
            {activeForm === 1 && (
              <div className="form1">
                <h2 className="text-2xl mb-4 text-black">Individual</h2>
                <form className="space-y-4 md:grid md:grid-cols-2">
                  <div>
                    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
                      <ul className="space-y-4">
                        <li className="flex items-center space-x-4">
                          
                          <span className="text-lg font-medium">Grupo</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          
                          <span className="text-lg font-medium">Calendario</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          
                          <span className="text-lg font-medium">Pizarra</span>
                        </li>
                        <li className="flex items-center space-x-4">
                          
                          <span className="text-lg font-medium">Reloj</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className="w-full bg-[#FEAB5F] text-white py-2 rounded">
                      Enviar
                    </button>

                  </div>

                </form>
              </div>
            )}

            {activeForm === 2 && (
              <div className="form2">
                <h2 className="text-2xl mb-4 text-black">Pareja</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button type="submit" className="w-full bg-[#FEAB5F] text-white py-2 rounded">
                    Enviar
                  </button>
                </form>
              </div>
            )}

            {activeForm === 3 && (
              <div className="form3">
                <h2 className="text-2xl mb-4 text-black">Grupo</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Edad"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button type="submit" className="w-full bg-[#FEAB5F] text-white py-2 rounded">
                    Enviar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#FEAB5F] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Comienza hoy...
          </h2>
          <p className="text-xl text-[#363636] mb-8">
            Prueba nuestro test gratuito y descubre tu nivel.
          </p>
          <button className="bg-white text-[#000000] px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
            Realizar test
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contactos" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="  mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe2 className="h-8 w-8 text-[#FEAB5F]" />
              <span className="ml-2 text-xl font-bold text-white">NativoES</span>
            </div>
            <p className="text-sm">
              Potencia la comunicación global a través de la educación de idiomas por parte de expertos.            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Ruso</a></li>
              <li><a href="#" className="hover:text-white">Español</a></li>
              {/* <li><a href="#" className="hover:text-white">Japanese</a></li>
              <li><a href="#" className="hover:text-white">View All</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get language learning tips and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1"
              />
              <button className="bg-[#FEAB5F] text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 text-center text-sm flex justify-around w-full">
          <img src="/WhatsApp.png" className="h-[50px] md:h-[80px]" />
          <img src="/Telegram.png" className="h-[50px] md:h-[80px]" />
          <img src="/Youtube.png" className="h-[50px] md:h-[80px]" />
          <img src="/Instagram.png" className="h-[50px] md:h-[80px]" />
          <img src="/Tiktok.png" className="h-[50px] md:h-[80px]" />

        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-600 text-center text-sm">
          <p>&copy; 2024 NativoES. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
