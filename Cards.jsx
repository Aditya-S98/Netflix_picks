import Card from './Card';
import Sdata from './Sdata';
import './index.css';

function Cards() {
   return(
      <>
         <h1 className='heading_style'>My top 5 Netflix picks for 2020: </h1>
         {Sdata.map((val) => {
            return(
               <Card
                  key={val.id}
                  img={val.img}
                  cat={val.cat}
                  sname={val.sname}
                  link={val.link}
               />
            );
         })}
      </>
   );
}

export default Cards;