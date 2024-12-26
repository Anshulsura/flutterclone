import logo from "../assets/logo.png";

const Nav = () => {
  const navitem = [
    { itemName: "Multi-Platform", itemData: ["desktop", "web", "Mobile"] },
    { itemName: "Development", itemData: ["desktop", "web", "Mobile"] },
    { itemName: "Ecosystem", itemData: ["desktop", "web", "os"] },
  ];

  return (
    <nav className="nav_ mt-3">
      {/* Logo Section */}
      <div className="flex items-center gap-1 text-white    ">
        <img src={logo} alt="Logo" className="w-[30px]" />
        <h1 className="text-2xl font-semibold">Flutter</h1>
      </div>

      {/* Navigation Menu */}
      <ul className="flex gap-5">
        {navitem.map((item, index) => (
          <li key={index} className="relative group cursor-pointer text-white">
            {/* Main Menu Item */}
            <span className=" font-medium hoverItemNav px-5 py-2 rounded-full">{item.itemName}</span>


            <div className="absolute left-0 mt-4 w-40 p-4 rounded-md bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="text-white">
                {item.itemData.map((option, indexnum) => (
                  <li
                    key={indexnum}
                    className="px-4 text-black py-2 mb-2  transition-colors"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
