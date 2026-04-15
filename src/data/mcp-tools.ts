// MCP tools surfaced by 5250ng's embedded server.
// Source of truth: 5250ng/major_features.md §7 and the project README.

export interface McpTool {
  name: string;
  blurb: string;
}

export interface McpCategory {
  name: string;
  tools: McpTool[];
}

export const MCP_CATEGORIES: McpCategory[] = [
  {
    name: 'Session lifecycle',
    tools: [
      { name: 'create_session',   blurb: 'Open a new TN5250 session to a host' },
      { name: 'close_session',    blurb: 'Disconnect and dispose a session' },
      { name: 'list_sessions',    blurb: 'Enumerate active sessions' },
      { name: 'screenshot',       blurb: 'Capture the current screen as PNG' },
    ],
  },
  {
    name: 'Screen inspection',
    tools: [
      { name: 'read_screen',         blurb: 'Return the full 24×80 (or 27×132) buffer' },
      { name: 'read_line',           blurb: 'Return a single row' },
      { name: 'read_region',         blurb: 'Return a rectangular region' },
      { name: 'find_text',           blurb: 'Locate a substring on the screen' },
      { name: 'wait_for_text',       blurb: 'Block until text appears (with timeout)' },
      { name: 'get_cursor_position', blurb: 'Return current row/column' },
      { name: 'get_screen_size',     blurb: 'Return current screen dimensions' },
      { name: 'get_field_at',        blurb: 'Return the field under a given cell' },
    ],
  },
  {
    name: 'Actions',
    tools: [
      { name: 'send_keys',           blurb: 'Send a sequence of keystrokes' },
      { name: 'press_key',           blurb: 'Send a single AID or navigation key' },
      { name: 'press_keys',          blurb: 'Send multiple AID/navigation keys' },
      { name: 'type_text',           blurb: 'Type a string with EBCDIC encoding' },
      { name: 'set_cursor_position', blurb: 'Move the cursor to an absolute cell' },
      { name: 'move_cursor',         blurb: 'Move the cursor relatively or by field' },
      { name: 'clear_inputs',        blurb: 'Clear all unprotected fields' },
      { name: 'login',               blurb: 'Convenience login helper' },
      { name: 'run_5250script',      blurb: 'Execute a 5250Script against this session' },
    ],
  },
  {
    name: 'Filesystem',
    tools: [
      { name: 'read_file',   blurb: 'Read a local file (user-approval gated)' },
      { name: 'write_file',  blurb: 'Write a local file (user-approval gated)' },
      { name: 'list_files',  blurb: 'List a local directory' },
    ],
  },
];

export const MCP_TOOL_COUNT = MCP_CATEGORIES.reduce((n, c) => n + c.tools.length, 0);
