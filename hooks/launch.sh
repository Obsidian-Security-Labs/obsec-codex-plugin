#!/bin/sh
# Copyright © 2026 Obsidian Security. All rights reserved.

set -eu

task_path_node="$(command -v node || true)"
task_bundled_node="${HOME:-}/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
task_plugin_root="$(CDPATH='' cd -- "$(dirname -- "$0")/.." && pwd)"
task_node_bin=""

node_is_compatible() {
	[ -n "$1" ] && [ -x "$1" ] || return 1
	task_node_major="$("$1" -p "Number.parseInt(process.versions.node.split('.')[0], 10)" 2>/dev/null)" || return 1
	[ "$task_node_major" -ge 22 ] 2>/dev/null
}

if node_is_compatible "$task_path_node"; then
	task_node_bin="$task_path_node"
elif node_is_compatible "$task_bundled_node"; then
	task_node_bin="$task_bundled_node"
fi

if [ -z "$task_node_bin" ]; then
	echo "ObSec guardrails require Node.js 22 or newer." >&2
	exit 127
fi

export PLUGIN_ROOT="$task_plugin_root"
exec "$task_node_bin" "$task_plugin_root/runtime/guardrail.mjs"
