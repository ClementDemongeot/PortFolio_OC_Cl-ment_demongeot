function CardProjet({ id, name, description, image }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[350px] h-[350px]">
      <img src={image} alt={name} className="w-150 h-150" />
      <p className="text-center italic font-light">{description}</p>
    </div>
  );
}

export default CardProjet;
