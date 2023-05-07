import React, { useEffect, useState } from "react";

function LatestReleaseButton() {
  const [downloadUrl, setDownloadUrl] = useState(
    "https://github.com/evo-lua/evo-runtime/releases"
  );
  const [releaseInfo, setReleaseInfo] = useState("");
  const [assets, setAssets] = useState([]);

  const getAccurateTimeDifference = (timeDifference) => {
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  const getTimeDifferenceInDays = (timeDifference) => {
    return `${Math.floor(timeDifference / MILLISECONDS_PER_DAY)} days ago`;
  };

  const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

  const getHumanReadableTimeDifference = (releaseDate) => {
    const now = new Date();
    const timeDifference = now - releaseDate;

    const wasLastReleaseToday = timeDifference < MILLISECONDS_PER_DAY;
    const humanReadableTimeDiff = wasLastReleaseToday
      ? getAccurateTimeDifference(timeDifference)
      : getTimeDifferenceInDays(timeDifference);

    return humanReadableTimeDiff;
  };

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
          getHumanReadableTimeDifference(releaseDate);

        setDownloadUrl(releaseUrl);
        setReleaseInfo(
          `Latest Release: ${releaseTag} (${humanReadableTimeDifference})`
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
