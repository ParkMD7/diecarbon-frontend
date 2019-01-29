// dependencies
import React from 'react';
import { Container } from 'semantic-ui-react';

const CarbonFootprintInfo = () => {
  return (
    <div style={{'text-align': 'center'}}>
      <h1 style={{color: 'white', backgroundColor: 'black', 'fontFamily':'Montserrat'}}>How To Reduce Your <span style={{color:'red'}}>Carbon Footprint</span> And Why It Matters</h1>
      <Container textAlign='center'>
        <h3 style={{'backgroundColor': 'black', opacity:'0.75', color:'white', height:'290px', 'display':'inline-block', 'fontFamily':'Raleway'}}>
          {/* <span><h2>Scientific evidence for warming of the climate system is unequivocal.</h2></span>
            <span><h3>- Intergovernmental Panel on Climate Change</h3></span>
          <br /> */}
          The current warming trend is of particular significance because most of it is extremely likely (greater than 95 percent probability) to be the result of human activity since the mid-20th century and proceeding at a rate that is unprecedented over decades to millennia.
          <br /><br />
          The evidence for rapid climate change is compelling and manifests in the form of Global Temperature Rise, Warming Oceans, Shrinking Ice Sheets, Glacial Retreat, Sea Level Rise, and Extreme Weather.
          <br /><br />
          This website allows you to take actionable goals (on the right) to lower your <span style={{color:'red'}}>carbon footprint</span> and do your part to combat climate change.
        </h3>

      </Container>
      <br /><br />
    </div>
  );
}


export default CarbonFootprintInfo;
