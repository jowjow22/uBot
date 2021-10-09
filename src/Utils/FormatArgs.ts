export default function FormatArgs(message: string) {
  const args = message.slice(process.env.PREFIX?.length).trim().split(/ +/g);

  const formatedArgs = args.shift()?.toLocaleLowerCase();

  return formatedArgs;
}
