import './buttons.scss'

const Buttons = ({img, color, textColor, text}) => {

  return (
<div className='buttons'>
        <button style={{backgroundColor:`${color}`, color: `${textColor}`}}>
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