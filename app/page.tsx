import Image from "next/image";
import download from '../public/download2.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Image 
      src ={download}
       alt="download"
       
          placeholder='blur' />
       
       <h1>Shoaib Ahmad</h1>
       <p>
       Hello! I'm a dedicated student pursuing an Associate Degree Program (ADP) in Computer Science at Aspire Group of College. With a strong passion for technology and a solid foundation in computer science, I've developed technical skills that include programming, web development, and problem-solving. I am enthusiastic about learning and growing in the tech field and eager to apply my knowledge to real-world projects.</p>
    </main>
  );
}
