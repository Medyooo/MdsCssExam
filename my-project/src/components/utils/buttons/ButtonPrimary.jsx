
import PropTypes from 'prop-types'

const ButtonPrimary = ({text, textSize, textColor, py, px, bgColor, borderSize  }) => {
  return (
    
    <button className={`${borderSize} ${textSize} rounded ${bgColor} border-purple-primary  font-roboto-medium text-base ${textColor}  ${py} ${px}`} >
     {text}
    </button>
  )
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  py: PropTypes.string.isRequired,
  px: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderSize: PropTypes.string,
  textSize: PropTypes.string.isRequired




};
export default ButtonPrimary
