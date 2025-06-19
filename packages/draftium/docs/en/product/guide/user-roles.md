# User Roles

iMind Meeting delineates four distinct user roles, each meticulously crafted to enhance secure, collaborative, and adaptable meeting experiences. The Host role is endowed with the highest level of authority, while the other roles offer varying levels of interaction.

## Host

The Host is responsible for initiating the meeting and possesses comprehensive administrative privileges.

**Key Abilities:**

- Start and end meetings
- Mute any participant
- Promote or demote moderators
- Start and stop recordings
  - This encompasses any recordings initiated by the Moderator
- Remove any participants from the call
- Enable or disable the voice assistant (Jarvis)
- Admit or deny guests
- Access meeting history
- Utilize any AI features
- Adjust personal settings, layout, blur, and view options

## Moderator

Moderators are designated by the Host to assist in managing the session effectively.

**Key Abilities:**

- Mute any participant
- Start and stop recordings
  - This includes any recordings initiated by the Host
- Enable or disable the voice assistant (Jarvis)
- Admit or deny guests
- Remove any participants from the call, except for the Host
- Use the Online Voice Translator and change language (for their own audio)
- Use the AI Assistant (for their own view)
- Engage in chat, raise or lower hands
- Access transcripts and meeting history
- Promote or demote other moderators

## Participant (Authorized User)

Authorized participants are logged-in users who join the meeting without special privileges.

**Key Abilities:**

- Mute or unmute their own microphone
- Enable or disable their own camera
- Share their screen (desktop browser)
- Communicate with the AI Voice Assistant
  - Provided it has been enabled by the Host or Moderator
- Use the AI Assistant (for their own view)
- Use the Online Voice Translator and change language (for their own audio)
- Modify personal layout and settings
- Access chat, raise hand, transcripts, and meeting history

## Guest (Anonymous User)

Guests are users who join the meeting without signing in.

**Key Abilities:**

- Use their own microphone and camera
- Share their screen (desktop browser)
- Use the Online Voice Translator and change language (for their own audio)
- Utilize layout and viewing options (personal only)
- Engage in chat and raise hand

> [!WARNING]
> Guests cannot access any AI features, view transcripts, or manage other participants.

## Role Permissions Summary

| Feature                        | Host  | Moderator | Participant | Guest |
| ------------------------------ | ----- | --------- | ----------- | ----- |
| Initiate Meeting               | ✅    | ❌        | ❌          | ❌    |
| Mute Any Participant           | ✅    | ✅        | ❌          | ❌    |
| Unmute Any Participant         | ❌    | ❌        | ❌          | ❌    |
| Mute/Unmute Own Mic            | ✅    | ✅        | ✅          | ✅    |
| Enable/Disable Own Camera      | ✅    | ✅        | ✅          | ✅    |
| Start/Stop Recording           | ✅    | ✅        | ❌          | ❌    |
| Screen Share (Desktop)         | ✅    | ✅        | ✅          | ✅    |
| Enable/Disable Voice Assistant | ✅    | ✅        | ❌          | ❌    |
| Use AI Assistant               | ✅    | ✅        | ✅          | ❌    |
| Use Online Translation         | ✅    | ✅        | ✅          | ✅    |
| Change Translation Language    | ✅    | ✅        | ✅          | ✅    |
| Raise / Lower Hand             | ✅/✅ | ✅/✅     | ✅/❌       | ✅/❌ |
| See Transcript                 | ✅    | ✅        | ✅          | ❌    |
| Change Layout / Settings       | ✅    | ✅        | ✅          | ✅    |
| Enable/Disable Background Blur | ✅    | ✅        | ✅          | ✅    |
| Admit/Deny Guest               | ✅    | ✅        | ❌          | ❌    |
| Access Meeting History         | ✅    | ✅        | ✅          | ❌    |
| Remove Participants            | ✅    | ✅        | ❌          | ❌    |
| Promote/Demote Moderator       | ✅    | ✅        | ❌          | ❌    |
