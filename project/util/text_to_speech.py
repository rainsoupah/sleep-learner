import uuid
import os

GEN_CMD = 'pico2wave -l=en-US -w="{file}" "{text}"'
TMP_DIR = '/data/sleep-learner/'

class TextToSpeech:
  """Utility class to invoke text to speech program and generate wave file into temp directory.
  This requires /data/sleep-learner to exist."""

  @staticmethod
  def generate_wave(text):
    filename = str(uuid.uuid4()) + '.wav'
    filename_full = TMP_DIR + filename
    cmd = GEN_CMD.format(
      text=text,
      file=filename_full
    )

    os.system(cmd)
    return filename
