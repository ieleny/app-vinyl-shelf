import './vinyl-shelf.scss'

const VinylShelf = () => {

  return (
    <div className='vinyl-shelf'>
      <h1 className='vinyl-shelf-title'>Estante de vinils</h1>

      <div className='vinyl-shelf-bookcase-div'>
        <img
          className='vinyl-shelf-album'
          src='../src/assets/albuns/fleetwood_mac_rumours.webp'
        />

        <div className='vinyl-shelf-bookcase vinyl-shelf-space_one' />
      </div>

      <div className='vinyl-shelf-bookcase-div'>
        <img
          className='vinyl-shelf-album'
          src='../src/assets/albuns/fleetwood_mac_rumours.webp'
        />

        <div className='vinyl-shelf-bookcase vinyl-shelf-space_one' />
      </div>
    </div>
  );
}

export default VinylShelf