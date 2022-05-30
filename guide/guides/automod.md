# Auto Moderation

`Below is the automod system explained:`

## General Options

Every automod feature has individual settings, below are the settings that are included in every feature.

> `Enabled` Toggle the specified feature on/off.
>
> `Ignore Staff` Toggle wether staff members will be ignored.
>
> `Ignore Mods` Toggle wether moderators will be ignored.
>
> `Ignore Channels` Set whitelisted channels to be ignored.
>
> `Delete Message` Toggle wether the initial message should be deleted.
>
> `Mute Duration` Set the mute duration in minutes.
>
> `Warn` Toggle member warning.

## Anti Invites

> **Info:** Prevent members from sending server invites in your discord server.
>
> **Options:**
>
> `No additional options`

## Anti Url

> **Info:** Prevent members from sending unknown urls.
>
> **Options:**
>
> `Allowed Links` Add/Remove whitelisted domains.

## Anti Spam

> **Info:** Prevent members from sending too many messages in a short timespan.
>
> **Options:**
>
> `Messages` The allowed amount of messages.
>
> `Duration` Cooldown duration for message checker.

## Anti Caps

> **Info:** Prevent messages with a set percentage of capped characters.
>
> **Options:**
>
> `Percentage` Set the max allowed percentage of capped text in a message.

:::tip
The Anti Caps module will only moderate messages that have atleast 10 characters.
:::

## Anti Duplicates

> **Info:** Prevent members from sending copied messages.
>
> **Options:**
>
> `Amount` Set the amount of allowed duplicates.
>
> `Duration` Cooldown duration for duplicates checker.

## Anti StaffPing

> **Info:** Prevent members from mentioning staff members.
>
> **Options:**
>
> `Allow Staff Ping` Allow staff pinging.
>
> `Allow Mod Ping` Allow moderator ping.

## Anti Mentions

> **Info:** Prevent members from mass mentioning users and roles.
>
> **Options:**
>
> `Max Roles` The max amount of allowed role mentions in a message.
>
> `Max Users` The max amount of allowed user mentions in a message.

## Anti Emojis

> **Info:** Prevent members from sending too many emojis.
>
> **Options:**
>
> `Percentage` Set the max percentage of emojis in a message.

:::tip
The Anti Emojis module will only moderate on messages that have atleast 10 characters.
:::
