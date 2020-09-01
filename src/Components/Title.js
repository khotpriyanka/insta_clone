import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip';

class Title extends Component
{
  render()
    {
      return (

      <div style={{}}>
        <div style={{ float: 'center' }}>
          <button data-tip="Room skipped for the day"  place="bottom" data-type="success">514</button>
          <ReactTooltip />
        </div>

        <div style={{ float: 'left' }}>
          <button data-tip="Room skipped for the day"  place="bottom" data-type="success">514</button>
          <ReactTooltip />
        </div>
       
        <div style={{ clear: 'both' }}></div>
        <div>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
    }
  }

  export default Title