import React, { useState, useEffect } from 'react';

export default function MovieApp(){

  const [state,setState] = useState({ isLoading : true });
  const { isLoading } = state;
  
  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading : false });
    },6000);
  })

  return(
    <div>
      {isLoading ? "Loading..." : "We are ready"};
    </div>
  );
}