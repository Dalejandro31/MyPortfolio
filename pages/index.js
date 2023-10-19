import Head from "next/head"
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/avatar2.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import banner from '../public/banner.png'
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>David Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">DEVELOPBYDV</h1>
            <ul className="flex items-center">
              <li>
                <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl">
                  {darkMode ? (
                    <BsFillSunFill className="text-yellow-500" /> // Icono de sol cuando está en modo oscuro
                  ) : (
                    <BsFillMoonStarsFill className="text-black" /> // Icono de luna y estrellas cuando no está en modo oscuro
                    )}
                </button>
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" 
                  href="#"
                >
                    Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl font-mono ">
              David Orozco
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl2 font-mono dark:text-white">
              Systems enginner and FullStack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto font-mono dark:text-white">
            Im passionate about programming and tackling technical challenges. I enjoy exploring new technologies and seeking innovative solutions
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://github.com/Dalejandro31" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/david-alejandro-orozco-casas/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="cursor-pointer"/>
          </a>
              
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt=""/>
          </div>
        </section>
        <section> 
          <div className="dark:text-gray-300 mt-8">
            <h3 className="text-3xl py-1">Services i offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              my services
              <span className="text-teal-500">agencies</span>
              consulted for <span className="text-teal-500">startups</span>
              and collaborated wih talanted people to create digital for both
              business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              i am systems enginner and fullStack Develop with tech skills
              in javaScript, ReactJs, NodeJs, SQL, HTML and CSS
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center items-center flex flex-col shadow-lg p-10 rounded-xl my-10 bg-gradient-to-b from-teal-500 ">
              <Image src={design} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Bautiful designs</h3>
              <p className="py-2">
                Creating elegant desing suited for your needs. 
              </p>
              <h4 className="py-4 text-teal-600">Desing tools i use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">SQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>  
            </div>
            <div className="text-center items-center flex flex-col shadow-lg p-10 rounded-xl my-10 bg-gradient-to-b from-teal-500">
              <Image src={consulting} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Bautiful designs</h3>
              <p className="py-2">
                Creating elegant desing suited for your needs. 
              </p>
              <h4 className="py-4 text-teal-600">Desing tools i use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">SQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>  
            </div>
            <div className="text-center items-center flex flex-col shadow-lg p-10 rounded-xl my-10 bg-gradient-to-b from-teal-500" >
              <Image src={code} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Bautiful designs</h3>
              <p className="py-2">
                Creating elegant desing suited for your needs. 
              </p>
              <h4 className="py-4 text-teal-600">Desing tools i use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">SQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>  
            </div>
          </div>
          
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              my services
              <span className="text-teal-500">agencies</span>
              consulted for <span className="text-teal-500">startups</span>
              and collaborated wih talanted people to create digital for both
              business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              i am systems enginner and fullStack Develop with tech skills
              in javaScript, ReactJs, NodeJs, SQL, HTML and CSS
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basic-1/2 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" alt=""/>
            </div>
            <div className="basic-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" alt=""/>
            </div>
            <div className="basic-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" alt=""/>
            </div>
            <div className="basic-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" alt=""/>
            </div>
            <div className="basic-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" alt=""/>
            </div>
            <div className="basic-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" alt=""/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
