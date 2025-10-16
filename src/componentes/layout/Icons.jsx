import './Icons.css';

function Icons({ onSelectTemplate }) {
  return (
    <div className='images-icons'>
      <img
        className="icons-container"
        id='bomdiape'
        src="./src/assets/icons/bomdiapeIcon.png"
        alt="bomdiaPE"
        onClick={() => onSelectTemplate('bomdiape')}
      />
      <img
        className="icons-container"
        id='ne1'
        src="./src/assets/icons/ne1Icon.png"
        alt="NE1"
        onClick={() => onSelectTemplate('ne1')}
      />
      <img
        className="icons-container"
        id='ne2'
        src="./src/assets/icons/ne2Icon.png"
        alt="NE2"
        onClick={() => onSelectTemplate('ne2')}
      />
    </div>
  );
}

export default Icons;
