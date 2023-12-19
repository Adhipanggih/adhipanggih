const About = () => {
  return(
    <div className="lg:flex gap-8 justify-between tracking-wide" id="about">
      <div className="lg:w-3/4 lg:flex hidden justify-center">
        <div className="w-full h-96 bg-slate-400"></div>
      </div>
      <div className="lg:w-1/4">
        <span className="text-main text-6xl block">About</span>
        <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, non. Sint nam iste ipsam quasi, facere impedit odio incidunt voluptates dolor expedita sequi cum, unde eveniet esse suscipit. Libero tempora cupiditate ea, distinctio eveniet tempore eius sint voluptates corrupti laborum tenetur quasi molestiae, laudantium nobis adipisci optio ipsa animi nemo!</span>
      </div>
    </div>
  )
}

export default About