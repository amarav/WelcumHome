import React from 'react'
import AdSpace from './AdSpace.jsx'
import ThumbnailHeader from './ThumbnailHeader.jsx'
import ThumbnailContent from './ThumbnailContent.jsx'
import lactatopfoods, {vegfoodsrowone} from './Data.jsx'

function ThumbnailImage()
{
    return(
      <div>
        <ThumbnailHeader content="Top 5 foods to increase milk production"/>          
        <hr />
        <ThumbnailContent content={lactatopfoods}/> 
        <div></div>
        <ThumbnailHeader content="Vegetarian foods to increase milk production"/>          
        <hr />
        <ThumbnailContent content={vegfoodsrowone}/>
        </div>     
    );
}

export default ThumbnailImage;