import './vinyl-shelf.scss'

const VinylShelf = () => {

  return (
    <div className='vinyl-shelf'>
      <h1 className='vinyl-shelf-title'>Estante de vinils</h1>

      <div className='vinyl-shelf-bookcase vinyl-shelf-space_one' />
      <div className='vinyl-shelf-bookcase vinyl-shelf-space_two' />
    </div>
  );
}

export default VinylShelf