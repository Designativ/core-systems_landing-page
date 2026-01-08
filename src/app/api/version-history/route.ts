import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Get git log with commit info
    const { stdout } = await execAsync(
      'git log --pretty=format:"%H|%an|%ae|%ad|%s" --date=iso -20',
      { cwd: process.cwd() }
    );

    const commits = stdout
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => {
        const [hash, author, email, date, ...messageParts] = line.split("|");
        const message = messageParts.join("|");
        return {
          hash: hash.substring(0, 7), // Short hash
          fullHash: hash,
          author,
          email,
          date,
          message,
        };
      });

    return NextResponse.json({ commits }, { status: 200 });
  } catch (error) {
    console.error("Error fetching git history:", error);
    return NextResponse.json(
      { error: "Failed to fetch version history", commits: [] },
      { status: 500 }
    );
  }
}
