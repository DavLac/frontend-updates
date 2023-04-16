
import React from 'react';
import { Section } from "../../../element/section/Section";

export const Responsive = (props) => {
  return (
    <Section 
      title="Responsive CSS" 
      anchor="responsive-anchor"
      background={props.color} 
      description='Madia queries with images, flex and grid CSS'>
      <h4>Media query : image size change with screen width size</h4>
      <div className='media-query'></div>

      <h4>Flex</h4>
      <div className='flex-boxes'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>

      <h4>Grid CSS</h4>
      <div className='grid-boxes'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </Section>
  );
};
