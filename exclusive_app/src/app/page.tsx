import "@fontsource/inter";
import SalesAds from "./shared-components/SalesAds";
import NavBar from "./shared-components/NavBar";
import { Footer } from "./shared-components/Footer";
import  CreateAccount  from "./signupPage/page";

import HomePage  from "./homePage/page";

export default function Home() {
  return (
    <>
    <SalesAds />
    <NavBar/>
    <CreateAccount/>
    <Footer/>
    </>
  );
}