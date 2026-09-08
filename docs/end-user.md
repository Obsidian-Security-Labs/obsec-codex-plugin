# Obsidian Security Codex Plugin User Guide

![Obsidian Security](images/obsidian-header.png)

The Obsidian Security Codex Plugin provides guided workflows for inspecting
SaaS security posture and synchronizing the results with Obsidian Security.

## Install and connect

Follow the [installation guide](https://github.com/Obsidian-Security-Labs/obsec-codex-plugin#installation) to install the
plugin, configure your Obsidian Security API connection, enable the in-app
Browser, and verify the hook and MCP server. The
[prerequisites](https://github.com/Obsidian-Security-Labs/obsec-codex-plugin#prerequisites) list the required host, runtime,
and account access.

Start a new Codex task after installing or updating the plugin.

## Choose and configure a model

The plugin uses whichever model is selected in Codex; there is no separate
model configuration for the plugin. Select a model before starting the inspection.
The workflow reads live page snapshots from the Codex in-app Browser and does
not require image uploads.

Available models and menu labels may vary by Codex version and organizational
policy. Screenshots in this guide illustrate the controls; they do not specify
a required model.

![Codex model selection menu](images/codex-model-selector.png)

## Configure your permission settings

Use the permissions control below the composer to choose how Codex handles
actions that need access beyond the current workspace. For most inspections,
start with **Ask for approval**.

![Codex approval settings](images/codex-permission-settings.png)

- **Ask for approval** - Codex works within the allowed workspace, while the
  guarded Browser workflow verifies the target and asks you to approve every
  guarded Browser action before it runs. Other access requests follow your
  Codex configuration and organizational policy.
- **Approve for me** - Codex keeps the same workspace boundary, while the
  guarded Browser workflow still verifies and submits each Browser action
  separately. Eligible actions go to an automatic reviewer; anything that
  is denied is reported for your attention. Automatic review can make incorrect
  decisions; see the [review guidance](auto-review-policy.md).
- **Full Access** - Codex runs without local sandbox restrictions or approval
  prompts and can access the internet and files outside the workspace. Use it
  only when that broad access is intentional. Browser action requests pass
  without prompting, while the plugin retains policy and receipt checks.

## Review a guarded Browser action

In **Ask for approval** mode, Codex displays an approval request before a
guarded Browser action runs. The request shows the proposed action, target,
host, and Browser tab. Compare these details with the visible application
before choosing **Allow once** or **Deny**.

![Guarded Browser approval in a test Slack account](images/guarded-browser-approval.png)

In this test Slack account, the request proposes clicking **Admin**. Confirm that the
Browser pointer is on the intended Admin control and that the host is the
application you asked to inspect. Deny the request if these details do not
match.

## How to use Codex Password Manager

The Codex in-app Browser uses a separate browser profile with its own saved
logins. To open the password manager:

1. Open the three-dot menu in the upper-right corner of the Browser.
2. Select **Passwords and autofill**, then **Password manager**.

![Browser password manager menu](images/codex-password-manager-menu.png)

Follow your organization's policy for saving or importing credentials. Menu
labels may differ in your Codex version.

### Save a password on your next login

In **Password manager**, open **Advanced** and turn on **Offer to save passwords
and passkeys**.

![Password manager advanced settings](images/codex-password-manager-advanced.png)

If your organization permits saved passwords, choose **Save** when prompted
during sign-in. Saved logins may help with future sessions, but do not remove
an application's MFA or other authentication requirements. Return to
**Password manager** to edit or delete a saved login.

Do not paste passwords into chat. Complete password entry, SSO, MFA, CAPTCHA,
and other authentication steps in the visible Browser.

## First posture inspection

Ask Codex to inspect the security posture of a SaaS application. For example:

> Capture the security posture settings from Acme SaaS.

You can provide a starting URL if the application is not easily discoverable.
The exact wording is flexible; the request should identify the application and,
when useful, the security settings or administrative area to inspect.

### Before the inspection

Make sure the Codex in-app Browser is available. If the SaaS application
requires authentication, sign in through the Browser or be prepared to complete
the login steps when Codex pauses.

Do not paste passwords, API tokens, cookies, recovery codes, or MFA codes into
chat. Complete SSO, MFA, CAPTCHA, or other human verification steps directly in
the Browser when requested.

### During the inspection

Codex navigates the visible application interface and reads the relevant
security settings. Respond to approval requests as they appear. If Codex cannot
locate a settings page, you can provide a link or describe where it should look.

### Review the results

Codex summarizes the settings it found, any settings that were inaccessible or
could not be found, and the page or section supporting each finding. A
successful inspection is saved locally so it can be reviewed or run again.

After reviewing the findings, ask Codex to upload the captured settings to
Obsidian Security. Confirm the destination before approving the upload.

## Schedule recurring posture inspections

After completing an inspection, you can ask Codex to run it on a recurring
schedule and send the results to Obsidian. For example:

> Inspect Slack security posture every Tuesday at 5:00 PM America/Los_Angeles
> and upload the findings to Obsidian Security.

Because scheduled inspections run without you present to approve each Browser
action, Codex will ask permission to enable unattended Browser approval for
that specific playbook. This opt-in retains policy and stale-target checks.
Confirm the schedule, timezone, and upload destination before enabling it.
Browser sign-in and your organization's credential policy still apply.

After confirmation, Codex creates the schedule and reports its frequency and
next run. If the website is signed out or requires MFA or other user input, the
run stops and records the failure without replacing the last successful
settings. Results are uploaded only when the playbook has an Obsidian
connection ID.
Confirm that connection before scheduling uploads.
