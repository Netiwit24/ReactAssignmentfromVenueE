import React,{Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Grid = styled.div`
width:630px;
padding-top : 10px;
padding-bottom:50px;
display: grid;
justify-content: space-evenly;
grid-template-columns: 300px 300px;
grid-gap: 10px;
text-align: left;
`
const Font1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color:#4F4F4F;
  line-height: 3pt
`
const Font2 = styled.h2`
  font-size: 10px;
  font-weight: normal;
  line-height: 3pt
`
const Font3 = styled.h3`
  font-size: 10px;
  font-weight: normal;
  color:gray;
  line-height: 3pt
`

class App extends Component {

  componentDidMount() {
    fetch('http://demo1946494.mockable.io/spaces')
    .then(res => res.json())
    .then((data) => {
      this.props.setApi(data.page.entities)
    })
    .catch(console.log)
  }

  render () {
    return (
      <div >
        <Grid>
        {this.props.storeData.data.map((data, index) => {
          return <div key={index}>
            <img src={data.imageUrl} height="200" width="300"/>
            <Font1>{data.spaceName}</Font1>
            <Font2>at {data.venueName}</Font2>
            <Font3>฿{data.price} /ชั่วโมง</Font3>
            </div>
          })}
          </Grid>
      </div>
    )
  }
}

// Add reducer state to props
const mapStatetoProps = (state) => {
  return {
    storeData: state.storeData
  }
}

// Add action to props
const mapDispatchtoProps = (dispatch) => {
  return {
    setApi: (data) => {
      dispatch({
        type: 'setData',
        payload: data
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
