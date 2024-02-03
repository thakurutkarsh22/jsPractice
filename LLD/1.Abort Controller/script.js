// cancel the ongoing API request if it is not fulfilled.

const controller = new AbortController();
const signal = controller.signal;
const url = "video.mp4";

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});
