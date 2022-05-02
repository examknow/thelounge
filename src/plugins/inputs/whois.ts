"use strict";

import Chan from "src/models/chan";
import Network from "src/models/network";

const commands = ["whois"];

const input = function ({irc}: Network, chan: Chan, cmd: string, args: string[]) {
	if (args.length === 1) {
		// This queries server of the other user and not of the current user, which
		// does not know idle time.
		// See http://superuser.com/a/272069/208074.
		irc.raw("WHOIS", args[0], args[0]);
	} else {
		// Re-assembling the command parsed in client.js
		irc.raw(`${cmd} ${args.join(" ")}`);
	}
};

export default {
	commands,
	input,
};
