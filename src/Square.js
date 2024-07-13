import React from 'react';

function Square (props) {
  return (
    <div onClick={props.onClick} style={{justifyContent:"center",alignItems:"center",border: "1px solid",height:"100px",width:"100%"}}className='square'>
       <h5>{props.value}</h5>
    </div>
  );
};

export default Square; 