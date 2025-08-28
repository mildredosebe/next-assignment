import "@fontsource/inter";

export function Navigation() {
  return (
    <ul className=" flex justify-center items-center font-inter
      gap-4 sm:gap-8 lg:gap-12
      text-base sm:text-lg md:text-xl
  
    ">
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
      <li className="underline whitespace-nowrap">Sign Up</li>
    </ul>
  );
}