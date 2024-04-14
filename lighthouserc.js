module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      startServerCommand: "npm start",
      url: ["http://localhost:3000"],
      settings: {
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
          //   "pwa",
        ],
        skipAudits: ["uses-http2"],
        chromeFlags: "--no-sandbox",
        extraHeaders: JSON.stringify({
          Cookie: "customCookie=1;foo=bar",
        }),
      },
    },
    assert: {
      //   preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": [
          "error",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
        "categories:seo": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
