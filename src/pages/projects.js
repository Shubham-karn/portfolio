import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Findme from '../components/Findme';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const projects = [
  {
    title: "Fragebank — Exam Prep",
    img: "/fragebank.svg",
    width: 500,
    height: 300,
    desc: "A full-stack exam-prep platform — timed MCQ tests with autosave, solution review, performance tracking and role-based access with JWT and passkey (WebAuthn) auth. Ships as a Next.js web app, an Express API and a Flutter app for students.",
    tech: ["Next.js", "Redux Toolkit", "Node.js", "Express", "MongoDB", "WebAuthn", "Flutter"],
  },
  {
    title: "Nepshala — EdTech Platform",
    img: "/nepshala.svg",
    width: 500,
    height: 300,
    desc: "An EdTech platform where students access personalized learning materials, stream video lessons via Cloudflare Stream, download notes and take model tests with progress insights. Fully containerized and served behind Nginx.",
    tech: ["Django", "PostgreSQL", "Next.js", "Docker", "Nginx", "JWT"],
  },
  {
    title: "MyPocketLawyer — Legal Aid AI",
    img: "/mypocketlawyer.svg",
    width: 500,
    height: 300,
    desc: "An AI-powered legal aid assistant for Nepali law — a RAG pipeline over the Constitution, Penal Code and 10+ acts, with query rewriting, vector retrieval and generated answers that cite the exact articles and clauses.",
    tech: ["Python", "FastAPI", "Gemini", "ChromaDB", "RAG", "React"],
  },
  {
    title: "Travya — AI Travel Companion",
    img: "/travya.svg",
    width: 500,
    height: 300,
    desc: "An agentic AI travel companion — a multi-agent system that plans intelligent itineraries, parses destinations onto real-time interactive maps and books trips through a conversational AI assistant.",
    tech: ["Python", "FastAPI", "Multi-Agent AI", "React", "TypeScript"],
  },
  {
    title: "Apple Detector — Computer Vision",
    img: "/apple-detector.svg",
    width: 500,
    height: 300,
    desc: "A computer-vision service that counts apples in a crate, grades them by colour and rejects rotten ones — a fine-tuned YOLO detector paired with a ResNet-18 spot classifier, served over an API and deployed with CI/CD.",
    tech: ["Python", "PyTorch", "YOLO", "ResNet-18", "FastAPI", "Docker"],
  },
  {
    title: "Portfolio",
    img: "/portfolio.png",
    width: 500,
    height: 500,
    desc: "Discover my portfolio — crafted with Next.js and Tailwind CSS. Seamless, stylish, and showcasing innovative projects. Welcome to my digital space!",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
];

const rows = [projects.slice(0, 3), projects.slice(3, 6)];

function Projects() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <section>
        <div className='text-gray-300 pt-[9rem] pb-[2rem] text-center'>
            <h1 style={{ fontSize: "2.4em" }}>
                My Recent <span className='purple'> Works </span>
            </h1>
            <div className='pt-[5px]'>
                Here are a few projects I&apos;ve worked on recently
            </div>
        </div>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='text-gray-300 flex items-stretch justify-evenly mx-[100px] py-[25px] 800:block 800:w-[70vw] 800:mx-auto mob:w-full mob:mr-[10px]'>
            {row.map((project) => (
              <div key={project.title} className='project-card-view mx-[25px] flex-1 800:mb-[40px]'>
                <Image src={project.img} width={project.width} height={project.height} alt={project.title} className='p-[25px]' />
                <div className='p-[30px] pt-[10px]'>
                    <h1 style={{ fontSize: "1.5em", paddingBottom: "10px" }} className='purple text-center'>{project.title}</h1>
                    <p className='pb-[15px]'>{project.desc}</p>
                    <div className='flex flex-wrap justify-center pb-[5px]'>
                      {project.tech.map((tech) => (
                        <span key={tech} className='tech-chip'>{tech}</span>
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        ))}

    <Findme />
    </section>
    <ScrollTop />
    <Footer />
    </>
  );
}

export default Projects;
