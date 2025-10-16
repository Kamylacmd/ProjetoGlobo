import { useState } from 'react';
import Clipe from "./clipe";
import Icons from "./Icons";
import Title from "./Title";
import './layout.css';
import Generate from "./Generate";
import Videos from './Videos';

function Layout({ onGenerate }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [titleText, setTitleText] = useState('');

  const handleSelectTemplate = (id) => {
    // Mapeia o id para o nome do arquivo
    const templateMap = {
      bomdiape: "bomdiape.png",
      ne1: "ne1.png",
      ne2: "ne2.png",
      ge: "ge.png"
    };
    setSelectedTemplate(templateMap[id]);
  };

  return (
    <div className="box-one">
      <Videos/>
    <div className="box-two">
      <div className="box-three">
        <Icons onSelectTemplate={handleSelectTemplate} />
        <Clipe template={selectedTemplate} title={titleText} />
      </div>
      <Title onChange={setTitleText}/>
      <Generate onGenerate={onGenerate} />
    </div>
    </div>
  );
}

export default Layout;
