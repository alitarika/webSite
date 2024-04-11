import { useState, useEffect } from "react";
import { H2 } from "../ui/H2";
import { MacbookFrame } from "../ui/MacbookFrame";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  // const [ceza, setCeza] = useState(false);

  // useEffect(() => {
  //   const four = document.getElementById("four");

  //   const handleScroll = () => {
  //     const rec = four.getBoundingClientRect().top;
  //     if (rec > -200) {
  //       setCeza(true);
  //     } else {
  //       setCeza(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <section id="projects" className="max-w-7xl mx-auto w-[90vw] mb-24">
      <H2 className="mb-36 sm:mb-24 z-50">Projects</H2>
      <div className="flex flex-col-reverse sm:flex sm:flex-row w-full">
        <div className="flex flex-col sm:pr-6 -mt-52 sm:mt-0">
          <div>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor
            aperiam beatae, quisquam repudiandae similique voluptatem sunt.
            Rerum assumenda facere blanditiis minima modi magni quisquam nisi
            deleniti quos repudiandae soluta eligendi impedit a expedita
            architecto, corporis ducimus cupiditate iusto. Autem doloremque
            minus ea! Autem quibusdam consequatur omnis, modi non tempore
            architecto beatae suscipit alias nulla labore eaque dolores magnam
            vero mollitia excepturi vitae quasi laboriosam ipsam nostrum
            repellendus. Eius aliquid voluptate fugiat quod alias assumenda id,
            numquam non quis nulla qui sequi placeat soluta vitae dolor
            molestiae dolorum doloribus labore reprehenderit, accusantium
            tempore ut! Molestias veniam quasi velit iure eaque.
          </div>
          <div>
            2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            autem eaque eum asperiores tempore odit, minima nobis placeat at,
            eos iste dolor reprehenderit suscipit harum cupiditate error nam
            perferendis vitae.
          </div>
          <div className="h-[500px]">
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            aliquam sequi, eligendi placeat voluptate labore fugiat voluptates
            temporibus officia, delectus ducimus laboriosam ea esse eius?
          </div>
          <div id="four" className="h-[500px]">
            4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            obcaecati, dolorem non quae aperiam eum molestiae repellendus
            ratione officiis sapiente natus illo! Nesciunt ab odio quaerat
            perspiciatis enim animi ipsum eligendi quibusdam similique itaque.
            Earum dolorum, vero quisquam, et sequi iste veniam odio optio magnam
            quod quam laboriosam! Ipsam, cupiditate!
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            eveniet? Ad, aspernatur? Facere cupiditate consequuntur, facilis,
            amet obcaecati praesentium, inventore eligendi perspiciatis ducimus
            recusandae nostrum! Corrupti cupiditate harum cum facere voluptatum,
            quas eum similique laboriosam repellat perspiciatis perferendis quos
            architecto quam iusto iure praesentium est veniam officiis suscipit,
            temporibus natus minus. Culpa assumenda rerum pariatur ea ullam
            autem modi consequatur sunt id tempora, itaque similique quae animi
            iste ut, enim illo aspernatur at dolorem, delectus accusantium.
            Neque voluptatibus, incidunt quaerat quo vero tempora molestias quod
            quis fugit quidem, eum accusamus, pariatur consectetur temporibus!
            Ullam, nulla nisi itaque dolore error modi blanditiis non sapiente,
            beatae asperiores odio voluptatem quae fuga nam porro dolorum
            perferendis suscipit aperiam soluta, ab ratione ipsa laboriosam est?
            Ipsa quod reprehenderit odit dolor. Adipisci eum quaerat molestias
            reprehenderit ea magnam quasi nulla necessitatibus consequuntur
            repellat molestiae reiciendis quos sed, sapiente animi repudiandae
            similique corrupti accusamus porro eaque deserunt nihil distinctio
            rem odio? Perferendis odit ipsam enim eum dolore sed nulla, illum
            quo vero dicta quibusdam tenetur necessitatibus modi voluptatum
            dolorem at tempora voluptatem eius dolorum minima quisquam iure
            distinctio facilis? Obcaecati odio animi a laudantium velit natus
            minima voluptatibus facere sint, ipsum aliquid necessitatibus
            corrupti incidunt beatae doloremque praesentium optio mollitia iste
            officia temporibus harum. Ipsa minus error odio consequatur alias!
            Repellat laborum nisi repellendus veniam. Inventore, veniam ad iste,
            optio a iure adipisci sint obcaecati similique ea vel dicta?
            Sapiente quo, modi delectus ratione, ab repudiandae iste laudantium
            fugiat aliquam reprehenderit quis cum! Eveniet illum deserunt
            officiis odit molestiae, delectus eligendi quam eum, quibusdam
            aspernatur inventore facere ipsum eius harum cum modi minus
            voluptates beatae rerum iusto veniam expedita incidunt quo! Animi
            quasi aut voluptatum beatae dolor odit autem, adipisci aliquid
            reiciendis debitis fuga nisi corporis minus rem! Modi id quaerat
            similique debitis, enim dignissimos quo!
          </div>
          <ProjectCard
            flask
            sql
            html
            mongo
            css
            project={{ name: "movieApp" }}
          />

          {/* Here comes the texts! as map? */}
        </div>
        <div className="sticky top-48 mx-auto  w-full flex sm:block before:content-[''] before:w-full before:h-[280px] before:absolute before:bg-dark before:-top-48 sm:before:content-[] after:content-[''] sm:after:content-[] after:bg-gradient-to-b after:from-dark after:via-dark/60 after:to-transparent after:w-full after:h-24 after:absolute after:top-[88px]">
          <div className="sticky top-24 sm:left-0 sm:top-1/2 mx-auto">
            <MacbookFrame />
          </div>
        </div>
      </div>
    </section>
  );
};
