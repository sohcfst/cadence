import { keyframes, styled } from '~/styles/stitches.config';

const noiseAnimation = keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '10%': { transform: 'translate(-5%, -5%)' },
  '20%': { transform: 'translate(-10%, 5%)' },
  '30%': { transform: 'translate(5%, -10%)' },
  '40%': { transform: 'translate(-5%, 15%)' },
  '50%': { transform: 'translate(-10%,5%)' },
  '60%': { transform: 'translate(15%,0)' },
  '70%': { transform: 'translate(0,10%)' },
  '80%': { transform: 'translate(-15%,0)' },
  '90%': { transform: 'translate(10%, 5%)' },
  '100%': { transform: 'translate(5%, 0)' },
});

export const NoiseBackground = styled('div', {
  position: 'fixed',
  top: '-50%',
  left: '-50%',
  right: '-50%',
  bottom: '-50%',
  width: '200%',
  height: '200vh',
  background:
    "transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0",
  backgroundRepeat: 'repeat',
  animation: `${noiseAnimation} 1s infinite`,
  opacity: 0.7,
  zIndex: -1,
});
