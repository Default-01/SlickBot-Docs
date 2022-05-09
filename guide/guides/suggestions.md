# Suggestions

Here will be explained how the Suggestion system works! Read this guide carefully so you can make use of all features and to get the best user experience for your server members.

## Configuration

We first wanna configure the suggestions system with the `/settings` command.

<DiscordMessages>
 <DiscordMessage profile="bot">
 <template #interactions>
   <DiscordInteraction profile="user" :command="true">ping</DiscordInteraction>
  </template>
  <template #embeds>
   <DiscordEmbed
    border-color="#038CB5"
    embed-title="💡 Suggestion Configuration"
    footer-icon="https://i.imgur.com/q38P21b.png"
    timestamp=""
   >
    Settings:
- Emojis: ❌ & ✅<br>
- Double Voting: <code>Disabled</code><br>
- Self Voting: <code>Disabled</code><br>
- Mod Role: <code>Not set</code><br>
- Mod Channel: <code>Not set</code><br>
- Suggest Channels: <code>Not set</code><br>
    <template #footer>
     <span>Some footer text here</span>
    </template>
   </DiscordEmbed>
  </template>
 </DiscordMessage>
</DiscordMessages>

:::tip
When you specify the `Mod Channel` option it automatically enables the mod verification system. more info about this below!
:::

## Moderating Suggestions

- Members with the `Mod Role` cant vote on suggestions, when they do they Approve/Reject the suggestion automatically.
- When the `Mod Channel` setting is set the bot will automatically enable suggestion verification system.

:::tip
If you enable `Mod Channel` the new suggestions first get posted in the mod channel, once approved by the mods it will be sent in the suggestion channel.
:::

## Suggestion Statuses

On each Status change the suggestion author gets a DM message showing the status of their suggestion.

### Pending Status
When a new suggestion is created it will be shown as pending, this means the suggestion is open for voting.
<DiscordMessages>
 <DiscordMessage profile="bot">
  <template #embeds>
   <DiscordEmbed
    border-color="#038CB5"
    timestamp="04/27/2022"
    author-name="Default#8127"
    author-icon="https://i.imgur.com/9o6etMo.png"
   >
    <strong>Suggestion:</strong> Test suggestion<br>
    <strong>Status:</strong> Pending<br><br>
▰▰▰▰▰▱▱▱▱▱ 50%
    <template #footer>
     <span>SlickBot Suggestions</span>
    </template>
   </DiscordEmbed>
  </template>
  <template #actions>
   <DiscordButtons>
    <DiscordButton type="secondary">⬆️ 1</DiscordButton>
    <DiscordButton type="secondary">⬇️ 0</DiscordButton>
   </DiscordButtons>
  </template>
 </DiscordMessage>
</DiscordMessages>

### Suggestion Approved
When a moderator with the suggest mod role up votes the suggestion it gets approved automatically.
<DiscordMessages>
 <DiscordMessage profile="bot">
  <template #embeds>
   <DiscordEmbed
    border-color="#77B255"
    timestamp="04/27/2022"
    author-name="Default#8127"
    author-icon="https://i.imgur.com/9o6etMo.png"
   >
    <strong>Suggestion:</strong> Test suggestion<br>
    <strong>Status:</strong> Approved<br><br>
▰▰▰▰▰▱▱▱▱▱ 50%
    <template #footer>
     <span>SlickBot Suggestions</span>
    </template>
   </DiscordEmbed>
  </template>
 </DiscordMessage>
</DiscordMessages>

### Suggestion Rejected
When a moderator with the suggest mod role down votes the suggestion it gets rejected automatically.
<DiscordMessages>
 <DiscordMessage profile="bot">
  <template #embeds>
   <DiscordEmbed
    border-color="#CC3131"
    timestamp="04/27/2022"
    author-name="Default#8127"
    author-icon="https://i.imgur.com/9o6etMo.png"
   >
    <strong>Suggestion:</strong> Test suggestion<br>
    <strong>Status:</strong> Rejected<br><br>
▰▰▰▰▰▱▱▱▱▱ 50%
    <template #footer>
     <span>SlickBot Suggestions</span>
    </template>
   </DiscordEmbed>
  </template>
 </DiscordMessage>
</DiscordMessages>

---

If you have more questions make sure to join our Discord server to ask your questions!