import React from 'react';
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
        {/* eslint-disable-next-line */}
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.3617818219873!2d76.7244497144601!3d30.680095495220016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefc309419bbb%3A0xfc803fdbf553e8ed!2sKodegurus!5e0!3m2!1sen!2sin!4v1667020877342!5m2!1sen!2sin'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
    </div>
  )
}

export default Map
