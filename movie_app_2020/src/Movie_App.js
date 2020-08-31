import React, { useState } from 'react';

export default function MovieApp(){

  const [state,setState] = useState({ isLoading : true });

  return(
    <div>
      {state.isLoading ? "Loading..." : "We are ready"};
    </div>
  );
}