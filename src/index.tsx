import { Composition, registerRoot } from 'remotion'
import { BlueberryAd } from './compositions/blueberry/BlueberryAd'
import { BlueberryCandyAd } from './compositions/candy/BlueberryCandyAd'

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Blueberry Restaurant — anuncio del restaurante */}
      <Composition
        id="BlueberryAd"
        component={BlueberryAd}
        durationInFrames={390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />

      {/* Blueberry Candy — oferta 2x1 suplemento visual */}
      <Composition
        id="BlueberryCandyAd"
        component={BlueberryCandyAd}
        durationInFrames={540}   // 18 segundos a 30fps
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  )
}

registerRoot(RemotionRoot)
