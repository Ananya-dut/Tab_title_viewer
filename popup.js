document.getElementById("show-title").addEventListener("click", async () => {
  try {
    const [tab] = await chrome.tabs.query({active: true,currentWindow: true});
    document.getElementById("title-display").textContent = tab.title || "No title found";
  } catch (error) {
    console.error("Error fetching tab title:", error);
    document.getElementById("title-display").textContent ="Error fetching title";
  }
});
