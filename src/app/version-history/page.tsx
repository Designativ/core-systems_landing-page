"use client";

import { useEffect, useState } from "react";
import { Calendar, User, GitCommit, ExternalLink } from "lucide-react";

interface Commit {
  hash: string;
  fullHash: string;
  author: string;
  email: string;
  date: string;
  message: string;
}

export default function VersionHistoryPage() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/version-history")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setCommits(data.commits || []);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load version history");
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const viewVersion = (hash: string) => {
    // Copy checkout command to clipboard
    const command = `git checkout ${hash}`;
    navigator.clipboard.writeText(command).then(() => {
      alert(`Command copied to clipboard:\n${command}\n\nRun this in your terminal, then refresh the browser.`);
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terminal-lime mx-auto mb-4"></div>
          <p className="text-terminal-text-secondary">Loading version history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-text-primary mb-2">
            Version History
          </h1>
          <p className="text-terminal-text-secondary">
            View and navigate through previous versions of the website
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {commits.map((commit, index) => (
            <div
              key={commit.fullHash}
              className="border border-gray-200 rounded-lg p-6 bg-white hover:border-terminal-lime/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GitCommit className="h-4 w-4 text-terminal-lime" />
                    <code className="text-sm font-mono text-terminal-text-secondary bg-gray-100 px-2 py-1 rounded">
                      {commit.hash}
                    </code>
                  </div>
                  <h3 className="text-lg font-semibold text-terminal-text-primary mb-2">
                    {commit.message}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-terminal-text-secondary mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{commit.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(commit.date)}</span>
                </div>
              </div>

              <button
                onClick={() => viewVersion(commit.fullHash)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-lime text-black rounded-md font-medium hover:bg-terminal-lime-hover transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View This Version
              </button>
            </div>
          ))}
        </div>

        {commits.length === 0 && !loading && (
          <div className="text-center py-12 text-terminal-text-secondary">
            <p>No version history found.</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-terminal-text-primary">How to use:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-terminal-text-secondary">
            <li>Click "View This Version" on any commit</li>
            <li>The git checkout command will be copied to your clipboard</li>
            <li>Run the command in your terminal</li>
            <li>Refresh your browser to see that version</li>
            <li>To return to the latest version, run: <code className="bg-white px-2 py-1 rounded">git checkout main</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
