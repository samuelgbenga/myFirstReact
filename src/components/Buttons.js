

const Button = ({buttonText, onClick, color})=>{
  return(
    <button className='btn'
    style={{backgroundColor: color}}
    onClick={onClick}>{buttonText
    }</button>
    )
}
Button.defaultProps = {
  buttonText: 'anything'
}

export default Button;