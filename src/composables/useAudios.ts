import correctAudio from '@/assets/audios/correct.mp3'
import incorrectAudio from '@/assets/audios/incorrect.mp3'

export function useAudios () {
  const correctSound = new Audio(correctAudio)
  const incorrectSound = new Audio(incorrectAudio)

  const playCorrectSound = () => {
    correctSound.play()
  }

  const playIncorrectSound = () => {
    incorrectSound.play()
  }

  return {
    playCorrectSound,
    playIncorrectSound
  }
}
