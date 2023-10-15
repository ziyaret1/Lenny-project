import './buttons.scss'

const Buttons = ({img, color, textColor, text, onClick} ) => {

  return (
<div className='buttons'>
        <button onClick={onClick} className='buttonStyle' style={{backgroundColor:`${color}`, color: `${textColor}`}}>
            {
                img ?  <icon className="buttonIcon">{img}</icon> : ""
            }
            {text}</button>
                </div>
  )
}

export default Buttons

