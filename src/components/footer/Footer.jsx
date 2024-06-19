function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col w-full h-[200px] bg-orange-100 border-t border-gray-500">
      <p className="text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Clément Demongeot. Tous droits
        réservés.
      </p>
    </footer>
  );
}

export default Footer;
