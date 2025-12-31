const logAndExit = (exitCode: number, message: string) => {
  // Red if error, green otherwise
  const color = exitCode ? 31 : 32;

  console.log(`\x1b[${color}m%s\x1b[0m`, message);
  process.exit(exitCode);
};

(async () => {
  try {
    await import("@/utils/env");

    logAndExit(0, "✅ Valid env variables\n");
  } catch (error: any) {
    logAndExit(1, `❌ Invalid env variables\n\n${error}`);
  }
})();
