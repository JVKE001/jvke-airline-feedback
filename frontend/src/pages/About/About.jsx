import React from "react";
import Layout from "../../components/layout/Layout";
import about1 from "../../assets/images/about1.jpg";

const About = () => {
  return (
    <Layout withSpacing>
      <h1 className="text-center text-3xl font-bold my-8">About Me</h1>

      <div className="px-8 leading-relaxed mb-8">
        {/* Image floated left with caption */}
        <figure className="float-left w-[350px] mr-6 mb-2">
          <img
            src={about1}
            alt="About"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-sm text-gray-500 italic text-center">
            My profile picture in 2025
          </figcaption>
        </figure>

        {/* Text flows around image */}
        <p className="text-[15px] md:text-[17px] text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error
          quod natus nulla maiores! Officia inventore aspernatur laboriosam
          mollitia velit cumque quos incidunt quis unde quae eaque minus
          veritatis obcaecati numquam tenetur, voluptates praesentium? Corrupti
          quo atque animi culpa harum quasi id qui earum maxime quas, autem
          consequuntur iste quis quae quos accusamus aut laudantium hic suscipit
          illo officiis? Placeat porro aliquam sint voluptatem beatae nesciunt
          soluta ipsum corrupti sunt fugiat eos, eligendi in recusandae
          voluptatibus ullam est cum quos tempora enim facere. Ducimus placeat
          corporis, eius non impedit ab perferendis illum maiores suscipit
          similique. Odit a quam esse blanditiis laboriosam, fuga vel cupiditate
          distinctio excepturi corrupti, quod eligendi quisquam ea! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Totam error quod natus
          nulla maiores! Officia inventore aspernatur laboriosam mollitia velit
          cumque quos incidunt quis unde quae eaque minus veritatis obcaecati
          numquam tenetur, voluptates praesentium? Corrupti quo atque animi
          culpa harum quasi id qui earum maxime quas, autem consequuntur iste
          quis quae quos accusamus aut laudantium hic suscipit illo officiis?
          Placeat porro aliquam sint voluptatem beatae nesciunt soluta ipsum
          corrupti sunt fugiat eos, eligendi in recusandae voluptatibus ullam
          est cum quos tempora enim facere. Ducimus placeat corporis, eius non
          impedit ab perferendis illum maiores suscipit similique. Odit a quam
          esse blanditiis laboriosam, fuga vel cupiditate distinctio excepturi
          corrupti, quod eligendi quisquam ea! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Totam error quod natus nulla maiores!
          Officia inventore aspernatur laboriosam mollitia velit cumque quos
          incidunt quis unde quae eaque minus veritatis obcaecati numquam
          tenetur, voluptates praesentium? Corrupti quo atque animi culpa harum
          quasi id qui earum maxime quas, autem consequuntur iste quis quae quos
          accusamus aut laudantium hic suscipit illo officiis? Placeat porro
          aliquam sint voluptatem beatae nesciunt soluta ipsum corrupti sunt
          fugiat eos, eligendi in recusandae voluptatibus ullam est cum quos
          tempora enim facere. Ducimus placeat corporis, eius non impedit ab
          perferendis illum maiores suscipit similique. Odit a quam esse
          blanditiis laboriosam, fuga vel cupiditate distinctio excepturi
          corrupti, quod eligendi quisquam ea!
        </p>
        <br />
        <p className="text-[15px] md:text-[17px] text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error
          quod natus nulla maiores! Officia inventore aspernatur laboriosam
          mollitia velit cumque quos incidunt quis unde quae eaque minus
          veritatis obcaecati numquam tenetur, voluptates praesentium? Corrupti
          quo atque animi culpa harum quasi id qui earum maxime quas, autem
          consequuntur iste quis quae quos accusamus aut laudantium hic suscipit
          illo officiis? Placeat porro aliquam sint voluptatem beatae nesciunt
          soluta ipsum corrupti sunt fugiat eos, eligendi in recusandae
          voluptatibus ullam est cum quos tempora enim facere. Ducimus placeat
          corporis, eius non impedit ab perferendis illum maiores suscipit
          similique. Odit a quam esse blanditiis laboriosam, fuga vel cupiditate
          distinctio excepturi corrupti, quod eligendi quisquam ea! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Totam error quod natus
          nulla maiores! Officia inventore aspernatur laboriosam mollitia velit
          cumque quos incidunt quis unde quae eaque minus veritatis obcaecati
          numquam tenetur, voluptates praesentium? Corrupti quo atque animi
          culpa harum quasi id qui earum maxime quas, autem consequuntur iste
          quis quae quos accusamus aut laudantium hic suscipit illo officiis?
          Placeat porro aliquam sint voluptatem beatae nesciunt soluta ipsum
          corrupti sunt fugiat eos, eligendi in recusandae voluptatibus ullam
          est cum quos tempora enim facere. Ducimus placeat corporis, eius non
          impedit ab perferendis illum maiores suscipit similique. Odit a quam
          esse blanditiis laboriosam, fuga vel cupiditate distinctio excepturi
          corrupti, quod eligendi quisquam ea! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Totam error quod natus nulla maiores!
          Officia inventore aspernatur laboriosam mollitia velit cumque quos
          incidunt quis unde quae eaque minus veritatis obcaecati numquam
          tenetur, voluptates praesentium? Corrupti quo atque animi culpa harum
          quasi id qui earum maxime quas, autem consequuntur iste quis quae quos
          accusamus aut laudantium hic suscipit illo officiis? Placeat porro
          aliquam sint voluptatem beatae nesciunt soluta ipsum corrupti sunt
          fugiat eos, eligendi in recusandae voluptatibus ullam est cum quos
          tempora enim facere. Ducimus placeat corporis, eius non impedit ab
          perferendis illum maiores suscipit similique. Odit a quam esse
          blanditiis laboriosam, fuga vel cupiditate distinctio excepturi
          corrupti, quod eligendi quisquam ea!
        </p>
      </div>
    </Layout>
  );
};

export default About;
