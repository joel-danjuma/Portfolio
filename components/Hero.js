const Hero = () => {
  return (
    <div className='bg-black text-white bg-opacity-20'>
      <div className="flex justify-center py-5">
        <div className="w-96 h-96 rounded-lg bg-[url(../public/images/pic.jpeg)] bg-no-repeat bg-cover bg-center "/>
      </div>
        <h1 className="justify-center flex text-2xl font-bold py-5">Joel Danjuma &#128075;</h1>
        
        <h1 className='justify-center flex text-green-500'>About me</h1>
        <p className="justify-center text-justify px-10 py-5 flex text-lg">
          I am an experienced software developer who would be a perfect fit for a full-stack developer position. 
          My speciality is backend programming using languages and frameworks like Python, NodeJs, ExpressJs, and FastAPI. 
          I have also acquired experience in blockchain development, working with Apeworx, Hardhat, Moralis SDK, and Alchemy SDK for development and deployment of DAPPs.
          I'm skilled in JavaScript, HTML, CSS, React, NextJs, and tailwind CSS on the front end. 
          Consequently, I appreciate designing and developing engaging user interfaces for the front end.
          I am a versatile developer with expertise in both backend and frontend development, allowing me to work on different web development projects. 
          Also, I am always interested in learning new technologies and following business trends. I enjoy solving problems in a team environment, and I'm always eager to teach what I know to others.
          I consider myself to be a committed, detail-oriented full-stack developer who consistently works to advance my abilities and produce high-quality code. 
          I am very enthusiastic about my work and I look forward to joining a team where I can use my expertise to create cutting-edge web applications.
        </p>
        <div className='w-full flex justify-center py-5'>
          <button type='button' className='w-20 h-12 bg-green-500 rounded-lg '>
            <a href='https://github.com/joel-danjuma'>Projects</a>
          </button>
        </div>
    </div>
  );
}

export {Hero};