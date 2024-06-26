function Apropos() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-9 w-full p-10 bg-gradient-to-b from-neutral-300 to-orange-100 relative"
      id="about"
    >
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-neutral-300 to-transparent blur-lg"></div>
      <div className="text-center text-white p-8 rounded w-full xl:w-full">
        <h2 className="text-neutral-700 text-4xl md:text-4xl font-bold text-center mb-4">
          About
        </h2>
        <p className="text-2xl text-neutral-500">
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
