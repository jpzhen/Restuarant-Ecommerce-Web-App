import React from 'react';
import './Information.css';
import { InfoDiv, MainBlock } from '../utils/HomeStyle';

const Map = () => ({
    iframe: function () {
      return {
        __html: this.props.iframe
      }
    },
  
    render: function() {
      return (
        <div>
          <div dangerouslySetInnerHTML={ this.iframe() } />
        </div>
      );
    }
  });
//   width="600" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"
const iframe = process.env.REACT_APP_GOOGLEMAP_IFRAME;

const Information = () => {
    return (
        <MainBlock>
            <h1 className="PageTitle"> Hours & Location </h1>
            <h3 className="Food-Type"> </h3>
            <table className="InformationTable">
                <tr className="orange">
                    <td> Monday - Tuesday</td>
                    <td> Monday - Tuesday</td>
                    <td> Monday - Tuesday</td>
                </tr>
                <tr>
                    <td> 11am - 10pm </td>
                    <td> 11am - 11pm </td>
                    <td> 11am - 10pm </td>
                </tr>
            </table>
            <InfoDiv>
                <Map iframe={iframe}></Map>
                <div className="InfoBlock"> 
                    <p className={"InfoP"} style={{color:"orange"}}> Shang Hai Restaurant </p>
                    <p className={"InfoP"}> 54 W Nob Hill Blvd </p>
                    <p className={"InfoP"}> Yakima, WA 98902</p>
                    <br/>
                    <p className={"InfoP"} style={{color:"#9f0e31"}}> (509) 457-5629 </p>
                </div>
            </InfoDiv>
        </MainBlock>
    )
}

export default Information;