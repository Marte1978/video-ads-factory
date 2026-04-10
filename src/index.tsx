import { Composition, registerRoot } from 'remotion'
import { BlueberryAd } from './compositions/blueberry/BlueberryAd'

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BlueberryAd"
        component={BlueberryAd}
        durationInFrames={390}   // ~13 segundos a 30fps (guión con pausas)
        fps={30}
        width={1080}
        height={1920}            // 9:16 — formato reels/TikTok/Stories
        defaultProps={{}}
      />
    </>
  )
}

registerRoot(RemotionRoot)
