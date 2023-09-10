import './buttons.scss'

// eslint-disable-next-line react/prop-types
const Buttons = ({img, color, textColor, text}) => {

  return (
<div className='buttons'>
        <button className='buttonsStyle' style={{backgroundColor:`${color}`, color: `${textColor}`}}>
            {
                img ?  <icon className="buttonIcon">{img}</icon> : ""
            }
            {text}</button>
                </div>
  )
}

export default Buttons

//! add style icon
{/* <Buttons img={<AiTwotoneCreditCard style={{width:30, height:30}}/>} text="Add to Chart"/> */}