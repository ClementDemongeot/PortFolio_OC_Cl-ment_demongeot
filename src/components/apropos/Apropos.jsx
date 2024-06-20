import ImgApropos from "./../../assets/images/DSC08931-1-2+FX.PNG";

function Apropos() {
  return (
    <div className="relative overflow-hidden" id="about">
      <img
        className="w-full h-[600px] object-cover "
        src={ImgApropos}
        alt="Image clem"
      />
      <div className="static sm:absolute top-8 left-10 bg-black bg-opacity-30 text-white p-6 rounded max-w-full w-full sm:w-100 md:w-[500px]">
        <h2 className="text-xl font-bold ">About</h2>
        <p className="text-xl ">
          Développeur passionné dans le domaine du web, actuellement spécialisé
          en développement Front-End. Je conçois et réalise des sites web du
          cahier des charges à la mise en ligne, en y intégrant une forte
          dimension artistique. En tant que musicien, l'art et la créativité
          sont au cœur de ma démarche. Cette sensibilité artistique se reflète
          dans mes projets web, où chaque site est conçu comme une œuvre unique,
          harmonisant fonctionnalités et esthétique pour offrir une expérience
          utilisateur enrichissante et mémorable.
        </p>
      </div>
    </div>
  );
}

export default Apropos;
