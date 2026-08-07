// Copyright © 2026 Obsidian Security. All rights reserved.

@id("obsidian-default-allow")
permit(
  principal == Agent::"obsec",
  action,
  resource
);

@id("obsidian-deny-dangerous-shell")
forbid(
  principal == Agent::"obsec",
  action == Action::"RunCommand",
  resource == Command::"dangerous-shell"
);

@id("obsidian-deny-secret-read")
forbid(
  principal == Agent::"obsec",
  action == Action::"RunCommand",
  resource == Command::"secret-read"
);
