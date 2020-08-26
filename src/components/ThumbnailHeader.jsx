import React from 'react'

function ThumbnailHeader(props)
{
    return(
        <div className="text-center">
            <h2 className="section-heading text-uppercase">              
              {props.content}
            </h2>
          </div>
    );
}

export default ThumbnailHeader;