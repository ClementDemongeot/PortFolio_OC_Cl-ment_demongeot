import CardProjet from "../cardProjet/CardProjet";
import DataProjets from "./../Data/DataProjets.json";

function Projets() {
  const ohMyFoodProject = DataProjets.find((project) => project.id === 0);
  const kasaProject = DataProjets.find((project) => project.id === 1);
  const argentBankProject = DataProjets.find((project) => project.id === 2);

  return (
    <div
      className="w-full h-full flex flex-col items-center p-9 bg-orange-100 border-t border-gray-500 gap-12"
      id="projets"
    >
      <h2 className=" text-neutral-700 text-4xl font-bold ">Projets</h2>
      <div className="flex flex-wrap justify-center xl:justify-between  gap-9 w-full">
        <CardProjet
          id={ohMyFoodProject.id}
          name={ohMyFoodProject.name}
          description={ohMyFoodProject.description}
          image={"images/ohmyfood.png"}
          websiteLink={ohMyFoodProject.websiteLink}
          githubLink={ohMyFoodProject.githubLink}
        />

        <CardProjet
          id={kasaProject.id}
          name={kasaProject.name}
          description={kasaProject.description}
          image={"images/KASA_LOGO.png"}
          websiteLink={kasaProject.websiteLink}
          githubLink={kasaProject.githubLink}
        />
        <CardProjet
          id={argentBankProject.id}
          name={argentBankProject.name}
          description={argentBankProject.description}
          image={"images/argentBankLogo.png"}
          websiteLink={argentBankProject.websiteLink}
          githubLink={argentBankProject.githubLink}
        />
      </div>
    </div>
  );
}

export default Projets;
