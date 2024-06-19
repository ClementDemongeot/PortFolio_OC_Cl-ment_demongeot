import CardProjet from "../cardProjet/CardProjet";
import DataProjets from "./../Data/DataProjets.json";
import LogoOhMyFood from "./../../assets/images/ohmyfood.png";
import LogoKasa from "././../../assets/images/KASA_LOGO.png";
import LogoArgentBank from "./../../assets/images/argentBankLogo.png";
function Projets() {
  const ohMyFoodProject = DataProjets.find((project) => project.id === 0);
  const kasaProject = DataProjets.find((project) => project.id === 1);
  const argentBankProject = DataProjets.find((project) => project.id === 2);

  return (
    <div
      className="w-full h-[600px] flex flex-col items-center p-9 bg-orange-100 border-t border-gray-500 gap-6"
      id="projets"
    >
      <h2 className="text-2xl font-bold ">Projets</h2>
      <div className="flex flex-wrap justify-between  gap-9 w-full h-full">
        <CardProjet
          id={ohMyFoodProject.id}
          name={ohMyFoodProject.name}
          description={ohMyFoodProject.description}
          image={LogoOhMyFood}
        />
        <CardProjet
          id={kasaProject.id}
          name={kasaProject.name}
          description={kasaProject.description}
          image={LogoKasa}
        />
        <CardProjet
          id={argentBankProject.id}
          name={argentBankProject.name}
          description={argentBankProject.description}
          image={LogoArgentBank}
        />
      </div>
    </div>
  );
}

export default Projets;
