import { makeKeys } from '../src/token.js';
const k = await makeKeys();
console.log(`Secret (wrangler secret put SIGNING_KEY):\n${k.signingKey}\n\nPublic (PUBLIC_KEY in wrangler.toml and in each site):\n${k.publicKey}`);
