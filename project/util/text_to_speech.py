import uuid
import os

GEN_CMD = 'pico2wave -l=en-US -w="{file}" "{text}"'

class TextToSpeech:
  """Utility class to invoke text to speech program and generate wave file into temp directory.
  This requires /data/sleep-learner to exist."""

  @staticmethod
  def generate_wave(text):
    filename = '/data/sleep-learner/' + str(uuid.uuid4()) + '.wav'
    cmd = GEN_CMD.format(
      text=text,
      file=filename
    )

    os.system(cmd)
    return filename
