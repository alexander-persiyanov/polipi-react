import React, { useState, useEffect } from 'react';

function SlideBar() {
  const [data, setData] = useState(0);

 
  useEffect(() => {
   alert("slide bar");
  },[]);

  return (
    <div>
     SlideBar
    
    </div>
  );
}
export default SlideBar;