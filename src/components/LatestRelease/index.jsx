import React, { useEffect, useState } from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

function LatestReleaseButton() {
  const [downloadUrl, setDownloadUrl] = useState(
    "https://github.com/evo-lua/evo-runtime/releases"
  );
  const [releaseInfo, setReleaseInfo] = useState(
    "Fetching latest release info..."
  );
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/evo-lua/evo-runtime/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        const releaseTag = data.tag_name;
        const releaseUrl = data.html_url;
        const releaseDate = new Date(data.published_at);
        const assets = data.assets;

        setAssets(assets);

        const humanReadableTimeDifference =
          formatDistanceToNowStrict(releaseDate);

        setDownloadUrl(releaseUrl);
        setReleaseInfo(
          `Latest Release: ${releaseTag} (${releaseDate.toDateString()} · ${humanReadableTimeDifference} ago)`
        );
      })
      .catch((error) => {
        console.error("Error fetching release information:", error);
      });
  }, []);

  const getAssetDownloadUrl = (fileExtension) => {
    const asset = assets.find((asset) => asset.name.includes(fileExtension));
    return asset ? asset.browser_download_url : "";
  };

  return (
    <div className="hero-buttons-container">
      <a
        className="hero-text"
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {releaseInfo}
      </a>
      <div>
        <a className="hero-button" href={getAssetDownloadUrl("exe")}>
          Download for Windows (x64)
        </a>
        <a className="hero-button" href={getAssetDownloadUrl("linux-x64")}>
          Download for Linux (x64)
        </a>
        <a className="hero-button" href={getAssetDownloadUrl("macos-x64")}>
          Download for Mac OS (x64)
        </a>
      </div>
    </div>
  );
}

export default LatestReleaseButton;
