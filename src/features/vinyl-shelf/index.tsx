import './vinyl-shelf.scss'
import './vinyl-shelf-text.scss';

const VinylShelf = () => {

  return (
    <div className='vinyl-shelf'>
      <div className='wrapper'>
        <h1
          className='neon-text rotating-text'
          data-text='Ranking albuns favoritos'
        >
          Ranking albuns favoritos
        </h1>
      </div>

      <div className='vinyl-shelf-bookcase-content'>
        <div className='vinyl-shelf-albums'>
          <h4>1 - 5</h4>

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

        <div className='vinyl-shelf-bookcase' />
      </div>

      <div className='vinyl-shelf-bookcase-content'>
        <div className='vinyl-shelf-albums'>
          <h4>5 - 10</h4>

          <button>
            <img
              className='vinyl-shelf-album-size'
              src='../src/assets/albuns/paramore-after-laughter.jpg'
            />
          </button>

          <button>
            <img
              className='vinyl-shelf-album-size'
              src='../src/assets/albuns/billie-eilish-when-we-all-go-sleep.jpeg'
            />
          </button>
        </div>

        <div className='vinyl-shelf-bookcase' />
      </div>
    </div>
  );
}

export default VinylShelf