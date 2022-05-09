# Polls

here is the polls system explained.

## Configuration

There are a few command options when you're making a poll.

- `title` Provide the poll title.
- `description` The poll description.
- `options` A list of options seperated by comma's.
- `channel` Select a channel to send the poll to.
- `single_vote` Enable or Disable 1 vote per user.
- `duration` Specify a duration for the poll to end automatically.

Once the poll is created you'll see this response.
<DiscordMessages>
 <DiscordMessage profile="bot">
  <template #embeds>
   <DiscordEmbed
    border-color="#038CB5"
    embed-title="🧰 Utilities | Polls"
    footer-icon="https://i.imgur.com/heBM0VA.png"
    timestamp="01/01/2022">
   <DiscordMention type="user">Default</DiscordMention> has created a new poll in <DiscordMention type="channel">channel</DiscordMention>
    <template #footer>
     <span>SlickBot Polls • Created by Default#8127</span>
    </template>
   </DiscordEmbed>
  </template>
 </DiscordMessage>
</DiscordMessages>

## Preview

Below is a example of a active and a ended poll.

Now server members can vote on the poll.
<DiscordMessages>
 <DiscordMessage profile="bot">
  <template #embeds>
   <DiscordEmbed
    border-color="#038CB5"
    embed-title="poll title"
    thumbnail="https://i.imgur.com/g11yXkh.png"
    footer-icon="https://i.imgur.com/heBM0VA.png"
    timestamp="01/01/2022">
   poll description<br>
<br>
<strong>Ends At:</strong> <code>May 10, 2022 12:18 PM</code><br>
<br>
1️⃣ <strong>option 1</strong><br>
▱▱▱▱▱▱▱▱▱▱ 0% (0)<br>
2️⃣ <strong>option 2</strong><br>
▱▱▱▱▱▱▱▱▱▱ 0% (0)<br>
3️⃣ <strong>option 3</strong><br>
▱▱▱▱▱▱▱▱▱▱ 0% (0)<br>
    <template #footer>
     <span>SlickBot Polls • Created by Default#8127</span>
    </template>
   </DiscordEmbed>
  </template>
  <template #actions>
   <DiscordButtons>
    <DiscordButton type="secondary">1️⃣ 0</DiscordButton>
    <DiscordButton type="secondary">2️⃣ 0</DiscordButton>
    <DiscordButton type="secondary">3️⃣ 0</DiscordButton>
    <DiscordButton type="secondary">⚙️</DiscordButton>
   </DiscordButtons>
  </template>
 </DiscordMessage>
</DiscordMessages>

Here the poll is ended, no further voting is possible on this poll.
<DiscordMessages>
 <DiscordMessage profile="bot">
  <template #embeds>
   <DiscordEmbed
    border-color="#B5035C"
    embed-title="poll title Ended!"
    thumbnail="https://i.imgur.com/g11yXkh.png"
    footer-icon="https://i.imgur.com/heBM0VA.png"
    timestamp="01/01/2022">
   poll description<br>
<br>
<strong>Ended At:</strong> <code>May 10, 2022 12:18 PM</code><br>
<br>
🥇 <strong>option 1</strong><br>
▰▰▰▰▰▰▰▰▰▰ 100% (1)<br>
🥈 <strong>option 2</strong><br>
▱▱▱▱▱▱▱▱▱▱ 0% (0)<br>
🥉 <strong>option 3</strong><br>
▱▱▱▱▱▱▱▱▱▱ 0% (0)<br>
    <template #footer>
     <span>SlickBot Polls • Created by Default#8127</span>
    </template>
   </DiscordEmbed>
  </template>
 </DiscordMessage>
</DiscordMessages>

## Settings

Members and mods can use the ⚙️ button to display some poll info. (only mods or admins can end or delete polls)

<DiscordMessages>
 <DiscordMessage profile="bot">
 <template #interactions>
   <DiscordInteraction profile="bot" slot="reply" :command="false" :attachment="true" ></DiscordInteraction>
  </template>
  <template #embeds>
   <DiscordEmbed
    border-color="#038CB5"
    embed-title="⚙️ Polls Settings"
    timestamp="01/01/2022">
    Your Votes:
    <template #footer>
     <span>ID: 1234567891012345</span>
    </template>
   </DiscordEmbed>
  </template>
  <template #actions>
   <DiscordButtons>
    <DiscordButton type="secondary">Votes</DiscordButton>
    <DiscordButton type="secondary">End Poll</DiscordButton>
    <DiscordButton type="secondary">Delete</DiscordButton>
   </DiscordButtons>
  </template>
 </DiscordMessage>
</DiscordMessages>

**options:**

- `Votes` Display the votes for the specified option.
- `End Poll` End the poll.
- `Delete` Delete the poll.
