import './vinyl-shelf.scss'

const VinylShelf = () => {

  return (
    <div className='vinyl-shelf'>
      <h1 className='vinyl-shelf-title'>Estante de vinils</h1>

      <div className='vinyl-shelf-bookcase-content'>
        <div className='vinyl-shelf-albums'>
          <button>
            <img
              className='vinyl-shelf-album-size'
              src='../src/assets/albuns/fleetwood_mac_rumours.webp'
            />
          </button>

          <button>
            <img
              className='vinyl-shelf-album-size'
              src='../src/assets/albuns/paramore-brand-new-eyes.jpeg'
            />
          </button>
        </div>

        <div className='vinyl-shelf-bookcase vinyl-shelf-space_one' />
      </div>

      <div className='vinyl-shelf-bookcase-content'>
        <img
          className='vinyl-shelf-album-size'
          src='../src/assets/albuns/paramore-after-laughter.jpg'
        />

        <div className='vinyl-shelf-bookcase vinyl-shelf-space_one' />
      </div>
    </div>
  );
}

export default VinylShelf