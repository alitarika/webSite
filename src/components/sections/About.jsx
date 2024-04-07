import { H2 } from "../ui/H2";
import { Skills } from "./Skills";
export const About = () => {
  return (
    <section id="about" className="text-light w-[90vw] max-w-7xl mx-auto">
      <H2>About me</H2>
      <div className="bg-dark w-full mb-24">
        <div className="px-2">
          <p>
            I am a full stack web developer based in Amsterdam with a passion
            for <span className="text-secondary">problem-solving</span> and
            coding. If I am not in front of the computer, I am probably reading,
            in the gym or grabbing coffee with a friend. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            pellentesque id nibh tortor. Donec pretium vulputate sapien nec
            sagittis <span className="text-secondary">aliquam</span> . Faucibus
            vitae aliquet nec ullamcorper sit amet. Sit amet aliquam id diam.
            Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Enim{" "}
            <span className="text-secondary">sit amet venenatis</span> urna
            cursus eget.
            <br />
            <br />
            Quis commodo odio aenean sed adipiscing diam donec adipiscing. Morbi
            leo urna molestie at elementum. Amet mattis vulputate enim nulla
            aliquet porttitor.
          </p>
        </div>
        <div>
          <h3 className="text-center mt-12 font-bold">Technologies I use</h3>
          <div className="stop mt-6 overflow-hidden py-4 whitespace-nowrap relative before:absolute before:top-0 before:left-0 before:w-[20vw] before:h-full before:z-10 before:bg-gradient-to-r before:from-dark before:via-dark/60 before:to-transparent after:absolute after:top-0 after:right-0 after:w-[20vw] after:h-full after:z-10 after:bg-gradient-to-l after:from-dark after:via-dark/60 after:to-transparent">
            <div className="animate-slide inline-block">
              <Skills />
            </div>
            <div className="animate-slide inline-block">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
