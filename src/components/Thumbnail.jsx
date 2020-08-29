import React from "react";
import ThumbnailImage from './ThumbnailImage'

function ThumbnailGallery() {
  return (
    <div>
      <section className="page-section bg-light">
        <div className="container-fluid">
            <ThumbnailImage />
          </div>
      </section>
    </div>
  );
}

export default ThumbnailGallery;
