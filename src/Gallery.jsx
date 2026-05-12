import HornedBeast from './HornedBeast';


function Gallery(props){
  return(<>
<HornedBeast key={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displayAsModal={props.displayAsModal}/>
<HornedBeast key={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displayAsModal={props.displayAsModal}/>
</>
  )
}


export default Gallery;