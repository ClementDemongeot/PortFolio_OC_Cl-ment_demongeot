import Modale from "../modal/modal";
import DataModalProjets from "./../Data/DataModalProjets.json";
function CardProjet({ id, name, description, image }) {
  const project = DataModalProjets.find((project) => project.id === id);

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[350px] h-[350px]">
      <img src={image} alt={name} className="w-150 h-150" />
      <p className="text-neutral-700 text-center italic font-medium">
        {description}
      </p>
      <div className="flex gap-8 mt-2 justify-center">
        <Modale
          name={project.name}
          image={project.image}
          logo={project.logo}
          description={project.description}
          websiteLink={project.websiteLink}
          githubLink={project.githubLink}
        />
      </div>
    </div>
  );
}

export default CardProjet;
