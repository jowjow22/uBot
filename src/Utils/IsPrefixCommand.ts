export default function IsPrefixCommand(message: string) {
  const verifyPrefix = message.slice(process.env.PREFIX?.length)[0];

  if (verifyPrefix === process.env.PREFIX) {
    return true;
  }
}
