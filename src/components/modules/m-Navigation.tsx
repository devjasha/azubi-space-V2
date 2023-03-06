const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4">
      <div className="text-xl uppercase font-bold">Azubi Space</div>
      <ul className="flex items-center justify-center">
        <li className="mr-3">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
