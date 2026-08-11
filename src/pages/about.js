import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Github from '../components/Github';
import Findme from '../components/Findme';
import Reveal from '../components/Reveal';
import Image from 'next/image';
import { ImPointRight } from "react-icons/im";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiDjango,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiAmazonaws,
  SiMicrosoftazure,
  SiTailwindcss,
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiNginx,
  SiScikitlearn,
  SiVisualstudiocode,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFastapi,
  SiExpress,
  SiCelery,
  SiFlutter,
  SiGitlab,
  SiGithubactions,
} from "react-icons/si";
import { FaDocker, FaLinux } from "react-icons/fa";

const skills = [
  { name: "C++", Icon: CgCPlusPlus },
  { name: "JavaScript", Icon: DiJavascript1 },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: DiPython },
  { name: "React.js", Icon: DiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Node.js", Icon: DiNodejs },
  { name: "Express", Icon: SiExpress },
  { name: "Django", Icon: DiDjango },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Celery", Icon: SiCelery },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "scikit-learn", Icon: SiScikitlearn },
  { name: "Jupyter", Icon: SiJupyter },
  { name: "AWS", Icon: SiAmazonaws },
  { name: "Azure", Icon: SiMicrosoftazure },
  { name: "Nginx", Icon: SiNginx },
];

const tools = [
  { name: "Linux", Icon: FaLinux },
  { name: "VS Code", Icon: SiVisualstudiocode },
  { name: "Postman", Icon: SiPostman },
  { name: "Git", Icon: DiGit },
  { name: "Docker", Icon: FaDocker },
  { name: "GitLab CI/CD", Icon: SiGitlab },
  { name: "GitHub Actions", Icon: SiGithubactions },
];

const experiences = [
  {
    role: "Software Developer",
    company: "Time Charge N Go",
    period: "Jun 2025 - Present",
    location: "Selangor, Malaysia · Remote",
    points: [
      "Designed and developed a company-wide Document Management System with Django and Next.js — version control, automated approval chains and compliance workflows.",
      "Built and deployed an HR/Employee Management System that digitized core HR operations, with role-based access control and audit trails.",
      "Manage production deployment and DevOps — containerization, CI/CD pipelines and monitoring — and optimized database design for large-scale document storage.",
    ],
    stack: "Django REST Framework · Next.js · PostgreSQL · Docker",
  },
  {
    role: "Full-stack Developer",
    company: "Tirnu",
    period: "Jun 2024 - Jul 2025",
    location: "London, United Kingdom · Remote",
    points: [
      "Enhanced the TIRNU online banking app with business banking and crypto features, helping expand the user base by 25%.",
      "Integrated Ethereum, Solana and Tron with WalletConnect, RainbowKit, Crossmint and Fireblocks for secure digital asset management.",
      "Wired up Sumsub identity verification, Binance/Ramp exchange rails and SEPA/SWIFT banking APIs for domestic and international transactions.",
      "Deployed frontend and backend on AWS with GitLab CI/CD, Docker and Nginx.",
    ],
    stack: "React.js · TypeScript · Node.js · MongoDB · Redis · AWS",
  },
  {
    role: "AI / Software Developer — Freelance",
    company: "Fiverr & Upwork",
    period: "Sep 2023 - Apr 2024",
    location: "Remote",
    points: [
      "Trained a YOLOv8 model to count apples and grade their quality, served through an API deployed to Azure with GitHub Actions CI/CD.",
      "Built a real-estate data pipeline with FastAPI and MySQL, served through a Next.js frontend.",
      "Delivered a baseball betting app and Django REST backends for client projects.",
    ],
    stack: "Python · FastAPI · Django · Computer Vision · React.js",
  },
];

const certifications = [
  {
    title: "Microdegree™ in Artificial Intelligence",
    issuer: "Fusemachines",
    issued: "Issued Oct 2024",
    credential: "Credential ID 674d701d1f5dde62b389d066",
    href: "https://verifycertificates.fuseclassroom.com/?certificateId=674d701d1f5dde62b389d066",
    skills: "Artificial Intelligence · Artificial Neural Networks · Machine Learning · MLOps",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & Amazon Web Services",
    issued: "Issued May 2024",
    credential: "Credential ID J3U2M8G6NJ5W",
    href: "https://coursera.org/verify/J3U2M8G6NJ5W",
    skills: "Generative AI · Large Language Models · Prompt Engineering · Fine-Tuning · RLHF",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    issued: "Issued Feb 2024",
    credential: "Credential ID PX4WFUAEVR45",
    href: "https://coursera.org/verify/PX4WFUAEVR45",
    skills: "Deep Learning · Neural Networks · Backpropagation · Python",
  },
];

function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <section>
        <div className='text-gray-300 flex mx-20 w-80/100 pt-[9rem] pb-[2rem] text-left small:block 1100:mx-8 800:ml-[0rem] 800:mr-8'>
          <div className='pt-[80px] w-7/12 flex flex-col small:w-full'>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className='mx-auto'>
              Know Who <strong className="purple">I&apos;M</strong>
            </h1>
            <div className='text-gray-300 p-[20px] pl-[60px] text-left text-xl 1100:pr-[100px] small:pl-[60px] small:pr-[40px] small:text-lg'>
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Shubham Karn </span>
                from <span className="purple"> Kathmandu, Nepal.</span>
                <br /> I completed my <span className='purple'>Engineering </span>
                from <span className="purple"> IOE, Pulchowk Campus</span> (Tribhuvan University) and currently work as a Software Developer at <span className="purple">Time Charge N Go</span>, a subsidiary of TIME dotcom.
                <br />
                <br />
                Previously, I built business banking and crypto features for <span className="purple">Tirnu</span>, a UK-based fintech, and delivered AI and full-stack projects as a freelancer — from computer-vision pipelines to RAG-powered assistants.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>
              <div className='ml-[30px] p-[5px] mt-[10px]'>
                <div className='flex'>
                  <ImPointRight /> <span className='pl-[10px]'>Playing Games</span>
                </div>
              </div>
              <div className='ml-[30px] p-[5px] pt-[2px]'>
                <div className='flex'>
                  <ImPointRight /> <span className='pl-[10px]'>Watching Movies</span>
                </div>
              </div>
              <div className='ml-[30px] p-[5px] pt-[2px]'>
                <div className='flex'>
                  <ImPointRight /> <span className='pl-[10px]'>Travelling</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "1.25rem", paddingBottom: "20px" }} className='mx-auto text-quote 800:ml-[25px]'>
              &quot;Building digital products, brands and experience.&quot;
            </p>
          </div>
          <div className='w-5/12 pb-[20px] pt-[130px] small:w-full small:pt-[30px]'>
            <Image
              src="/about.png"
              alt="home pic"
              width={700}
              height={700}
            />
          </div>
        </div>

        <h1 style={{ fontSize: "2.3em" }} className='text-gray-300 pt-[50px] pb-[30px] text-center'>
          Professional <span className="purple"> Experience </span>
        </h1>

        <div className='text-gray-300 max-w-[900px] mx-auto px-[40px] 800:px-[25px]'>
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 120}>
              <div className='relative border-l-2 border-[#667eea55] pl-[35px] pb-[45px] ml-[10px] 800:pl-[25px]'>
                <span className='timeline-dot absolute left-[-9px] top-[6px] w-[16px] h-[16px] rounded-full bg-[#667eea] shadow-[0_0_12px_#667eea]'></span>
                <div className='flex justify-between items-baseline flex-wrap'>
                  <h2 className='text-2xl font-semibold purple'>{exp.role}</h2>
                  <span className='text-quote'>{exp.period}</span>
                </div>
                <p className='text-lg pb-[5px]'>{exp.company} · <span className='text-gray-400 text-base'>{exp.location}</span></p>
                <ul className='pt-[10px]'>
                  {exp.points.map((point, i) => (
                    <li key={i} className='flex pb-[8px]'>
                      <ImPointRight className='mt-[5px] shrink-0' />
                      <span className='pl-[10px]'>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className='pt-[8px] text-quote'>{exp.stack}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <h1 style={{ fontSize: "2.3em" }} className='text-gray-300 pt-[50px] pb-[20px] text-center'>
          Professional <span className="purple"> Skillset </span>
        </h1>

        <div className='flex flex-wrap justify-center text-white mx-20 800:mx-6'>
          {skills.map(({ name, Icon }, index) => (
            <Reveal key={name} delay={(index % 8) * 50} className='flex flex-col items-center'>
              <div className='tech-icons py-[30px] px-[70px] 800:py-[20px] 800:px-[30px]'>
                <Icon />
              </div>
              <span className='text-gray-300 text-sm pb-[15px]'>{name}</span>
            </Reveal>
          ))}
        </div>

        <h1 style={{ fontSize: "2.3em" }} className='text-gray-300 pt-[50px] pb-[20px] text-center'>
          <span className="purple"> Tools </span> I Use
        </h1>

        <div className='flex flex-wrap justify-center text-white mx-20 800:mx-6'>
          {tools.map(({ name, Icon }, index) => (
            <Reveal key={name} delay={(index % 8) * 50} className='flex flex-col items-center'>
              <div className='tech-icons py-[30px] px-[70px] 800:py-[20px] 800:px-[30px]'>
                <Icon />
              </div>
              <span className='text-gray-300 text-sm pb-[15px]'>{name}</span>
            </Reveal>
          ))}
        </div>

        <h1 style={{ fontSize: "2.3em" }} className='text-gray-300 pt-[50px] pb-[30px] text-center'>
          Licenses & <span className="purple"> Certifications </span>
        </h1>

        <div className='flex flex-wrap justify-center gap-[25px] mx-10 800:mx-6'>
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 120} className='w-[370px] max-w-full'>
              <div className='project-card-view h-full p-[30px] text-center text-gray-300'>
                <h2 className='text-xl font-semibold purple pb-[10px]'>{cert.title}</h2>
                <p className='text-lg pb-[5px]'>{cert.issuer}</p>
                <p className='pb-[5px]'>{cert.issued}</p>
                <p className='text-gray-400 text-sm pb-[15px]'>{cert.credential}</p>
                <p className='text-quote pb-[15px]'>{cert.skills}</p>
                {cert.href && (
                  <Link
                    href={cert.href}
                    target="_blank"
                    className='purple underline underline-offset-4 text-sm'>
                    Verify credential
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Github />
        <Findme />
      </section>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default About;
