import React from 'react'
import ThumbnailHeader from './ThumbnailHeader.jsx'
import ThumbnailContent from './ThumbnailContent.jsx'
import lactatopfoods, {vegfoodsrowone,vegfoodsrowtwo,nonvegfoodsrowone,nonvegfoodsrowtwo,instantmilkrowone,instantmilkrowtwo,mustincrowone,mustincrowtwo
  ,gudhealthrowone,gudhealthrowtwo,fruitrowone,seedrowone,seedrowtwo} from './Data.jsx'

function ThumbnailImage()
{
    return(
      <div>
        <hr  className="mt-2 mb-5"/>
         <h2>LACTATION BEST FOODS</h2>
         <hr className="mt-2 mb-5" />
        <ThumbnailHeader content="Top 5 foods for milk secretion"/>          
        <hr  className="mt-2 mb-5" />
        <ThumbnailContent content={lactatopfoods}/> 
        <div></div>           
        <hr  className="mt-2 mb-5"/>      
        <ThumbnailHeader content="Instant milk-production foods"/>          
        <hr className="mt-2 mb-5"/>
        <ThumbnailContent content={instantmilkrowone}/>
        <ThumbnailContent content={instantmilkrowtwo}/>
        <hr  className="mt-2 mb-5"/>
        <ThumbnailHeader content="Must-include foods during breastfeeding"/>  
        <ThumbnailContent content={mustincrowone}/>           
        <ThumbnailContent content={mustincrowtwo}/>             
        <hr className="mt-2 mb-5"/>
        <ThumbnailHeader content="Vegetarian foods"/>          
        <hr  className="mt-2 mb-5"/>
        <ThumbnailContent content={vegfoodsrowone}/>
        <ThumbnailContent content={vegfoodsrowtwo}/>
        <hr  className="mt-2 mb-5"/>
        <ThumbnailHeader content="Non-Vegetarian foods"/>          
        <hr  className="mt-2 mb-5"/>
        <ThumbnailContent content={nonvegfoodsrowone}/>
        <ThumbnailContent content={nonvegfoodsrowtwo}/> 
        <hr  className="mt-2 mb-5"/>
        <ThumbnailHeader content="Other healthy foods during breastfeeding"/>
        <ThumbnailContent content={gudhealthrowone}/>
        <ThumbnailContent content={gudhealthrowtwo}/>
        <hr  className="mt-2 mb-5"/>
        <ThumbnailHeader content="  Fruits to increase milk secretion"/>          
        <hr className="mt-2 mb-5"/>
        <ThumbnailContent content={fruitrowone}/>  
        <hr  className="mt-2 mb-5"/>
        <ThumbnailHeader content="  Seeds to increase milk secretion"/>          
        <hr className="mt-2 mb-5"/>
        <ThumbnailContent content={seedrowone}/>
        <ThumbnailContent content={seedrowtwo}/>           
        </div> 
    );
}

export default ThumbnailImage;