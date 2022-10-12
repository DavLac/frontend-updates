import React from 'react';

const darkStyle = {
  backgroundColor: 'rgb(200, 200, 200)'
}

const lightStyle = {
  backgroundColor: 'rgb(230, 230, 230)'
}

const onClickAnchor = () => {
  window.location.href = "#"; // go to the top
}

export const Section = (props) => {
  return (
    <div className="Section" style={(props.background === 'light') ? lightStyle : darkStyle}>
      {(props.title) 
        ? <h3 id={props.anchor}>{props.title} <button type="button" onClick={onClickAnchor}> ^^^ </button></h3> 
        : null
      }
      {(props.description) ? <p className='description'>{props.description}</p> : null}
      {(props.subDescription) ? <p className='subDescription'>{props.subDescription}</p> : null}
      <div style={{marginTop:'10px'}}>{props.children}</div>
    </div>
  );
};
