import uuid
from gtts import gTTS

TMP_DIR = '/data/sleep-learner/'

class TextToSpeech:
  """Utility class to invoke Google Text To Speech and save mp3 file into
  temp directory. This requires /data/sleep-learner to exist."""

  @staticmethod
  def generate_mp3(text):
    filename = str(uuid.uuid4()) + '.mp3'
    filename_full = TMP_DIR + filename

    tts = gTTS(text=text, lang='en')
    tts.save(filename_full)

    return filename
