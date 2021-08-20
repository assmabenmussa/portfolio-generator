import React, { useState } from "react";
import PortfolioLightbox from "./components/PortfolioLightbox/PortfolioLightbox";
 
type IntroductionInterface = {
  name: string | undefined;
}

export const Introduction: React.FC<IntroductionInterface> = (props) => {
  const { name } = props;
  if(!name) return null;
  return (
    <>
    <div>My name is {name}</div>
    </> 
  )
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>("undefinedfsd");
  if (loading) return <div>Loading...</div>;
  return (
    <>
  <div style={{padding: "30px"}}>
    {/* <Introduction name={name}/> */}
    <PortfolioLightbox/>
  </div>
  </>
  );
};

export default App;