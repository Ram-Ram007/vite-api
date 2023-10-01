const allDogs = [
    {
      id: 1,
      name: "Shapi",
    },
    {
      id: 2,
      name: "Armani",
    },
  ];
  
  const allCats = [
    {
      id: 1,
      name: "Moose",
    },
    {
      id: 2,
      name: "Haku",
    },
  ];
  
  const sayHello = () => {
    console.log("hello");
  };
  
  // export default allDogs;
  
  export const animals = {
    allDogs,
    allCats,
    sayHello,
  };