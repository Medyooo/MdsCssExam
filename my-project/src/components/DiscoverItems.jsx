import PropTypes from 'prop-types'

const DiscoverItems = ({title, text}) => {
  return (
    <div className="flex flex-col  gap-4 w-[400px]">
      <h5 className="text-2xl text-black font-roboto-bold tracking-[0.75px]">{title}</h5>
      <p className='text-base font-roboto-medium text-black tracking-[0.45px] '>{text}</p>
    </div>
  )
}

DiscoverItems.propTypes = {
   title: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired
}
export default DiscoverItems
